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

export default function OmurgaSkolyoz() {
  return (
    <div className="pt-24 pb-24 bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Omurga Sağlığı & Skolyoz
          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Skolyoz, kifoz ve duruş bozukluklarını düzeltmeye yönelik bilimsel egzersiz
            yaklaşımları. Erken müdahale ile eğriliğin ilerlemesi durdurulabilir,
            postür düzeltilebilir ve ağrı azaltılabilir.
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
            ✓ Eğriliği durdurma • ✓ Schroth yöntemi • ✓ Erken müdahale önemli
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/skolyoz-hero.jpg"
            className="w-full h-[420px] object-cover"
          />
        </motion.div>
      </section>

      {/* PROBLEM ORIGIN */}
      <section id="detay" className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Skolyoz Neden Oluşur?
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              title: "Genetik Faktörler",
              text: "Ailede skolyoz öyküsü risk faktörlerinden birini oluşturur."
            },
            {
              title: "Duruş Bozuklukları",
              text: "Uzun süre yanlış durmak ve oturmak fonksiyonel skolyoza zemin hazırlar."
            },
            {
              title: "Kas Dengesizliği",
              text: "Omurganın sağ ve sol tarafındaki kas güç farklılığı eğriliği artırır."
            },
            {
              title: "Büyüme Dönemi",
              text: "Ergenlik döneminde hızlı büyüme omurga eğriliğinin ilerlemesini hızlandırabilir."
            },
            {
              title: "Kifoz (Kamburlaşma)",
              text: "Torasik bölgedeki aşırı eğrilik postürü ve solunum mekaniklerini etkiler."
            },
            {
              title: "Gecikmiş Müdahale",
              text: "Erken tespit edilmeyen vakalar zamanla daha ağır klinik tabloya dönüşebilir."
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
          src="/images/skolyoz-banner.jpg"
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
              title: "1. Omurga Analizi",
              text: "Eğrilik derecesi, yönü ve tipi kapsamlı olarak değerlendirilir."
            },
            {
              title: "2. Postür Fotoğraflama",
              text: "Görsel analiz ile tedavi öncesi ve sonrası objektif karşılaştırma yapılır."
            },
            {
              title: "3. Kas Dengesi Ölçümü",
              text: "Omurganın her iki tarafındaki kas güç asimetrileri tespit edilir."
            },
            {
              title: "4. Schroth Egzersizleri",
              text: "Üç boyutlu solunum ve düzeltici hareket teknikleri uygulanır."
            },
            {
              title: "5. Kas Dengeleme",
              text: "Zayıf kaslar güçlendirilir, kısa kaslar esnetilir."
            },
            {
              title: "6. Düzenli İlerleme Takibi",
              text: "Eğrilik derecesi periyodik ölçümlerle izlenir ve program güncellenir."
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
          Kullanılan Yöntemler
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {[
            "Schroth egzersiz yöntemi",
            "Üç boyutlu solunum teknikleri",
            "Postür eğitimi ve farkındalık",
            "Kas dengeleme egzersizleri",
            "Core stabilizasyon çalışmaları",
            "Mobilizasyon teknikleri",
            "Propriosepsiyon eğitimi",
            "Ev egzersiz programı"
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
          "/images/skolyoz1.jpg",
          "/images/skolyoz2.jpg",
          "/images/skolyoz3.jpg"
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
              q: "Skolyoz tamamen düzelir mi?",
              a: "Tamamen düzelmeyebilir, ancak bilimsel egzersizlerle eğrilik ciddi şekilde kontrol altına alınabilir ve ilerleme durdurulabilir."
            },
            {
              q: "Erken müdahale neden önemli?",
              a: "Büyüme döneminde yapılan müdahale eğriliğin daha da artmasını önler. Ergenlik döneminde erken başlanması uzun vadede en iyi sonucu verir."
            },
            {
              q: "Ameliyat gerekliliğini azaltır mı?",
              a: "Evet, uygun vakalarda fizik tedavi ameliyat eşiğini öteleyebilir veya gereksiz kılabilir. Ortopedist ile koordineli çalışılır."
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
          Omurgana Sahip Çık
        </h2>

        <p className="text-gray-600 mt-3">
          Bilimsel egzersizlerle duruşunu düzelt, ağrını azalt.
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