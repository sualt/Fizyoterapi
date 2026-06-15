import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Fotoğraflarını src/assets/gallery/ klasörüne koy
const photos = [
  { src: '/src/assets/gallery/foto1.jpg', alt: 'Klinik' },
  { src: '/src/assets/gallery/foto2.jpg', alt: 'Seans' },
  { src: '/src/assets/gallery/foto3.jpg', alt: 'Reformer' },
  { src: '/src/assets/gallery/foto4.jpg', alt: 'Manuel Terapi' },
  { src: '/src/assets/gallery/foto5.jpg', alt: 'Egzersiz' },
  { src: '/src/assets/gallery/foto6.jpg', alt: 'Klinik 2' },
  // ← daha fazla ekle
]

// YouTube video ID'lerini ekle (URL'deki ?v=BURASI kısmı)
// Örnek: https://www.youtube.com/watch?v=dQw4w9WgXcQ → id: 'dQw4w9WgXcQ'
const videos = [
  { id: 'YOUTUBE_ID_1', title: 'Klinik Tanıtım' },
  { id: 'YOUTUBE_ID_2', title: 'Reformer Pilates' },
  { id: 'YOUTUBE_ID_3', title: 'Manuel Terapi' },
  // ← YouTube video ID'lerini buraya ekle
]

export default function Gallery() {
  const [tab, setTab] = useState('photos')
  const [lightbox, setLightbox] = useState(null)

  return (
    <main className="pt-16">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Bizden Kareler</span>
            <h1 className="font-display text-5xl font-bold text-gray-800 mt-2">Galeri</h1>
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setTab('photos')}
              className={`px-8 py-3 rounded-full font-bold transition-all ${tab === 'photos' ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-secondary'}`}
            >
              📷 Fotoğraflar
            </button>
            <button
              onClick={() => setTab('videos')}
              className={`px-8 py-3 rounded-full font-bold transition-all ${tab === 'videos' ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-secondary'}`}
            >
              🎬 Videolar
            </button>
          </div>

          {/* Photos Grid */}
          {tab === 'photos' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {photos.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setLightbox(i)}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-md"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all flex items-center justify-center">
                    <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Videos Grid */}
          {tab === 'videos' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {videos.map((v) => (
                <div key={v.id} className="rounded-2xl overflow-hidden shadow-lg bg-white">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={v.title}
                    />
                  </div>
                  <div className="bg-secondary px-4 py-3 font-semibold text-gray-700">{v.title}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="max-w-4xl max-h-screen rounded-2xl shadow-2xl object-contain"
              onClick={e => e.stopPropagation()}
            />
            {/* Önceki / Sonraki butonları */}
            {lightbox > 0 && (
              <button
                onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1) }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-light hover:text-gray-300 bg-black/30 w-12 h-12 rounded-full flex items-center justify-center"
              >‹</button>
            )}
            {lightbox < photos.length - 1 && (
              <button
                onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1) }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-light hover:text-gray-300 bg-black/30 w-12 h-12 rounded-full flex items-center justify-center"
              >›</button>
            )}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300"
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}