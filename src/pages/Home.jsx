import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaStar, FaInstagram, FaArrowRight, FaPhone, FaWhatsapp, FaCalendarCheck } from 'react-icons/fa'
import heroImage from '../assets/hero.jpeg'
import {
  PHONE,
  WHATSAPP,
  INSTAGRAM,
  WORKING_HOURS
} from '../config'

const services = [
  { icon: '🦴', title: 'Fizik Tedavi & Klinik Pilates', desc: 'Kas-iskelet problemlerini kökten çözen kişiye özel rehabilitasyon.' },
  { icon: '🤲', title: 'Manuel Terapi', desc: 'İlaçsız, doğrudan temas ile hızlı ağrı giderimi.' },
  { icon: '🏋️', title: 'Reformer Klinik Egzersiz', desc: 'Kontrollü direnç ile dengeli ve güvenli kas güçlendirme.' },
  { icon: '⚡', title: 'Sporcu Rehabilitasyonu', desc: 'Yaralanma sonrası güvenli ve hızlı spora dönüş.' },
  { icon: '🧠', title: 'Migren & Baş Ağrısı', desc: 'Boyun kökenli baş ağrılarında ilaçsız kalıcı çözüm.' },
  { icon: '😬', title: 'Bruksizm & TME', desc: 'Çene ağrısı ve diş sıkma problemlerinde uzman tedavi.' },
  { icon: '💆', title: 'Recovery & Medikal Masaj', desc: 'Kas toparlanmasını hızlandıran profesyonel masaj teknikleri.' },
  { icon: '🌸', title: 'Kadın & Erkek Sağlığı', desc: 'Pelvik taban ve core kaslarını güçlendiren özel program.' },
]

const stats = [
  { num: '500+', label: 'Mutlu Hasta' },
  { num: '5+', label: 'Yıllık Tecrübe' },
  { num: '9', label: 'Uzmanlık Alanı' },
  { num: '4.9', label: 'Google Puanı ⭐' },
]

const testimonials = [
  { name: 'Ayşe K.', text: 'Bel fıtığım için geldim. 8 seansta inanılmaz iyileştim. Kesinlikle tavsiye ediyorum!', rating: 5 },
  { name: 'Mehmet T.', text: 'Boyun tutulması ve migren şikayetlerimde çok büyük iyileşme oldu.', rating: 5 },
  { name: 'Zeynep A.', text: 'Reformer seansları sayesinde duruşum düzeldi, sırt ağrım geçti.', rating: 5 },
]



/* ── Mini Randevu Formu ─────────────────────────────────────── */
function MiniAppointmentForm() {
  const [form, setForm] = useState({ name: '', phone: '', complaint: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Randevu Talebi:\nAd Soyad: ${form.name}\nTelefon: ${form.phone}\nŞikayet: ${form.complaint}`
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
    setSent(true)
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-xl p-10 text-center max-w-xl mx-auto"
      >
        <div className="text-5xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp'a Yönlendiriliyorsunuz</h3>
        <p className="text-gray-500 text-sm">En kısa sürede dönüş yapılacaktır.</p>
        <button onClick={() => setSent(false)} className="mt-4 text-primary text-sm font-semibold hover:underline">
          Yeni Talep Gönder
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl mx-auto"
    >
      <h3 className="font-display text-2xl font-bold text-gray-800 mb-6 text-center">Hızlı Randevu Formu</h3>
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1.5">Ad Soyad *</label>
          <input
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder="Adınız"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1.5">Telefon *</label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            placeholder="0532 XXX XX XX"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1.5">Şikayet *</label>
          <select
            required
            value={form.complaint}
            onChange={e => setForm({ ...form, complaint: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          >
            <option value="">Seçiniz</option>
            <option>Bel Ağrısı / Fıtık</option>
            <option>Boyun Ağrısı</option>
            <option>Skolyoz</option>
            <option>Migren & Baş Ağrısı</option>
            <option>Sporcu Yaralanması</option>
            <option>Çene / TME Problemi</option>
            <option>Omuz Problemleri</option>
            <option>Klinik Pilates / Reformer</option>
            <option>Diğer</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-primary text-white py-4 rounded-xl font-bold text-base hover:bg-accent transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
      >
        <FaWhatsapp className="text-lg" /> WhatsApp ile Randevu Al
      </button>
      <p className="text-xs text-center text-gray-400 mt-3">
        Detaylı randevu için{' '}
        <Link to="/randevu" className="text-primary font-semibold hover:underline">
          tıklayın →
        </Link>
      </p>
    </motion.form>
  )
}

/* ── Ana Sayfa ──────────────────────────────────────────────── */
export default function Home() {
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
              Uzman Fizyoterapi Kliniği
            </span>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900">
              Ağrısız Bir Yaşam İçin
              <span className="block text-primary mt-2">
                Bütüncül Yaklaşım
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

            {/* Hero CTA butonları */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                to="/randevu"
                className="flex items-center justify-center gap-2 bg-primary text-white px-7 py-4 rounded-2xl font-bold shadow-lg hover:bg-accent hover:scale-105 transition-all"
              >
                <FaCalendarCheck /> Ücretsiz Randevu Al
              </Link>
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
                className="relative w-full h-[700px] object-cover rounded-[40px] shadow-2xl"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-lg">⭐</div>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Neler Yapıyoruz</span>
            <h2 className="font-display text-4xl font-bold text-gray-800 mt-2">Hizmetlerimiz</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Her hasta özel, her program kişiye özgü. Bilimsel yaklaşımla kalıcı sonuçlar.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className="group bg-secondary border border-gray-100 rounded-2xl p-6 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-800 group-hover:text-white mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-white/80 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/hizmetler" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent transition-all shadow-md hover:shadow-lg">
              Tüm Hizmetleri Gör <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* RANDEVU SECTION */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Hemen Başlayın</span>
            <h2 className="font-display text-4xl font-bold text-gray-800 mt-2">Randevu Al</h2>
            <p className="text-gray-500 mt-3">İlk adımı atın — en kısa sürede sizi arayalım.</p>
          </div>

          {/* İletişim kartları */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <a href={`tel:${PHONE}`}
              className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                <FaPhone />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wide">Ara</div>
                <div className="font-bold text-gray-800 text-sm">{PHONE}</div>
              </div>
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-xl group-hover:bg-green-500 group-hover:text-white transition-all flex-shrink-0">
                <FaWhatsapp />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wide">WhatsApp</div>
                <div className="font-bold text-gray-800 text-sm">Mesaj Gönder</div>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl flex-shrink-0">🕐</div>
              <div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wide">Çalışma Saatleri</div>
                <div className="font-bold text-gray-800 text-sm"> {WORKING_HOURS.weekdays}</div>
              </div>
            </div>
          </div>

          {/* Mini form */}
          <MiniAppointmentForm />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: 'https://www.instagram.com/reel/DQTmoMuini_/embed', title: 'Reel 1' },
              { src: 'https://www.instagram.com/reel/DUpwf5YClAg/embed', title: 'Reel 2' },
              { src: 'https://www.instagram.com/reel/DV8I1_dCnvw/embed', title: 'Reel 3' },
              { src: 'https://www.instagram.com/p/DS0ZH_ejIL7/embed', title: 'Post 4' },
            ].map(item => (
              <iframe
                key={item.src}
                src={item.src}
                className="w-full rounded-2xl bg-white shadow-lg"
                height="600"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media"
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
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-6 border border-primary/10"
              >
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(t.rating)].map((_, j) => <FaStar key={j} />)}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-gray-800">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
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