import { supabase } from './supabase.js'

const initialReviews = [
  {
    id: 'initial-ayse',
    name: 'Ayşe K.',
    text: 'Bel fıtığım için geldim. 8 seansta inanılmaz iyileştim. Kesinlikle tavsiye ediyorum!',
    rating: 5,
    status: 'approved',
    createdAt: '2026-09-30T00:00:00.000Z',
  },
  {
    id: 'initial-mehmet',
    name: 'Mehmet T.',
    text: 'Boyun tutulması ve migren şikayetlerimde çok büyük iyileşme oldu.',
    rating: 5,
    status: 'approved',
    createdAt: '2026-09-30T00:00:00.000Z',
  },
  {
    id: 'initial-zeynep',
    name: 'Zeynep A.',
    text: 'Reformer seansları sayesinde duruşum düzeldi, sırt ağrım geçti.',
    rating: 5,
    status: 'approved',
    createdAt: '2026-09-30T00:00:00.000Z',
  },
]

export function readReviews() {
  return initialReviews
}

export async function getPublicReviews() {
  if (!supabase) return initialReviews

  const { data, error } = await supabase
    .from('reviews')
    .select('id, name, text, rating, status, created_at')
    .eq('status', 'approved')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data.map(review => ({ ...review, createdAt: review.created_at }))
}

export async function submitReview(review) {
  if (!supabase) throw new Error('Yorum sistemi henüz yapılandırılmadı.')

  const { error } = await supabase.from('reviews').insert({
    name: review.name,
    text: review.text,
    rating: review.rating,
    status: 'pending',
  })

  if (error) throw error
}

export async function getAllReviews() {
  if (!supabase) throw new Error('Yorum yönetimi henüz yapılandırılmadı.')

  const { data, error } = await supabase
    .from('reviews')
    .select('id, name, text, rating, status, created_at')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data.map(review => ({ ...review, createdAt: review.created_at }))
}

export async function setReviewStatus(id, status) {
  if (!supabase) throw new Error('Yorum yönetimi henüz yapılandırılmadı.')

  const { error } = await supabase.from('reviews').update({ status }).eq('id', id)
  if (error) throw error
}

export async function editReview(id, changes) {
  if (!supabase) throw new Error('Yorum yönetimi henüz yapılandırılmadı.')

  const { error } = await supabase
    .from('reviews')
    .update({
      name: changes.name.trim(),
      text: changes.text.trim(),
      rating: changes.rating,
    })
    .eq('id', id)

  if (error) throw error
}

export async function removeReview(id) {
  if (!supabase) throw new Error('Yorum yönetimi henüz yapılandırılmadı.')

  const { error } = await supabase.from('reviews').delete().eq('id', id)
  if (error) throw error
}