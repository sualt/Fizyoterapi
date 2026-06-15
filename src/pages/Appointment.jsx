import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaCheckCircle, FaEnvelope } from 'react-icons/fa'
import { PHONE, WHATSAPP, EMAIL } from '../config'

const COMPLAINTS = [
  'Bel Ağrısı / Fıtık',
  'Boyun Ağrısı',
  'Skolyoz',
  'Migren & Baş Ağrısı',
  'Sporcu Yaralanması',
  'Çene / TME Problemi',
  'Omuz Problemleri',
  'Klinik Pilates / Reformer',
  'Diğer',
]

const empty = { name: '', phone: '', complaint: '', date: '', note: '' }

export default function Appointment() {
  const [form, setForm]   = useState(empty)
  const [sent, setSent]   = useState(false)
  const [method, setMethod] = useState('whatsapp') // 'whatsapp' | 'email'

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const buildMessage = () =>
    `Randevu Talebi\nAd Soyad: ${form.name}\nTelefon: ${form.phone}\nŞikayet: ${form.complaint}\nTercih Edilen Tarih: ${form.date || 'Belirtilmedi'}\nNot: ${form.note || '-'}`

  const handleSubmit = e => {
    e.preventDefault()

    if (method === 'whatsapp') {
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildMessage())}`, '_blank')
    } else {
      const subject = encodeURIComponent(`Randevu Talebi – ${form.name}`)
      const body    = encodeURIComponent(buildMessage())
      window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, '_self')
    }

    setSent(true)
  }

  return (
    <main className="pt-16">
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Hemen Başlayın</span>
            <h1 className="font-display text-5xl font-bold text-gray-800 mt-2">Randevu Al</h1>
            <p className="text-gray-500 mt-3 text-lg">Formu doldurun, WhatsApp veya e-posta üzerinden onaylayalım.</p>
          </div>

          {/* Hızlı iletişim kartları */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-3 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-all">
                <FaPhone />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold">Ara</div>
                <div className="font-bold text-gray-800">{PHONE}</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-xl group-hover:bg-green-500 group-hover:text-white transition-all">
                <FaWhatsapp />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold">WhatsApp</div>
                <div className="font-bold text-gray-800">Mesaj Gönder</div>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center text-xl group-hover:bg-blue-500 group-hover:text-white transition-all">
                <FaEnvelope />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold">E-posta</div>
                <div className="font-bold text-gray-800 text-sm truncate">{EMAIL}</div>
              </div>
            </a>
          </div>

          {!sent ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Ad Soyad *</label>
                  <input
                    name="name" required
                    value={form.name} onChange={handleChange}
                    placeholder="Adınız ve soyadınız"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Telefon *</label>
                  <input
                    name="phone" required type="tel"
                    value={form.phone} onChange={handleChange}
                    placeholder="0532 XXX XX XX"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Şikayetiniz *</label>
                <select
                  name="complaint" required
                  value={form.complaint} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                >
                  <option value="">Seçiniz</option>
                  {COMPLAINTS.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tercih Ettiğiniz Tarih</label>
                <input
                  name="date" type="date"
                  value={form.date} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Ek Not</label>
                <textarea
                  name="note" rows={3}
                  value={form.note} onChange={handleChange}
                  placeholder="Eklemek istediğiniz bilgiler..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                />
              </div>

              {/* Gönderme yöntemi seçimi */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Gönderme Yöntemi</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMethod('whatsapp')}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                      method === 'whatsapp'
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 text-gray-500 hover:border-green-300'
                    }`}
                  >
                    <FaWhatsapp className="text-base" /> WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setMethod('email')}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                      method === 'email'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 text-gray-500 hover:border-blue-300'
                    }`}
                  >
                    <FaEnvelope className="text-base" /> E-posta
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className={`w-full text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                  method === 'whatsapp'
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {method === 'whatsapp'
                  ? <><FaWhatsapp className="text-xl" /> WhatsApp ile Randevu Al</>
                  : <><FaEnvelope className="text-xl" /> E-posta ile Randevu Al</>
                }
              </button>

              <p className="text-xs text-center text-gray-400">
                {method === 'whatsapp'
                  ? 'Form gönderildiğinde WhatsApp uygulamasına yönlendirileceksiniz.'
                  : 'Form gönderildiğinde e-posta uygulamanız açılacaktır.'
                }
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl shadow-xl p-12 text-center"
            >
              <FaCheckCircle className="text-6xl text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Talep İletildi!</h3>
              <p className="text-gray-500 mb-6">
                {method === 'whatsapp'
                  ? 'WhatsApp üzerinden en kısa sürede dönüş yapılacaktır.'
                  : 'E-postanız iletildi. En kısa sürede yanıt alacaksınız.'
                }
              </p>
              <button
                onClick={() => { setSent(false); setForm(empty) }}
                className="text-primary font-semibold hover:underline text-sm"
              >
                Yeni Randevu Talebi
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}