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

export default function RecoveryMedikalMasaj() {
  return (
    <div className="pt-24 pb-24 bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Recovery & Medikal Masaj
          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Kasların yenilenmesini hızlandıran, dolaşımı artıran ve vücudu fizyolojik
            olarak rahatlatan profesyonel terapi yöntemleriyle hem sporculara hem de
            günlük stresle mücadele edenlere özel toparlanma programları.
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
            ✓ Hızlı toparlanma • ✓ Kas gevşemesi • ✓ Stres azaltma
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/masaj-hero.jpg"
            className="w-full h-[420px] object-cover"
          />
        </motion.div>
      </section>

      {/* PROBLEM ORIGIN */}
      <section id="detay" className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Neden Recovery Gereklidir?
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
              text: "Saatlerce masa başında çalışmak kasları kronik olarak kısaltır ve sertleştirir."
            },
            {
              title: "Yoğun Antrenman",
              text: "Yüksek yoğunluklu antrenman kasları yorar ve mikro hasarlara neden olur."
            },
            {
              title: "Stres Birikimi",
              text: "Psikolojik stres kaslarda tonik gerginliğe ve ağrıya yol açar."
            },
            {
              title: "Dolaşım Sorunları",
              text: "Yetersiz kan akışı kas dokusunda toksin birikimine neden olur."
            },
            {
              title: "Fasya Kısıtlamaları",
              text: "Bağ dokusundaki yapışıklıklar hareket kalitesini ve toparlanmayı engeller."
            },
            {
              title: "Uyku Kalitesi",
              text: "Kas gerginliği uyku kalitesini düşürerek toparlanma sürecini sekteye uğratır."
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
          src="/images/masaj-banner.jpg"
          className="w-full h-[320px] object-cover"
        />
      </section>

      {/* TREATMENT APPROACH */}
      <section className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Seans Süreci
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "1. Kas Gerginlik Analizi",
              text: "Hangi bölgelerin en fazla müdahale gerektirdiği tespit edilir."
            },
            {
              title: "2. Isıtma",
              text: "Dokulara kan akışı artırılarak derin çalışmaya hazırlık yapılır."
            },
            {
              title: "3. Derin Doku Çalışması",
              text: "Kasların derinindeki gerginlik ve yapışıklıklar giderilir."
            },
            {
              title: "4. Lenfatik Drenaj",
              text: "Toksin ve birikmiş sıvıların atılması desteklenir."
            },
            {
              title: "5. Fasya Açma",
              text: "Bağ dokusu kısıtlamaları giderilerek hareket özgürlüğü artırılır."
            },
            {
              title: "6. Seans Sonrası Öneriler",
              text: "Su tüketimi, hareket ve uyku önerileriyle toparlanma pekiştirilir."
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
            "Derin doku masajı",
            "Spor masajı",
            "Lenfatik drenaj",
            "Kas gevşetme teknikleri",
            "Fasya açma teknikleri",
            "Miyofasyal release",
            "Petrissage ve effleurage",
            "Trigger point baskısı"
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
          "/images/masaj1.jpg",
          "/images/masaj2.jpg",
          "/images/masaj3.jpg"
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
              q: "Medikal masaj ağrılı mıdır?",
              a: "Derin doku masajında hafif hassasiyet olabilir ancak genel olarak rahatlatıcıdır. Seanstan sonra hareketlilik belirgin şekilde artar."
            },
            {
              q: "Ne sıklıkla yaptırılmalı?",
              a: "Sporculara haftada 1–2 kez, masa başı çalışanlara ayda 2–4 kez önerilir. Yoğunluğa göre program kişiselleştirilir."
            },
            {
              q: "Normal masajdan farkı nedir?",
              a: "Medikal masaj, fizyoterapist tarafından kas anatomi bilgisiyle planlanır. Tedavi hedefli, sistematik ve kişiye özel bir yaklaşımdır."
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
          Vücudunu Yenile
        </h2>

        <p className="text-gray-600 mt-3">
          Kas yorgunluğunu atmak ve yeniden enerji kazanmak için hemen randevu oluştur.
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