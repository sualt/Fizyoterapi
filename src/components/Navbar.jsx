import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'
import { PHONE } from '../config'

const servicesDropdown = {
  label: 'Hizmetler',
  dropdown: [
    { to: '/fizik-tedavi-klinik-pilates',        label: 'Fizik Tedavi & Klinik Pilates' },
    { to: '/manuel-terapi',                       label: 'Manuel Terapi' },
    { to: '/reformer-klinik-egzersiz',            label: 'Reformer Klinik Egzersiz' },
    { to: '/ortopedik-sporcu-rehabilitasyonu',    label: 'Ortopedik & Sporcu Rehabilitasyonu' },
    { to: '/migren-bas-agrisi-tedavisi',          label: 'Migren Tedavisi' },
    { to: '/bruksizm-tme',                        label: 'Bruksizm & TME' },
    { to: '/recovery-medikal-masaj',              label: 'Recovery & Medikal Masaj' },
    { to: '/kadin-erkek-sagligi',                 label: 'Kadın & Erkek Sağlığı' },
    { to: '/omurga-skolyoz',                      label: 'Omurga Sağlığı & Skolyoz' },
  ],
}

const links = [
  { to: '/',           label: 'Anasayfa' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { type: 'dropdown',  data: servicesDropdown },
  { to: '/iletisim',   label: 'İletişim' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location              = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/src/assets/logo.png" alt="Logo" className="h-11 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Fizyoterapist
            </span>
            <span className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
              Hülya Yücedağ
            </span>
            <span className="text-xs text-primary font-semibold italic">
              Benim Reçetem: Egzersiz
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => {
            if (l.type === 'dropdown') {
              return (
                <div key={i} className="relative group">
                  <button className="font-semibold text-sm text-gray-600 hover:text-primary">
                    {l.data.label}
                  </button>
                  <div className="absolute left-0 top-full mt-2 w-72 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {l.data.dropdown.map(item => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`font-semibold text-sm transition-colors hover:text-primary ${
                  location.pathname === l.to
                    ? 'text-primary border-b-2 border-primary pb-0.5'
                    : 'text-gray-600'
                }`}
              >
                {l.label}
              </Link>
            )
          })}

          {/* Telefon butonu */}
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
          >
            <FaPhone className="text-xs text-primary" /> {PHONE}
          </a>

          <Link
            to="/randevu"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent transition-all"
          >
            <FaPhone className="text-xs" /> Randevu Al
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menü">
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              {links.map((l, i) => {
                if (l.type === 'dropdown') {
                  return (
                    <div key={i}>
                      <div className="py-3 font-semibold text-gray-700">{l.data.label}</div>
                      <div className="pl-3">
                        {l.data.dropdown.map(item => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block py-2 text-sm text-gray-600 hover:text-primary"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="py-3 px-2 font-semibold text-gray-700 border-b border-gray-50 hover:text-primary"
                  >
                    {l.label}
                  </Link>
                )
              })}

              {/* Mobilde telefon */}
              <a
                href={`tel:${PHONE}`}
                className="py-3 px-2 font-semibold text-gray-700 border-b border-gray-50 hover:text-primary flex items-center gap-2"
              >
                <FaPhone className="text-primary text-sm" /> {PHONE}
              </a>

              <Link
                to="/randevu"
                className="mt-2 bg-primary text-white text-center py-3 rounded-full font-bold"
              >
                📅 Randevu Al
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}