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

export default function ManuelTerapi() {
  return (
    <div className="pt-24 pb-24 bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Manuel Terapi
          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Kas ve eklem problemlerine doğrudan temasla müdahale edilen ileri fizyoterapi
            teknikleriyle ağrının kaynağını tespit eder, sadece semptomu değil altta yatan
            nedeni ortadan kaldırırız.
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
            ✓ İlaçsız tedavi • ✓ Uzman fizyoterapist • ✓ Hızlı sonuç
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/manuel-hero.jpg"
            className="w-full h-[420px] object-cover"
          />
        </motion.div>
      </section>

      {/* PROBLEM ORIGIN */}
      <section id="detay" className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Ağrının Gerçek Kaynağı
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              title: "Hareket Kısıtlı Eklemler",
              text: "Bloke eklemler çevre kaslara aşırı yük bindirerek kronik ağrıya neden olur."
            },
            {
              title: "Kas Spazmları",
              text: "İstemsiz kas kasılmaları hem ağrıyı artırır hem hareketi kısıtlar."
            },
            {
              title: "Fasya Yapışıklıkları",
              text: "Bağ dokusundaki kısıtlamalar ağrı ve hareket kaybına yol açar."
            },
            {
              title: "Boyun Tutulması",
              text: "Ani veya kronik boyun kasılmaları günlük yaşamı ciddi şekilde etkiler."
            },
            {
              title: "Bel Ağrısı",
              text: "Omurga çevresindeki kas ve eklem problemleri bel ağrısının temel kaynağıdır."
            },
            {
              title: "Omuz Problemleri",
              text: "Eklem kısıtlılığı ve kas dengesizliği omuz hareketini engeller."
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
          src="/images/manuel-banner.jpg"
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
              title: "1. Değerlendirme",
              text: "Ağrının kaynağı ve hareket kısıtlılıkları kapsamlı şekilde analiz edilir."
            },
            {
              title: "2. Kaynağa Müdahale",
              text: "Sadece ağrılı bölgeye değil, problemin asıl nedenine yönelik teknikler uygulanır."
            },
            {
              title: "3. Mobilizasyon",
              text: "Eklem hareketliliği ve kas dengesi yeniden sağlanır."
            },
            {
              title: "4. Yumuşak Doku",
              text: "Fasya ve kas dokusundaki kısıtlamalar giderilir."
            },
            {
              title: "5. Egzersiz",
              text: "Seans sonrası iyileşmeyi pekiştirecek kişiye özel egzersizler verilir."
            },
            {
              title: "6. Takip",
              text: "İlerleme düzenli olarak ölçülür ve program güncellenir."
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
            "Eklem mobilizasyonu",
            "Manipülasyon teknikleri",
            "Myofasyal release",
            "Trigger point tedavisi",
            "Yumuşak doku teknikleri",
            "Nöral mobilizasyon",
            "Servikal mobilizasyon",
            "Lomber mobilizasyon"
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
          "/images/manuel1.jpg",
          "/images/manuel2.jpg",
          "/images/manuel3.jpg"
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
              q: "Manuel terapi acı verir mi?",
              a: "Genelde rahatlatıcıdır. Bazı tekniklerde kısa süreli hassasiyet olabilir, ancak bu normaldir."
            },
            {
              q: "Kaç seans gerekir?",
              a: "Problemin türüne ve süresine bağlıdır; çoğu vakada 4–8 seans arasında belirgin sonuç alınır."
            },
            {
              q: "Kimler uygulayabilir?",
              a: "Manuel terapi mutlaka uzman fizyoterapist tarafından uygulanmalıdır; yanlış uygulama zarar verebilir."
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
          Ağrıyı Erteleme
        </h2>

        <p className="text-gray-600 mt-3">
          İlaçsız, hızlı ve kalıcı çözüm için hemen randevu oluştur.
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