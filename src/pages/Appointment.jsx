import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { PHONE, WHATSAPP } from '../config'
import QuickAppointmentForm from '../components/QuickAppointmentForm'

export default function Appointment() {
  return (
    <main className="pt-16">
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Hemen Başlayın</span>
            <h1 className="font-display text-5xl font-bold text-gray-800 mt-2">Randevu Al</h1>
            <p className="text-gray-500 mt-3 text-lg">Formu doldurun, WhatsApp üzerinden talebinizi iletin.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <a href={`tel:${PHONE}`} className="flex items-center gap-3 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-all">
                <FaPhone />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold">Ara</div>
                <div className="font-bold text-gray-800">{PHONE}</div>
              </div>
            </a>

            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-xl group-hover:bg-green-500 group-hover:text-white transition-all">
                <FaWhatsapp />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold">WhatsApp</div>
                <div className="font-bold text-gray-800">Mesaj Gönder</div>
              </div>
            </a>

            <div className="flex items-center gap-3 bg-white rounded-2xl p-5 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl">
                <FaPhone />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold">Hızlı Yanıt</div>
                <div className="font-bold text-gray-800">Aynı Gün</div>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
            <QuickAppointmentForm />
          </motion.div>
        </div>
      </section>
    </main>
  )
}