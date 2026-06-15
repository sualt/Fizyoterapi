import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'

// Hizmet Sayfaları
import FizikTedaviKlinikPilates from './pages/services/FizikTedaviKlinikPilates'
import ManuelTerapi from './pages/services/ManuelTerapi'
import ReformerKlinikEgzersiz from './pages/services/ReformerKlinikEgzersiz'
import OrtopedikSporcuRehabilitasyonu from './pages/services/OrtopedikSporcuRehabilitasyonu'
import MigrenBasAgrisiTedavisi from './pages/services/MigrenBasAgrisiTedavisi'
import BruksizmTME from './pages/services/BruksizmTME'
import RecoveryMedikalMasaj from './pages/services/RecoveryMedikalMasaj'
import KadinErkekSagligi from './pages/services/KadinErkekSagligi'
import OmurgaSkolyoz from './pages/services/OmurgaSkolyoz'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/randevu" element={<Appointment />} />
        <Route path="/iletisim" element={<Contact />} />

        {/* Hizmet Sayfaları */}
        <Route
          path="/fizik-tedavi-klinik-pilates"
          element={<FizikTedaviKlinikPilates />}
        />

        <Route
          path="/manuel-terapi"
          element={<ManuelTerapi />}
        />

        <Route
          path="/reformer-klinik-egzersiz"
          element={<ReformerKlinikEgzersiz />}
        />

        <Route
          path="/ortopedik-sporcu-rehabilitasyonu"
          element={<OrtopedikSporcuRehabilitasyonu />}
        />

        <Route
          path="/migren-bas-agrisi-tedavisi"
          element={<MigrenBasAgrisiTedavisi />}
        />

        <Route
          path="/bruksizm-tme"
          element={<BruksizmTME />}
        />

        <Route
          path="/recovery-medikal-masaj"
          element={<RecoveryMedikalMasaj />}
        />

        <Route
          path="/kadin-erkek-sagligi"
          element={<KadinErkekSagligi />}
        />

        <Route
          path="/omurga-skolyoz"
          element={<OmurgaSkolyoz />}
        />
      </Routes>

      <Footer />
      <ChatBot />
    </div>
  )
}