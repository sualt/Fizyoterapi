import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaCheckCircle,
  FaStar,
  FaInstagram,
  FaArrowRight,
  FaPhone,
  FaWhatsapp,
  FaBone,
  FaHandsHelping,
  FaDumbbell,
  FaRunning,
  FaHeadset,
  FaTooth,
  FaHeartbeat,
  FaUserMd,
} from 'react-icons/fa'
import heroImage from '../assets/hero.jpeg'
import { getPublicReviews, readReviews, submitReview } from '../utils/reviews'
import { supabase } from '../utils/supabase'
import {
  PHONE,
  WHATSAPP,
  INSTAGRAM,
} from '../config'
import QuickAppointmentForm from '../components/QuickAppointmentForm'

const services = [
  { icon: <FaBone className="text-primary" />, title: 'Fizik Tedavi & Klinik Pilates', desc: 'Kas-iskelet problemlerini kökten çözen kişiye özel rehabilitasyon.' },
  { icon: <FaHandsHelping className="text-primary" />, title: 'Manuel Terapi', desc: 'İlaçsız, doğrudan temas ile hızlı ağrı giderimi.' },
  { icon: <FaDumbbell className="text-primary" />, title: 'Reformer Klinik Egzersiz', desc: 'Kontrollü direnç ile dengeli ve güvenli kas güçlendirme.' },
  { icon: <FaRunning className="text-primary" />, title: 'Sporcu Rehabilitasyonu', desc: 'Yaralanma sonrası güvenli ve hızlı spora dönüş.' },
  { icon: <FaHeadset className="text-primary" />, title: 'Migren & Baş Ağrısı', desc: 'Boyun kökenli baş ağrılarında kalıcı çözüm odaklı yaklaşım.' },
  { icon: <FaTooth className="text-primary" />, title: 'Bruksizm & TME', desc: 'Çene ağrısı ve diş sıkma problemlerinde tedavi planı.' },
  { icon: <FaHeartbeat className="text-primary" />, title: 'Recovery & Medikal Masaj', desc: 'Kas toparlanmasını hızlandıran profesyonel masaj teknikleri.' },
  { icon: <FaUserMd className="text-primary" />, title: 'Kadın & Erkek Sağlığı', desc: 'Pelvik taban ve core kaslarını güçlendiren özel program.' },
]

const stats = [
  { num: '500+', label: 'Mutlu Hasta' },
  { num: '5+', label: 'Yıllık Tecrübe' },
  { num: '9', label: 'Hizmet Alanı' },
  { num: '4.9', label: 'Google Puanı ⭐' },
]

