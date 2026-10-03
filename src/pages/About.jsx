import { motion } from 'framer-motion'
import { FaGraduationCap, FaAward, FaStar, FaTv, FaUniversity, FaDumbbell } from 'react-icons/fa'
import LightboxImage from '../components/LightboxImage'

// ── ÖNEMLI: Vite'ta src/assets içindeki resimler import ile yüklenmeli ──
// Aşağıdaki import'ları kendi dosya adlarınla eşleştir
import imgProfil     from '../assets/about/optimized/profil.jpg'
import imgHakkimda   from '../assets/about/optimized/hakkimda.jpg'
import imgTv1        from '../assets/about/optimized/tv1.jpg'
import imgTv2        from '../assets/about/optimized/tv2.jpg'
import imgTv3        from '../assets/about/optimized/tv3.jpg'
import imgTv4        from '../assets/about/optimized/tv4.jpg'
import imgSertifika1 from '../assets/about/optimized/sertifika1.jpg'
import imgSertifika2 from '../assets/about/optimized/sertifika2.jpg'
import imgYonetim    from '../assets/about/optimized/ftryonetim1.jpg'
import imgFb1        from '../assets/about/optimized/fb.jpg'
import imgFb2        from '../assets/about/optimized/fb2.jpg'
import imgKariyer    from '../assets/about/optimized/kariyer.jpg'

const certifications = [
  'APPI International Clinical Mat Pilates Certification',
  'APPI International Reformer Pilates Certification',
  'High Velocity Low Amplitude (HVLA) Manipulation',
  'Manuel Terapi Uygulamaları',
  'Sporcu Rehabilitasyonu ve Performans Fizyoterapisi',
  'Pelvik Taban Rehabilitasyonu',
  'Kronik Ağrı Yönetimi ve Hareket Bilimi',
]

const expertise = [
  { icon: '🦴', title: 'Ortopedik Rehabilitasyon', desc: 'Kas-iskelet sistemi problemleri, bel/boyun fıtığı, omurga rehabilitasyonu' },
  { icon: '⚡', title: 'Sporcu Rehabilitasyonu', desc: 'Fenerbahçe SK deneyimiyle spor yaralanmaları ve performans fizyoterapisi' },
  { icon: '🤲', title: 'Manuel Terapi', desc: 'Eklem mobilizasyonu, HVLA manipülasyon ve miyofasyal teknikler' },
  { icon: '🏋️', title: 'Klinik Pilates', desc: 'APPI sertifikalı Mat Pilates & Reformer Pilates programları' },
  { icon: '🌸', title: 'Kadın & Erkek Sağlığı', desc: 'Pelvik taban rehabilitasyonu, gebe pilatesi, doğum sonrası program' },
  { icon: '🧠', title: 'Nörolojik Rehabilitasyon', desc: 'İnme, Parkinson, MS, denge ve yürüme bozuklukları' },
]

// Güvenli resim bileşeni — hata olursa gri placeholder gösterir
function Img({ src, alt, className }) {
  return (
    <LightboxImage
      src={src}
      alt={alt}
      className={className}
      onError={e => {
        e.currentTarget.style.display = 'none'
        const p = e.currentTarget.parentElement
        if (p) {
          p.style.background = 'rgba(var(--color-primary-rgb, 99,102,241), 0.08)'
          p.setAttribute('aria-label', alt)
        }
      }}
    />
  )
}

