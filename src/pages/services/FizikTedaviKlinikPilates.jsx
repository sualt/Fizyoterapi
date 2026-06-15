import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}

export default function FizikTedaviKlinikPilates() {
  return (
    <div className="pt-24 pb-24 bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fizik Tedavi & Klinik Pilates
          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Kas-iskelet sistemi problemlerini sadece geçici olarak baskılamak değil,
            altında yatan biyomekanik ve nöromüsküler dengesizlikleri ortadan kaldırmak için
            geliştirilen bilimsel rehabilitasyon yaklaşımıdır.
          </p>

          <div className="mt-6 flex gap-3">
            <Link to="/randevu" className="bg-primary text-white px-7 py-3 rounded-full font-semibold hover:scale-105 transition">
              Randevu Al
            </Link>
            <a href="#detay" className="border px-7 py-3 rounded-full font-semibold hover:bg-gray-50 transition">
              Detayları İncele
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            ✓ Kişiye özel planlama • ✓ Fizyoterapist kontrolü • ✓ Klinik yaklaşım
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/fizik-hero.jpg"
            className="w-full h-[420px] object-cover"
          />
        </motion.div>
      </section>

      {/* PROBLEM ORIGIN */}
      <section id="detay" className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Problemler Nasıl Oluşur?
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-6 mt-12"
        >

          {[
            {
              title: "Uzun Süreli Oturma",
              text: "Masa başı yaşam tarzı omurga yükünü artırır ve kas dengesini bozar."
            },
            {
              title: "Zayıf Core Stabilitesi",
              text: "Merkez kasların zayıflığı tüm vücut mekaniğini etkiler."
            },
            {
              title: "Yanlış Hareket Kalıpları",
              text: "Günlük hareket hataları zamanla kronik ağrıya dönüşür."
            },
            {
              title: "Travmalar",
              text: "Geçmiş yaralanmalar kompansasyon mekanizmaları oluşturur."
            },
            {
              title: "Ameliyat Sonrası Süreç",
              text: "Rehabilitasyon eksikliği fonksiyon kaybına yol açar."
            },
            {
              title: "Kas Dengesizlikleri",
              text: "Güçlü ve zayıf kaslar arasındaki fark eklemleri zorlar."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-gray-50 border hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}

        </motion.div>
      </section>

      {/* IMAGE BANNER */}
      <section className="mt-28">
        <img
          src="/images/fizik-banner.jpg"
          className="w-full h-[320px] object-cover"
        />
      </section>

      {/* TREATMENT APPROACH */}
      <section className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Tedavi Yaklaşımı
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {[
            {
              title: "1. Analiz",
              text: "Postür, kas dengesi ve hareket analizleri yapılır."
            },
            {
              title: "2. Ağrı Kontrolü",
              text: "Manuel terapi ve yumuşak doku teknikleri uygulanır."
            },
            {
              title: "3. Aktivasyon",
              text: "Zayıf kaslar yeniden aktive edilir."
            },
            {
              title: "4. Stabilizasyon",
              text: "Core ve omurga kontrolü geliştirilir."
            },
            {
              title: "5. Fonksiyon",
              text: "Günlük yaşam hareketlerine dönüş sağlanır."
            },
            {
              title: "6. Performans",
              text: "Vücut dayanıklılığı artırılır."
            }
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white border rounded-2xl shadow-sm"
            >
              <h3 className="font-bold text-primary">{step.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{step.text}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* TECHNIQUES */}
      <section className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Kullanılan Teknikler
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 mt-10">

          {[
            "Core stabilizasyon egzersizleri",
            "Segmental kontrol teknikleri",
            "Reformer pilates uygulamaları",
            "Nefes koordinasyon eğitimi",
            "Fonksiyonel hareket eğitimi",
            "Postüral re-edukasyon",
            "Kas aktivasyon çalışmaları",
            "Denge ve propriosepsiyon eğitimi"
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 5 }}
              className="p-4 rounded-xl bg-gray-50 border"
            >
              {t}
            </motion.div>
          ))}

        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="max-w-6xl mx-auto px-4 mt-28 grid md:grid-cols-3 gap-4">

        {[
          "/images/pilates1.jpg",
          "/images/pilates2.jpg",
          "/images/pilates3.jpg"
        ].map((img, i) => (
          <motion.img
            key={i}
            whileHover={{ scale: 1.05 }}
            className="h-72 w-full object-cover rounded-2xl shadow"
            src={img}
          />
        ))}

      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Sık Sorulan Sorular
        </motion.h2>

        <div className="mt-10 space-y-4">

          {[
            {
              q: "Ne kadar sürede sonuç alınır?",
              a: "Genelde 4-6 hafta içinde belirgin iyileşme görülür."
            },
            {
              q: "Ağrılı bir süreç midir?",
              a: "Hayır, kontrollü ve güvenli bir rehabilitasyon sürecidir."
            },
            {
              q: "Kime uygundur?",
              a: "Bel-boyun ağrısı, postür bozukluğu ve ameliyat sonrası hastalar."
            }
          ].map((f, i) => (
            <div key={i} className="p-6 border rounded-2xl hover:shadow-md transition">
              <h4 className="font-bold">{f.q}</h4>
              <p className="text-gray-600 mt-2 text-sm">{f.a}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 py-20 bg-gradient-to-r from-gray-50 to-white text-center">

        <h2 className="text-3xl font-bold">
          Sağlığını Erteleme
        </h2>

        <p className="text-gray-600 mt-3">
          Kişiye özel analiz için hemen randevu oluştur.
        </p>

        <Link
          to="/randevu"
          className="mt-6 inline-block bg-primary text-white px-10 py-3 rounded-full font-bold hover:scale-105 transition"
        >
          Randevu Al
        </Link>

      </section>

    </div>
  )
}