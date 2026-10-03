import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import LightboxImage from '../../components/LightboxImage'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}

export default function MigrenBasAgrisiTedavisi() {
  return (
    <div className="pt-24 pb-24 bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Migren & Baş Ağrısı Tedavisi
          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Migren ve kronik baş ağrıları çoğunlukla boyun kasları, omurga dizilimi ve
            kas-iskelet sistemiyle doğrudan ilişkilidir. Fizyoterapi yaklaşımımız ağrının
            gerçek kaynağını tespit ederek ilaç bağımlılığını azaltmayı hedefler.
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
            ✓ İlaçsız çözüm • ✓ Atak sıklığını azaltır • ✓ Kalıcı rahatlama
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <LightboxImage
            src="/ag.jpg"
            alt="Fizyoterapist eşliğinde omuz ve sırt egzersizi"
            className="aspect-[4/3] max-h-[420px] w-full bg-slate-50 object-contain"
          />
        </motion.div>
      </section>

      {/* PROBLEM ORIGIN */}
      <section id="detay" className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Baş Ağrıları Neden Oluşur?
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              title: "Boyun Kas Gerginliği",
              text: "Kronik boyun kasılmaları baş bölgesine yayılan ağrı tetikler."
            },
            {
              title: "Masa Başı Yaşam",
              text: "Uzun süre ekrana bakma boyun ve üst sırt kaslarını aşırı yükler."
            },
            {
              title: "Stres & Spazm",
              text: "Stres kas spazmlarını artırarak migren ataklarını sıklaştırır."
            },
            {
              title: "Boyun Düzleşmesi",
              text: "Servikal lordozun kaybı sinir ve damar yapılarını etkiler."
            },
            {
              title: "Çene (TME) Problemleri",
              text: "Çene eklemine binen yük boyun ve baş bölgesine yansır."
            },
            {
              title: "Postür Bozukluğu",
              text: "Baş ileri pozisyonu boyun kaslarına aşırı yük bindirerek ağrıya neden olur."
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

      {/* TREATMENT APPROACH */}
      <section className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Tedavi Yaklaşımı
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "1. Boyun Analizi",
              text: "Boyun hareket açıklığı ve kas spazm noktaları kapsamlı şekilde değerlendirilir."
            },
            {
              title: "2. Postür Değerlendirmesi",
              text: "Baş pozisyonu ve omurga dizilimi incelenir."
            },
            {
              title: "3. Manuel Müdahale",
              text: "Boyun ve üst sırt bölgesine yönelik manuel terapi teknikleri uygulanır."
            },
            {
              title: "4. Tetik Nokta Tedavisi",
              text: "Ağrıyı tetikleyen kas noktaları bulunarak direkt müdahale edilir."
            },
            {
              title: "5. Egzersiz Programı",
              text: "Boyun kaslarını güçlendiren ve postürü düzelten ev programı verilir."
            },
            {
              title: "6. Düzenli Takip",
              text: "Atak sıklığı ve şiddeti izlenerek program güncellenir."
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
            "Manuel terapi (boyun bölgesi)",
            "Tetik nokta (trigger point) tedavisi",
            "Derin kas gevşetme teknikleri",
            "Postür düzeltme egzersizleri",
            "Nefes ve gevşeme teknikleri",
            "Servikal mobilizasyon",
            "Myofasyal release",
            "Denge ve güçlendirme egzersizleri"
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
      <section className="max-w-6xl mx-auto px-4 mt-28 grid md:grid-cols-2 gap-4">
        {[
          "/ak.jpg",
          "/1.jpg"
        ].map((img, i) => (
          <LightboxImage
            key={i}
            className="aspect-[4/3] w-full rounded-xl bg-slate-50 object-contain"
            src={img}
            alt="Boyun ve omuz fizyoterapisi"
            loading="lazy"
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
              q: "Migren tamamen geçer mi?",
              a: "Kişiye bağlıdır, ancak çoğu hastada atak sıklığı ve şiddetinde ciddi azalma sağlanır."
            },
            {
              q: "Kaç seans gerekir?",
              a: "Genelde 6–10 seans arasında belirgin sonuç alınır. Program kişiye ve ağrının kaynağına göre planlanır."
            },
            {
              q: "İlaç kullanmaya devam etmeli miyim?",
              a: "Doktor kontrolünde ilaç düzenlemesi yapılabilir; fizyoterapi ilaç ihtiyacını azaltmayı hedefler ancak kesinlikle doktor önerisi dışında ilaç kesilmemelidir."
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
          Ağrısız Günlere Kavuş
        </h2>

        <p className="text-gray-600 mt-3">
          İlaçsız, kalıcı çözüm için hemen randevu oluştur.
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