/* ── Ana Sayfa ──────────────────────────────────────────────── */
export default function Home() {
  const [reviews, setReviews] = useState(readReviews)
  const [reviewForm, setReviewForm] = useState({ name: '', text: '', rating: 5 })
  const [reviewSent, setReviewSent] = useState(false)
  const [reviewError, setReviewError] = useState('')

  useEffect(() => {
    let isMounted = true
    getPublicReviews()
      .then(publicReviews => {
        if (isMounted) setReviews(publicReviews)
      })
      .catch(() => {
        if (isMounted) setReviews([])
      })

    return () => { isMounted = false }
  }, [])

  const handleReviewSubmit = async e => {
    e.preventDefault()
    const review = {
      ...reviewForm,
      name: reviewForm.name.trim(),
      text: reviewForm.text.trim(),
    }

    try {
      await submitReview(review)
      setReviewForm({ name: '', text: '', rating: 5 })
      setReviewSent(true)
      setReviewError('')
    } catch {
      setReviewError('Yorum şu anda gönderilemedi. Lütfen daha sonra tekrar deneyin.')
    }
  }

  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-slate-50 to-primary/5 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center py-20 relative z-10">

          {/* Sol: Metin */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-block bg-primary text-white font-semibold px-4 py-2 rounded-full text-sm shadow-md">
              Fizyoterapi Kliniği
            </span>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900">
              Ağrısız Bir Yaşam İçin
              <span className="block text-primary mt-2">
                Kişiye Özel Tedavi
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Bel, boyun, omuz ağrıları, spor yaralanmaları ve postür bozukluklarında
              bilimsel yöntemlerle kişiye özel tedavi programları sunuyoruz.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Bel & Boyun Ağrısı', 'Skolyoz', 'Sporcu Rehabilitasyonu', 'Klinik Pilates'].map(tag => (
                <span key={tag} className="flex items-center gap-1 text-sm text-primary bg-primary/10 px-3 py-1.5 rounded-full font-semibold">
                  <FaCheckCircle className="text-xs" /> {tag}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <QuickAppointmentForm compact />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/hizmetler"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-7 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all"
              >
                Hizmetlerimiz <FaArrowRight />
              </Link>
            </div>

            {/* Hızlı iletişim linkleri */}
            <div className="flex items-center gap-5 pt-1">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-green-600 font-semibold hover:underline"
              >
                <FaWhatsapp className="text-base" /> WhatsApp'tan Yaz
              </a>
              <span className="text-gray-200">|</span>
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm text-slate-500 font-semibold hover:text-primary">
                <FaPhone className="text-base" /> Hemen Ara
              </a>
            </div>
          </motion.div>

          {/* Sağ: Görsel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[550px]">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={heroImage}
                alt="Fizyoterapist"
                width="550"
                height="600"
                fetchPriority="high"
                className="relative w-full max-h-[600px] aspect-[11/12] object-contain rounded-[32px] bg-white shadow-xl"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-lg"><FaStar className="text-primary" /></div>
              <div>
                <div className="font-bold text-base text-slate-900">500+ Mutlu Hasta</div>
                <div className="text-xs text-slate-500">%98 Memnuniyet Oranı</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-display font-bold">{s.num}</div>
              <div className="text-white/80 mt-1 font-semibold">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HİZMETLER */}
<section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
  {/* Arka plan dekoratif elementler */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <span className="inline-block text-primary font-bold text-xs uppercase tracking-[0.2em] bg-primary/10 px-4 py-2 rounded-full mb-4">Neler Yapıyoruz</span>
      <h2 className="font-display text-5xl font-bold text-gray-900 mt-2">Hizmetlerimiz</h2>
      <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">Her hasta özel, her program kişiye özgü. Bilimsel yaklaşımla kalıcı sonuçlar.</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="group relative bg-white rounded-3xl p-7 cursor-pointer overflow-hidden
            border border-gray-100 hover:border-transparent
            shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            transition-all duration-300"
        >
          {/* Hover'da gradient arka plan */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

          {/* İçerik */}
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl transition-all duration-300 group-hover:bg-white/15">
                {s.icon}
              </div>
            </div>
            <h3 className="font-bold text-gray-900 group-hover:text-white text-base mb-2 leading-snug transition-colors duration-300">
              {s.title}
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-white/80 leading-relaxed transition-colors duration-300">
              {s.desc}
            </p>
          </div>

          {/* Ok ikonu - hover'da görünür */}
          <div className="relative z-10 mt-5 flex items-center gap-1 text-primary group-hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0">
            <span className="text-xs font-bold">Detaylar</span>
            <FaArrowRight className="text-xs" />
          </div>

          {/* Köşe dekorasyon */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 group-hover:bg-white/10 rounded-full transition-colors duration-300" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/3 group-hover:bg-white/5 rounded-full transition-colors duration-300" />
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link to="/hizmetler" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent transition-all shadow-md hover:shadow-xl hover:-translate-y-1">
        Tüm Hizmetleri Gör <FaArrowRight />
      </Link>
    </div>
  </div>
</section>

      {/* INSTAGRAM */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Sosyal Medya</span>
            <h2 className="font-display text-4xl font-bold text-gray-800 mt-2 flex items-center justify-center gap-3">
              <FaInstagram className="text-pink-500" /> Instagram
            </h2>
            <p className="text-gray-500 mt-2">
              <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer"
                className="text-primary font-bold hover:underline">
                @{INSTAGRAM}
              </a>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: 'https://www.instagram.com/p/DcgCPHQO8VC/embed', title: 'Instagram gönderisi 1' },
              { src: 'https://www.instagram.com/p/CyGb14gIFpR/embed', title: 'Instagram gönderisi 2' },
              { src: 'https://www.instagram.com/p/Dd_isw8uBmC/embed', title: 'Instagram gönderisi 3' },
            ].map(item => (
              <iframe
                key={item.src}
                src={item.src}
                className="w-full rounded-2xl bg-white shadow-lg"
                height="600"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title={item.title}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <FaInstagram /> Instagram'da Takip Et
            </a>
          </div>
        </div>
      </section>

      {/* YORUMLAR */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Hasta Deneyimleri</span>
            <h2 className="font-display text-4xl font-bold text-gray-800 mt-2">Yorumlar</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.filter(review => review.status === 'approved').map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-6 border border-primary/10"
              >
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(review.rating)].map((_, j) => <FaStar key={j} />)}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {review.name[0]}
                  </div>
                  <span className="font-bold text-gray-800">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {supabase ? <form onSubmit={handleReviewSubmit} className="max-w-2xl mx-auto mt-12 border-t border-gray-100 pt-10">
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-6 text-center">Deneyiminizi paylaşın</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block text-sm font-semibold text-gray-700">
                Adınız
                <input
                  required
                  maxLength={60}
                  value={reviewForm.name}
                  onChange={e => setReviewForm({ ...reviewForm, name: e.target.value })}
                  className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3 font-normal focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="Adınız"
                />
              </label>
              <div>
                <span className="block text-sm font-semibold text-gray-700 mb-2">Puanınız</span>
                <div className="flex gap-2" role="group" aria-label="Yıldız puanı seçin">
                  {[1, 2, 3, 4, 5].map(rating => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setReviewForm({ ...reviewForm, rating })}
                      aria-label={`${rating} yıldız`}
                      aria-pressed={reviewForm.rating === rating}
                      className="text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      <FaStar className={rating <= reviewForm.rating ? 'text-yellow-400' : 'text-gray-200'} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <label className="block text-sm font-semibold text-gray-700 mt-4">
              Yorumunuz
              <textarea
                required
                maxLength={500}
                rows={4}
                value={reviewForm.text}
                onChange={e => setReviewForm({ ...reviewForm, text: e.target.value })}
                className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3 font-normal resize-y focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="Deneyiminizi yazın..."
              />
            </label>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500" role="status">
                {reviewError || (reviewSent ? 'Yorumunuz inceleme için kaydedildi.' : 'Yorumunuz site sahibi tarafından incelendikten sonra yayınlanır.')}
              </p>
              <button type="submit" className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-accent transition-colors">
                Yorumu Gönder
              </button>
            </div>
          </form> : <p className="mx-auto mt-12 max-w-2xl border-t border-gray-100 pt-8 text-center text-sm text-gray-500">Yorum gönderimi şu anda kullanılamıyor.</p>}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-display text-4xl font-bold mb-4">Ağrılarınızdan Kurtulun</h2>
          <p className="text-white/80 text-lg mb-8">Ücretsiz ön muayene için hemen randevu alın. İlk adımı atmak yeterli.</p>
          <Link to="/randevu"
            className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-block">
            📅 Ücretsiz Randevu Al
          </Link>
        </div>
      </section>

    </main>
  )
}