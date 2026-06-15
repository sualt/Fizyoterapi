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

export default function BruksizmTME() {
  return (
    <div className="pt-24 pb-24 bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bruksizm & Çene (TME) Problemleri
          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Diş sıkma ve temporomandibular eklem problemleri; çene, boyun ve baş bölgesinde
            ağrıya neden olan kompleks bir durumdur. Fizyoterapi bu problemi kas ve eklem
            seviyesinde köklü biçimde ele alır.
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
            ✓ Çene ağrısında azalma • ✓ Ağız açma kapasitesi artar • ✓ Uzman yaklaşım
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/bruksizm-hero.jpg"
            className="w-full h-[420px] object-cover"
          />
        </motion.div>
      </section>

      {/* PROBLEM ORIGIN */}
      <section id="detay" className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Problemin Kaynağı
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              title: "Stres & Anksiyete",
              text: "Psikolojik stres çene kaslarının istem dışı kasılmasına yol açar."
            },
            {
              title: "Gece Diş Sıkma",
              text: "Uyku sırasında farkında olmadan oluşan diş sıkma alışkanlığı."
            },
            {
              title: "Eklem Hizalanma Bozukluğu",
              text: "Çene ekleminin yanlış pozisyonu tüm çiğneme kaslarını etkiler."
            },
            {
              title: "Boyun Kas Gerginliği",
              text: "Boyun ve üst sırt kaslarındaki gerginlik çene bölgesine yansır."
            },
            {
              title: "Sabah Çene Ağrısı",
              text: "Gece boyunca devam eden kas kasılmaları sabah ağrısıyla kendini gösterir."
            },
            {
              title: "Çene Kilitlenmesi",
              text: "Eklem ve kas problemleri ağzın tam açılamamasına neden olabilir."
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
          src="/images/bruksizm-banner.jpg"
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
              title: "1. Çene Analizi",
              text: "Hareket açıklığı, ses ve ağrı noktaları detaylı incelenir."
            },
            {
              title: "2. Kas Hassasiyet Testi",
              text: "Çiğneme kaslarının spazm ve tetik noktaları tespit edilir."
            },
            {
              title: "3. Boyun-Çene İlişkisi",
              text: "Boyun kaslarının çene problemine katkısı analiz edilir."
            },
            {
              title: "4. Manuel Müdahale",
              text: "Çene kaslarına iç ve dış gevşetme teknikleri uygulanır."
            },
            {
              title: "5. Çene Egzersizleri",
              text: "Çene hareket açıklığını artıran kişiye özel egzersizler verilir."
            },
            {
              title: "6. Ev Programı",
              text: "Günlük hayatta uygulanacak gevşeme ve egzersiz protokolü oluşturulur."
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
            "Çene kaslarına manuel terapi",
            "İç ve dış kas gevşetme teknikleri",
            "Tetik nokta tedavisi",
            "Çene mobilizasyonu",
            "Boyun bölgesi destek tedavileri",
            "Myofasyal release",
            "Postür düzeltme egzersizleri",
            "Gevşeme ve stres yönetimi teknikleri"
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
          "/images/bruksizm1.jpg",
          "/images/bruksizm2.jpg",
          "/images/bruksizm3.jpg"
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
              q: "Gece diş sıkmayı tamamen geçirir mi?",
              a: "Alışkanlığı azaltır ve şiddetini önemli ölçüde düşürür. Tamamen geçmesi kişiye ve stres yönetimine bağlıdır."
            },
            {
              q: "Kaç seans gerekir?",
              a: "Genellikle 6–8 seans yeterlidir. Kronik vakalarda takip seansları önerilir."
            },
            {
              q: "Diş hekimine de gitmeli miyim?",
              a: "Evet, fizyoterapi ve diş hekimliği birbirini tamamlar. Gece plağı ve fizyoterapi birlikte uygulandığında sonuçlar çok daha etkilidir."
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
          Çene Ağrısına Son Ver
        </h2>

        <p className="text-gray-600 mt-3">
          Uzman fizyoterapi ile kalıcı rahatlama için hemen randevu oluştur.
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