import { useState } from 'react'
import { FaCheckCircle, FaWhatsapp, FaShieldAlt } from 'react-icons/fa'
import { WHATSAPP } from '../config'

const defaultForm = {
  name: '',
  phone: '',
  service: '',
  note: '',
}

export default function QuickAppointmentForm({ compact = false }) {
  const [form, setForm] = useState(defaultForm)
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const message = [
      'Randevu Talebi',
      `Ad Soyad: ${form.name}`,
      `Telefon: ${form.phone}`,
      `Hizmet: ${form.service || 'Belirtilmedi'}`,
      `Not: ${form.note || '-'}`,
    ].join('\n')

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center shadow-sm">
        <FaCheckCircle className="mx-auto text-3xl text-emerald-600 mb-3" />
        <h3 className="text-lg font-bold text-slate-800">Randevu talebiniz iletildi</h3>
        <p className="text-sm text-slate-600 mt-1">WhatsApp üzerinden en kısa sürede dönüş yapılacaktır.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`rounded-3xl bg-white p-5 shadow-xl border border-slate-200 ${compact ? 'max-w-xl' : ''}`}>
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Randevu</span>
        <h3 className="mt-1 text-2xl font-bold text-slate-900">Hemen Başlayın</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-700">
          Ad Soyad
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Adınız ve soyadınız"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
          />
        </label>

        <label className="block text-sm font-semibold text-slate-700">
          Telefon
          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="0532 XXX XX XX"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
          />
        </label>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-semibold text-slate-700">
          Hizmet
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Seçiniz</option>
            <option value="Fizik Tedavi & Klinik Pilates">Fizik Tedavi & Klinik Pilates</option>
            <option value="Manuel Terapi">Manuel Terapi</option>
            <option value="Reformer Klinik Egzersiz">Reformer Klinik Egzersiz</option>
            <option value="Sporcu Rehabilitasyonu">Sporcu Rehabilitasyonu</option>
            <option value="Migren & Baş Ağrısı">Migren & Baş Ağrısı</option>
            <option value="Bruksizm & TME">Bruksizm & TME</option>
            <option value="Recovery & Medikal Masaj">Recovery & Medikal Masaj</option>
            <option value="Kadın & Erkek Sağlığı">Kadın & Erkek Sağlığı</option>
            <option value="Omurga Sağlığı & Skolyoz">Omurga Sağlığı & Skolyoz</option>
          </select>
        </label>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-semibold text-slate-700">
          Not
          <textarea
            name="note"
            rows={3}
            value={form.note}
            onChange={handleChange}
            placeholder="Şikayetiniz veya istekleriniz"
            className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white transition hover:bg-accent shadow-lg hover:shadow-xl"
      >
        <FaWhatsapp /> WhatsApp ile Randevu Al
      </button>
      <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-slate-500">
        <FaShieldAlt className="mt-0.5 shrink-0 text-primary" />
        Bilgileriniz bu sitede saklanmaz; gönderim WhatsApp'ta açılır. Lütfen hassas sağlık bilgisi yazmayın.
      </p>
    </form>
  )
}
