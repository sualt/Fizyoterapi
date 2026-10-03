import { Link } from 'react-router-dom'
import { FaPhone, FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaHeart, FaEnvelope, FaShieldAlt } from 'react-icons/fa'
import { PHONE, WHATSAPP, EMAIL, INSTAGRAM, ADDRESS, WORKING_HOURS, MAPS_EMBED } from '../config'

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">

        {/* Kolon 1: Logo + Sosyal */}
        <div>
          <img src="/src/assets/logo1.png" alt="Logo" className="h-12 mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed text-gray-400 mb-5">
            BENİM REÇETEM; EGZERSİZ
          </p>
          <div className="flex gap-3">
            <a
              href={`https://instagram.com/${INSTAGRAM}`}
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-xl flex items-center justify-center transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-xl flex items-center justify-center transition-all"
            >
              <FaWhatsapp />
            </a>
            <a
              href={`tel:${PHONE}`}
              aria-label="Telefon"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all"
            >
              <FaPhone />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="E-posta"
              className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-xl flex items-center justify-center transition-all"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Kolon 2: Hızlı Bağlantılar */}
        <div>
          <h4 className="font-bold text-white mb-4">Hızlı Bağlantılar</h4>
          <div className="space-y-2">
            {[
              { to: '/', label: 'Anasayfa' },
              { to: '/hakkimizda', label: 'Hakkımızda' },
              { to: '/hizmetler', label: 'Hizmetler' },
              { to: '/randevu', label: 'Randevu Al' },
              { to: '/iletisim', label: 'İletişim' },
            ].map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="block text-gray-400 hover:text-white transition-colors text-sm py-0.5"
              >
                → {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Kolon 3: İletişim */}
        <div>
          <h4 className="font-bold text-white mb-4">İletişim</h4>
          <div className="space-y-3 text-sm">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <FaPhone className="text-primary flex-shrink-0" /> {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <FaWhatsapp className="text-green-400 flex-shrink-0" /> WhatsApp ile Yaz
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <FaEnvelope className="text-blue-400 flex-shrink-0" /> {EMAIL}
            </a>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-400 mt-0.5 flex-shrink-0" />
              <span>{ADDRESS}</span>
            </div>
          </div>

          <div className="mt-5 bg-white/5 rounded-xl p-4 text-sm">
            <div className="font-bold text-white mb-2">Çalışma Saatleri</div>
            <div className="flex justify-between">
              <span>Pzt – Cmt</span>
              <span className="text-primary font-semibold">{WORKING_HOURS.weekdays.replace('Pzt – Cmt', '').trim()}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Pazar</span>
              <span className="text-red-400 font-semibold">Kapalı</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Konum</h4>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noopener noreferrer" className="mb-3 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white">
            <FaMapMarkerAlt className="text-primary" /> Yol tarifi al
          </a>
          <div className="aspect-[4/3] max-h-64 overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <iframe
              src={MAPS_EMBED}
              title="Ankara kliniği harita konumu"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
          <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-gray-400">
            <FaShieldAlt className="mt-0.5 shrink-0 text-primary" />
            Randevu formu bilgileri bu sitede saklanmaz; talep WhatsApp üzerinden gönderilir. Hassas sağlık bilgisi paylaşmayın.
          </p>
        </div>

      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500">
        <p className="flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Fizyoterapi Kliniği. Tüm hakları saklıdır.
          <FaHeart className="text-primary text-xs" />
        </p>
      </div>
    </footer>
  )
}