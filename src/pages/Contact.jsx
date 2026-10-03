import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa'
import { PHONE, WHATSAPP, EMAIL, INSTAGRAM, ADDRESS, MAPS_EMBED, WORKING_HOURS } from '../config'

export default function Contact() {
  return (
    <main className="pt-16">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Bize Ulaşın</span>
            <h1 className="font-display text-5xl font-bold text-gray-800 mt-2">İletişim</h1>
            <p className="text-gray-500 mt-3">Sorularınız için aşağıdaki kanallardan bize ulaşabilirsiniz.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* İletişim Kartları */}
            <div className="space-y-4">
              {[
                {
                  icon: <FaPhone />,
                  label: 'Telefon',
                  value: PHONE,
                  sub: 'Hemen ara',
                  href: `tel:${PHONE}`,
                  color: 'bg-primary/10 text-primary',
                  hoverColor: 'hover:border-primary/40',
                },
                {
                  icon: <FaWhatsapp />,
                  label: 'WhatsApp',
                  value: 'Mesaj Gönder',
                  sub: PHONE,
                  href: `https://wa.me/${WHATSAPP}`,
                  color: 'bg-green-50 text-green-600',
                  hoverColor: 'hover:border-green-300',
                  external: true,
                },
                {
                  icon: <FaEnvelope />,
                  label: 'E-posta',
                  value: EMAIL,
                  sub: 'Mail gönder',
                  href: `mailto:${EMAIL}`,
                  color: 'bg-blue-50 text-blue-500',
                  hoverColor: 'hover:border-blue-300',
                },
                {
                  icon: <FaInstagram />,
                  label: 'Instagram',
                  value: `@${INSTAGRAM}`,
                  sub: 'Takip et',
                  href: `https://instagram.com/${INSTAGRAM}`,
                  color: 'bg-pink-50 text-pink-500',
                  hoverColor: 'hover:border-pink-300',
                  external: true,
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: 'Adres',
                  value: ADDRESS,
                  sub: 'Yol tarifi al',
                  href: '#map',
                  color: 'bg-red-50 text-red-500',
                  hoverColor: 'hover:border-red-300',
                },
                {
                  icon: <FaClock />,
                  label: 'Çalışma Saatleri',
                  value: WORKING_HOURS.weekdays,
                  sub: WORKING_HOURS.sunday,
                  href: null,
                  color: 'bg-amber-50 text-amber-500',
                  hoverColor: '',
                },
              ].map(item => {
                const inner = (
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wide">{item.label}</div>
                      <div className="font-bold text-gray-800 text-sm">{item.value}</div>
                      {item.sub && (
                        <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
                      )}
                    </div>
                  </div>
                )

                const baseClass = `block p-5 bg-secondary rounded-2xl border border-gray-100 transition-all duration-200 ${item.hoverColor}`

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : '_self'}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className={`${baseClass} hover:shadow-md hover:-translate-y-0.5`}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className={baseClass}>{inner}</div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Google Maps */}
            <div>
              <div id="map" className="rounded-3xl overflow-hidden shadow-xl h-[500px] mb-6">
                <iframe
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Klinik konumu"
                />
              </div>

              {/* Hızlı iletişim kutusu */}
              <div className="bg-primary rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-lg">Hemen Bize Ulaşın</div>
                  <div className="text-white/80 text-sm mt-1">WhatsApp veya telefon ile anında yanıt alın.</div>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <a
                    href={`tel:${PHONE}`}
                    className="w-12 h-12 bg-white/20 hover:bg-white hover:text-primary rounded-xl flex items-center justify-center text-xl transition-all"
                    aria-label="Ara"
                  >
                    <FaPhone />
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 hover:bg-green-500 rounded-xl flex items-center justify-center text-xl transition-all"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="w-12 h-12 bg-white/20 hover:bg-blue-500 rounded-xl flex items-center justify-center text-xl transition-all"
                    aria-label="E-posta"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}