import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'

const seoContent = {
  '/': {
    title: 'Fizyoterapist Hülya Yücedağ | Ankara Fizik Tedavi ve Rehabilitasyon',
    description: 'Ankara fizyoterapist Hülya Yücedağ ile omurga, boyun, bel ağrısı, sporcu rehabilitasyonu, pilates ve özel tedavi programları hakkında bilgi alın.',
    keywords: 'Ankara fizyoterapist, Ankara fizik tedavi, omurga ağrısı tedavisi, bel ağrısı, boyun ağrısı, klinik pilates Ankara, sporcu rehabilitasyonu'
  },
  '/hakkimizda': {
    title: 'Hakkımızda | Hülya Yücedağ Fizyoterapi',
    description: 'Hülya Yücedağ hakkında alanları, eğitim ve rehabilitasyon yaklaşımı hakkında detaylı bilgi edinin.',
    keywords: 'Hülya Yücedağ, fizyoterapist ankara, rehabilitasyon, fizyoterapi kliniği Ankara'
  },
  '/hizmetler': {
    title: 'Hizmetler | Ankara Fizyoterapi ve Rehabilitasyon',
    description: 'Klinik pilates, manuel terapi, omurga sağlığı, migren tedavisi, kadın ve erkek sağlığı ve sporcu rehabilitasyonu hizmetleri.',
    keywords: 'fizyoterapi hizmetleri Ankara, pilates Ankara, manuel terapi, migren tedavisi, omurga sağlığı Ankara'
  },
  '/randevu': {
    title: 'Randevu Al | Ankara Fizyoterapi',
    description: 'Ankara fizyoterapi randevusu almak için iletişim bilgilerini ve WhatsApp ile hızlı başvuru formunu kullanın.',
    keywords: 'randevu al, fizyoterapi randevu, ankara randevu, rehab randevu'
  },
  '/iletisim': {
    title: 'İletişim | Ankara Fizyoterapist Hülya Yücedağ',
    description: 'İletişim bilgileri, adres ve WhatsApp ile Ankara fizyoterapi kliniğine ulaşın.',
    keywords: 'Ankara fizyoterapi iletişim, fizyoterapist telefon, WhatsApp ankara'
  }
}

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import ReviewManagement from './pages/ReviewManagement'

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

function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = seoContent[pathname] || seoContent['/']

    document.title = meta.title

    const descriptionTag = document.querySelector('meta[name="description"]') || document.createElement('meta')
    descriptionTag.name = 'description'
    descriptionTag.content = meta.description
    if (!descriptionTag.parentNode) document.head.appendChild(descriptionTag)

    const keywordsTag = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    keywordsTag.name = 'keywords'
    keywordsTag.content = meta.keywords
    if (!keywordsTag.parentNode) document.head.appendChild(keywordsTag)

    const canonicalTag = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonicalTag.rel = 'canonical'
    canonicalTag.href = `${window.location.origin}${pathname || '/'}`
    if (!canonicalTag.parentNode) document.head.appendChild(canonicalTag)

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.content = meta.title
    if (!ogTitle.parentNode) document.head.appendChild(ogTitle)

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    ogDescription.content = meta.description
    if (!ogDescription.parentNode) document.head.appendChild(ogDescription)

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta')
    ogUrl.setAttribute('property', 'og:url')
    ogUrl.content = `${window.location.origin}${pathname || '/'}`
    if (!ogUrl.parentNode) document.head.appendChild(ogUrl)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <SeoManager />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/randevu" element={<Appointment />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/yorum-yonetimi" element={<ReviewManagement />} />

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