export default function About() {
  return (
    <main className="pt-16 overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-primary/8 via-white to-accent/5 py-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Sol: Metin */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 relative z-10"
            >
              <span className="text-primary font-bold text-sm uppercase tracking-widest">Hakkımızda</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Fizyoterapist
                <span className="block text-primary mt-1">Hülya Yücedağ</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ortopedik rehabilitasyon, sporcu sağlığı, manuel terapi ve klinik pilates alanlarında
                ulusal ve uluslararası eğitimlerle gelişmiş, kişiye özel tedavi yaklaşımı sunan sağlık profesyoneli.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { num: '5+', label: 'Yıllık Deneyim' },
                  { num: '500+', label: 'Mutlu Hasta' },
                  { num: '17+', label: 'Hizmet Alanı' },
                ].map(s => (
                  <div key={s.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                    <div className="font-display text-3xl font-bold text-primary">{s.num}</div>
                    <div className="text-xs text-gray-500 mt-1 font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-primary pl-5 py-1">
                <p className="text-gray-700 italic leading-relaxed">
                  "Her danışan farklıdır. Bu nedenle tedavi süreci de kişiye özel olmalıdır."
                </p>
                <footer className="text-primary font-bold text-sm mt-2">— Hülya Yücedağ</footer>
              </blockquote>
            </motion.div>

            {/* Sağ: Hero kolajı — TAM SIGAN resimler */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative h-[360px] w-full max-w-[420px] mx-auto"
            >
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-52 h-[300px] rounded-[24px] overflow-hidden shadow-2xl">
                <Img src={imgProfil} alt="Hülya Yücedağ" className="w-full h-full object-contain object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-6 right-0 w-28 h-24 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
              >
                <Img src={imgTv1} alt="TV Programı" className="w-full h-full object-contain" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-0 w-32 h-22 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
              >
                <Img src={imgHakkimda} alt="Hakkımda" className="w-full h-full object-contain" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 right-0 w-28 h-22 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
              >
                <Img src={imgKariyer} alt="Kariyer Günleri" className="w-full h-full object-contain" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                className="absolute bottom-40 -right-2 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 border border-gray-100 z-10"
              >
                <FaStar className="text-yellow-400 text-sm" />
                <span className="font-bold text-gray-800 text-xs">4.9 Google Puanı</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EĞİTİM & KARİYER ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Akademik Yolculuk</span>
            <h2 className="font-display text-4xl font-bold text-gray-800 mt-2">Eğitim & Kariyer</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Sol: Timeline */}
            <div className="space-y-5">
              {[
                {
                  icon: <FaGraduationCap />,
                  color: 'bg-blue-50 text-blue-600',
                  title: 'Ankara Darüşşifa Sağlık Meslek Lisesi',
                  sub: 'Hemşirelik Bölümü — Okul İkincisi',
                  desc: "AB Hayat Boyu Öğrenme Programı kapsamında Almanya ve Hollanda'da uluslararası eğitim programlarına katıldı.",
                  imgs: [],
                },
                {
                  icon: <FaUniversity />,
                  color: 'bg-green-50 text-green-600',
                  title: 'Mustafa Kemal Üniversitesi',
                  sub: 'Fizyoterapi ve Rehabilitasyon Lisans',
                  desc: "ABD Texas Dallas College'dan kabul alarak uluslararası eğitimi eş zamanlı sürdürdü.",
                  imgs: [],
                },
                {
                  icon: <FaUniversity />,
                  color: 'bg-teal-50 text-teal-600',
                  title: 'Hacettepe Üniversitesi',
                  sub: 'Ortopedik, Nörolojik & Sporcu Rehabilitasyonu',
                  desc: 'Pelvik taban, manuel terapi ve omurga sağlığı alanlarında kapsamlı klinik deneyim kazandı.',
                  imgs: [],
                },
                {
                  icon: <FaAward />,
                  color: 'bg-purple-50 text-purple-600',
                  title: 'Türkiye Fizyoterapistler Derneği',
                  sub: 'Gençlik Komisyonu Başkanlığı & Yönetim Kurulu',
                  desc: '108 üniversiteyi temsil eden öğrenci organizasyonlarında liderlik yaptı. Kongre ve sempozyumlarda konuşmacı olarak yer aldı.',
                  // 1 yönetim resmi — tam genişlik
                  imgs: [{ src: imgYonetim, alt: 'FTR Yönetim Kurulu', wide: true }],
                },
                
                {
                  icon: <FaDumbbell />,
                  color: 'bg-orange-50 text-orange-600',
                  title: 'Fenerbahçe Spor Kulübü',
                  sub: 'Sporcu Rehabilitasyonu & Performans Fizyoterapisi',
                  desc: 'Profesyonel sporcularla yaralanma yönetimi, fonksiyonel egzersiz planlaması ve saha deneyimi elde etti.',
                  // 2 fb resmi — yan yana grid
                  imgs: [
                    { src: imgFb1, alt: 'Fenerbahçe SK Stajı', wide: false },
                    { src: imgFb2, alt: 'Fenerbahçe SK', wide: false },
                  ],
                },
                {
                  icon: <FaTv />,
                  color: 'bg-pink-50 text-pink-500',
                  title: 'Medya & Farkındalık Çalışmaları',
                  sub: 'Kanal 3 ve Türk Haber TV',
                  desc: 'Canlı yayınlarda fizyoterapi uygulamaları ve egzersiz eğitimleri gerçekleştirdi. Okullarda duruş bozukluğu eğitimleri verdi.',
                  // 4 tv resmi — 2x2 grid
                  imgs: [
                    { src: imgTv1, alt: 'TV Programı 1', wide: false },
                    { src: imgTv2, alt: 'TV Programı 2', wide: false },
                    { src: imgTv3, alt: 'TV Programı 3', wide: false },
                    { src: imgTv4, alt: 'TV Programı 4', wide: false },
                  ],
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className={`w-11 h-11 ${item.color} rounded-xl flex items-center justify-center text-lg flex-shrink-0 mt-0.5`}>
                    {item.icon}
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 flex-1 border border-gray-100">
                    <div className="font-bold text-gray-800">{item.title}</div>
                    <div className="text-primary text-sm font-semibold mb-1">{item.sub}</div>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>

                    {/* Resimler */}
                    {item.imgs.length === 1 && item.imgs[0].wide && (
                      <div className="mt-3 rounded-xl overflow-hidden h-36 w-full">
                        <Img src={item.imgs[0].src} alt={item.imgs[0].alt} className="w-full h-full object-contain" />
                      </div>
                    )}
                    {item.imgs.length === 2 && (
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {item.imgs.map(img => (
                          <div key={img.alt} className="rounded-xl overflow-hidden h-28">
                            <Img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                          </div>
                        ))}
                      </div>
                    )}
                    {item.imgs.length === 4 && (
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {item.imgs.map(img => (
                          <div key={img.alt} className="rounded-xl overflow-hidden h-24">
                            <Img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sağ: sertifika resimleri + liste */}
            <div className="space-y-5 lg:sticky lg:top-24">

              {/* Sertifika 1 — büyük */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-lg h-56 bg-primary/5"
              >
                <Img src={imgSertifika1} alt="Uluslararası Sertifika" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
              </motion.div>

              {/* Sertifika 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-lg h-56 bg-primary/5"
              >
                <Img src={imgSertifika2} alt="APPI Sertifikası" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
              </motion.div>

              {/* Sertifikalar listesi */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
                <div className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaAward className="text-primary" /> Uluslararası Sertifikalar
                </div>
                <div className="space-y-2">
                  {certifications.map(cert => (
                    <div key={cert} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HİZMET ALANLARI ────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Hizmet</span>
            <h2 className="font-display text-4xl font-bold text-gray-800 mt-2">Hizmet Alanları</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Her biri kanıta dayalı yaklaşımlarla desteklenen 17+ hizmet alanında bakım sunuyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">💙</div>
          <h2 className="font-display text-4xl font-bold mb-5">Misyon</h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Yalnızca ağrıyı azaltmayı değil, ağrının kaynağını ortaya çıkarmayı, hareket kalitesini
            geliştirmeyi ve bireyin yaşam kalitesini uzun vadeli olarak yükseltmeyi hedefliyorum.
            Güncel bilimsel yaklaşımları bireyselleştirilmiş rehabilitasyon programlarıyla
            birleştirerek danışanlarımın daha güçlü, daha sağlıklı ve daha aktif bir yaşama
            ulaşmasını amaçlıyorum.
          </p>
          <a
            href="/randevu"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-xl hover:-translate-y-1"
          >
            📅 Randevu Al
          </a>
        </div>
      </section>

    </main>
  )
}