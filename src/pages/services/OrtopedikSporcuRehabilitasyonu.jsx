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

export default function OrtopedikSporcuRehabilitasyonu() {
  return (
    <div className="pt-24 pb-24 bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Ortopedik & Sporcu Rehabilitasyonu
          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Kas, bağ, tendon ve eklem yaralanmalarının bilimsel yöntemlerle tedavi edilerek
            kişinin günlük yaşamına ve spor performansına güvenli şekilde geri dönmesini
            sağlayan kapsamlı rehabilitasyon süreci.
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
            ✓ Hızlı & güvenli iyileşme • ✓ Spora güvenli dönüş • ✓ Yeniden sakatlık önlemi
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <LightboxImage
            src="/ad.jpg"
            alt="Sporcu rehabilitasyonu egzersizi"
            className="aspect-[4/3] max-h-[420px] w-full bg-slate-50 object-contain"
          />
        </motion.div>
      </section>

      {/* PROBLEM ORIGIN */}
      <section id="detay" className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Yaralanmalar Neden Oluşur?
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              title: "Aşırı Yüklenme",
              text: "Vücudun kapasitesinin üzerindeki yükler doku hasarına yol açar."
            },
            {
              title: "Yanlış Antrenman",
              text: "Hatalı teknik ve program yaralanma riskini önemli ölçüde artırır."
            },
            {
              title: "Yetersiz Isınma",
              text: "Hazırlıksız kaslar ani yüklere karşı savunmasız kalır."
            },
            {
              title: "Kas Dengesizlikleri",
              text: "Agonist-antagonist dengesizliği eklem stabilitesini bozar."
            },
            {
              title: "Travmalar",
              text: "Düşme, çarpışma ve ani hareket değişiklikleri doğrudan doku hasarı oluşturur."
            },
            {
              title: "Rehabilitasyon Eksikliği",
              text: "Geçmiş yaralanmaların tam iyileşmeden yeniden yüklenmesi komplikasyona neden olur."
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

      {/* REHAB PHASES */}
      <section className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Rehabilitasyonun Aşamaları
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "1. Ağrı & Ödem Kontrolü",
              text: "Soğuk uygulama, manuel terapi ve doku iyileşmesini destekleme teknikleri."
            },
            {
              title: "2. Hareket Açıklığı",
              text: "Eklem mobilizasyonu ve hafif egzersizlerle hareket aralığı yeniden kazanılır."
            },
            {
              title: "3. Kas Güçlendirme",
              text: "Dirençli ve izole kas çalışmalarıyla güç yeniden inşa edilir."
            },
            {
              title: "4. Fonksiyonel Antrenman",
              text: "Günlük yaşam ve spora özgü hareketlere kademeli dönüş sağlanır."
            },
            {
              title: "5. Denge & Refleksler",
              text: "Propriosepsiyon ve denge çalışmalarıyla nöromüsküler kontrol geliştirilir."
            },
            {
              title: "6. Spora Güvenli Dönüş",
              text: "Performans testleri ile sporcunun güvenli sahaya dönüşü onaylanır."
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
            "Propriosepsiyon (denge & algı) çalışmaları",
            "Fonksiyonel egzersizler",
            "Plyometrik antrenmanlar",
            "Stabilizasyon egzersizleri",
            "Manuel terapi destekleri",
            "Spor spesifik hareketler",
            "Kas kuvvet ölçümleri",
            "Performans testleri"
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
          "/1.jpg",
          "/af.jpg"
        ].map((img, i) => (
          <LightboxImage
            key={i}
            className="aspect-[4/3] w-full rounded-xl bg-slate-50 object-contain"
            src={img}
            alt="Sporcu rehabilitasyonu egzersizi"
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
              q: "Spora ne zaman dönebilirim?",
              a: "Yaralanmanın türüne ve şiddetine göre değişir. Kontrollü rehabilitasyon süreci ile güvenli dönüş sağlanır."
            },
            {
              q: "Tekrar sakatlanır mıyım?",
              a: "Doğru rehabilitasyon ile yeniden sakatlık riski ciddi oranda azaltılır. Güçlendirme ve propriosepsiyon çalışmaları bu riski minimize eder."
            },
            {
              q: "Ameliyat sonrası da uygulanır mı?",
              a: "Evet, ameliyat sonrası rehabilitasyon en kritik süreçtir ve programımızın ayrılmaz bir parçasıdır."
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
          Sahaya Güvenle Dön
        </h2>

        <p className="text-gray-600 mt-3">
          Profesyonel rehabilitasyon için hemen randevu oluştur.
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