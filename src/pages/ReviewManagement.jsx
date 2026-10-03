import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaCheck, FaEdit, FaSave, FaSignOutAlt, FaStar, FaTimes, FaTrash } from 'react-icons/fa'
import { editReview, getAllReviews, removeReview, setReviewStatus } from '../utils/reviews'
import { supabase } from '../utils/supabase'

async function getAdminState(user) {
  const { data: admin, error } = await supabase
    .from('review_admins')
    .select('user_id')
    .eq('user_id', user.id)
    .maybeSingle()

  if (error) throw error
  if (!admin) return null

  return { user, reviews: await getAllReviews() }
}

export default function ReviewManagement() {
  const [user, setUser] = useState(null)
  const [reviews, setReviews] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({ name: '', text: '', rating: 5 })
  const [checkingSession, setCheckingSession] = useState(Boolean(supabase))
  const [busy, setBusy] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!supabase) return

    let isMounted = true
    const restoreSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session?.user) {
        try {
          const adminState = await getAdminState(data.session.user)
          if (isMounted && adminState) {
            setUser(adminState.user)
            setReviews(adminState.reviews)
          } else if (isMounted) {
            await supabase.auth.signOut()
          }
        } catch {
          if (isMounted) setErrorMessage('Yorum yönetimine erişim doğrulanamadı.')
        }
      }

      if (isMounted) setCheckingSession(false)
    }

    restoreSession()
    return () => { isMounted = false }
  }, [])

  const handleLogin = async event => {
    event.preventDefault()
    if (!supabase || busy) return

    setBusy(true)
    setErrorMessage('')
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error || !data.user) {
      setErrorMessage('Giriş bilgileri doğrulanamadı.')
      setBusy(false)
      return
    }

    try {
      const adminState = await getAdminState(data.user)
      if (!adminState) {
        await supabase.auth.signOut()
        setErrorMessage('Bu hesap yorum yönetimi için yetkili değil.')
      } else {
        setUser(adminState.user)
        setReviews(adminState.reviews)
      }
    } catch {
      setErrorMessage('Yorum yönetimine erişim doğrulanamadı.')
      await supabase.auth.signOut()
    }

    setPassword('')
    setBusy(false)
  }

  const updateReview = async (id, status) => {
    setBusy(true)
    setErrorMessage('')
    try {
      await setReviewStatus(id, status)
      setReviews(current => current.map(review => review.id === id ? { ...review, status } : review))
    } catch {
      setErrorMessage('Yorum güncellenemedi. Yetkinizi ve bağlantınızı kontrol edin.')
    }
    setBusy(false)
  }

  const deleteReview = async id => {
    if (!window.confirm('Bu yorumu silmek istiyor musunuz?')) return
    setBusy(true)
    setErrorMessage('')
    try {
      await removeReview(id)
      setReviews(current => current.filter(review => review.id !== id))
    } catch {
      setErrorMessage('Yorum silinemedi. Yetkinizi ve bağlantınızı kontrol edin.')
    }
    setBusy(false)
  }

  const startEditing = review => {
    setEditingId(review.id)
    setEditForm({ name: review.name, text: review.text, rating: review.rating })
    setErrorMessage('')
  }

  const saveEdit = async () => {
    if (!editingId || !editForm.name.trim() || !editForm.text.trim()) return
    setBusy(true)
    setErrorMessage('')
    try {
      await editReview(editingId, editForm)
      setReviews(current => current.map(review => review.id === editingId
        ? { ...review, ...editForm, name: editForm.name.trim(), text: editForm.text.trim() }
        : review))
      setEditingId(null)
    } catch {
      setErrorMessage('Yorum düzenlenemedi. Yetkinizi ve bağlantınızı kontrol edin.')
    }
    setBusy(false)
  }

  const handleLogout = async () => {
    await supabase?.auth.signOut()
    setUser(null)
    setReviews([])
  }

  const orderedReviews = [...reviews].sort((a, b) => {
    if (a.status === 'pending' && b.status !== 'pending') return -1
    if (a.status !== 'pending' && b.status === 'pending') return 1
    return new Date(b.createdAt) - new Date(a.createdAt)
  })

  if (!supabase) {
    return (
      <main className="pt-16 min-h-screen bg-gray-50">
        <section className="max-w-xl mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold text-gray-900">Yorum Yönetimi</h1>
          <p className="mt-4 text-gray-600">Güvenli yönetim için Supabase bağlantısı ve veritabanı politikaları yapılandırılmalıdır.</p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"><FaArrowLeft /> Ana sayfaya dön</Link>
        </section>
      </main>
    )
  }

  if (checkingSession) {
    return <main className="pt-16 min-h-screen bg-gray-50" aria-busy="true" />
  }

  if (!user) {
    return (
      <main className="pt-16 min-h-screen bg-gray-50">
        <section className="max-w-md mx-auto px-4 py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary"><FaArrowLeft /> Ana sayfaya dön</Link>
          <form onSubmit={handleLogin} className="mt-8 space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Site Sahibi</p>
              <h1 className="mt-1 font-display text-3xl font-bold text-gray-900">Yorum Yönetimi</h1>
            </div>
            <label className="block text-sm font-semibold text-gray-700">E-posta
              <input type="email" autoComplete="username" required value={email} onChange={event => setEmail(event.target.value)} className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 font-normal" />
            </label>
            <label className="block text-sm font-semibold text-gray-700">Şifre
              <input type="password" autoComplete="current-password" required value={password} onChange={event => setPassword(event.target.value)} className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 font-normal" />
            </label>
            {errorMessage && <p role="alert" className="text-sm text-red-700">{errorMessage}</p>}
            <button type="submit" disabled={busy} className="w-full rounded-lg bg-primary px-4 py-3 font-bold text-white disabled:opacity-50">{busy ? 'Kontrol ediliyor…' : 'Giriş yap'}</button>
          </form>
        </section>
      </main>
    )
  }

  return (
    <main className="pt-16 min-h-screen bg-gray-50">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary">
          <FaArrowLeft /> Ana sayfaya dön
        </Link>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-gray-200 pb-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Yönetim</p>
            <h1 className="font-display text-3xl font-bold text-gray-900 mt-1">Yorumlar</h1>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>{reviews.filter(review => review.status === 'pending').length} bekleyen yorum</span>
            <button type="button" onClick={handleLogout} className="inline-flex items-center gap-2 text-gray-600 hover:text-primary"><FaSignOutAlt /> Çıkış</button>
          </div>
        </div>
        {errorMessage && <p role="alert" className="mt-4 text-sm text-red-700">{errorMessage}</p>}

        {orderedReviews.length === 0 ? (
          <p className="py-12 text-center text-gray-500">Henüz yorum yok.</p>
        ) : (
          <div className="divide-y divide-gray-200">
            {orderedReviews.map(review => (
              <article key={review.id} className="py-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h2 className="font-bold text-gray-900">{review.name}</h2>
                      <span className={`text-xs font-semibold ${review.status === 'approved' ? 'text-green-700' : 'text-amber-700'}`}>
                        {review.status === 'approved' ? 'Yayında' : 'Onay bekliyor'}
                      </span>
                      <span className="text-xs text-gray-400">{new Date(review.createdAt).toLocaleDateString('tr-TR')}</span>
                    </div>
                    {editingId === review.id ? (
                      <div className="mt-3 max-w-2xl space-y-3">
                        <label className="block text-sm font-semibold text-gray-700">Ad
                          <input
                            value={editForm.name}
                            maxLength={60}
                            onChange={event => setEditForm(current => ({ ...current, name: event.target.value }))}
                            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 font-normal"
                          />
                        </label>
                        <label className="block text-sm font-semibold text-gray-700">Yorum
                          <textarea
                            value={editForm.text}
                            maxLength={500}
                            rows={4}
                            onChange={event => setEditForm(current => ({ ...current, text: event.target.value }))}
                            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 font-normal"
                          />
                        </label>
                        <label className="block text-sm font-semibold text-gray-700">Puan
                          <select
                            value={editForm.rating}
                            onChange={event => setEditForm(current => ({ ...current, rating: Number(event.target.value) }))}
                            className="mt-1 block rounded-lg border border-gray-200 px-3 py-2 font-normal"
                          >
                            {[1, 2, 3, 4, 5].map(rating => <option key={rating} value={rating}>{rating} yıldız</option>)}
                          </select>
                        </label>
                        <div className="flex gap-2">
                          <button type="button" onClick={saveEdit} disabled={busy} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"><FaSave /> Kaydet</button>
                          <button type="button" onClick={() => setEditingId(null)} disabled={busy} className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 disabled:opacity-50"><FaTimes /> İptal</button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex text-yellow-400 my-2" aria-label={`${review.rating} yıldız`}>
                          {[...Array(review.rating)].map((_, index) => <FaStar key={index} />)}
                        </div>
                        <p className="text-gray-600 leading-relaxed break-words">{review.text}</p>
                      </>
                    )}
                  </div>
                  {editingId !== review.id && (
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => startEditing(review)}
                        title="Yorumu düzenle"
                        aria-label="Yorumu düzenle"
                        className="w-10 h-10 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100 flex items-center justify-center"
                      >
                        <FaEdit />
                      </button>
                      <button
                        type="button"
                        onClick={() => updateReview(review.id, review.status === 'approved' ? 'pending' : 'approved')}
                        disabled={busy}
                        title={review.status === 'approved' ? 'Yayından kaldır' : 'Yorumu yayınla'}
                        aria-label={review.status === 'approved' ? 'Yayından kaldır' : 'Yorumu yayınla'}
                        className="w-10 h-10 border border-gray-200 rounded-lg text-green-700 hover:bg-green-50 flex items-center justify-center disabled:opacity-50"
                      >
                        <FaCheck />
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteReview(review.id)}
                        disabled={busy}
                        title="Yorumu sil"
                        aria-label="Yorumu sil"
                        className="w-10 h-10 border border-gray-200 rounded-lg text-red-600 hover:bg-red-50 flex items-center justify-center disabled:opacity-50"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}