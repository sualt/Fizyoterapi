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

export default function ReformerKlinikEgzersiz() {
  return (
    <div className="pt-24 pb-24 bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Reformer Destekli Klinik Egzersiz
          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Özel reformer cihazı üzerinde kontrollü direnç ve doğru hareket paternleriyle
            uygulanan ileri düzey rehabilitasyon yöntemi. Hem tedavi hem de performans
            geliştirme amacıyla kullanılır.
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
            ✓ Cihaz destekli rehabilitasyon • ✓ Kişiye özel direnç • ✓ Güvenli & kontrollü
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <LightboxImage
            src="/fiziktedaviklinikpilates.jpg"
            alt="Klinik egzersiz uygulaması"
            className="aspect-[4/3] max-h-[420px] w-full bg-slate-50 object-contain"
          />
        </motion.div>
      </section>

      {/* PROBLEM ORIGIN */}
      <section id="detay" className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Problemler Neden Oluşur?
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              title: "Kas Dengesizlikleri",
              text: "Güçlü ve zayıf kaslar arasındaki dengesizlik eklemleri aşırı yükler."
            },
            {
              title: "Yanlış Hareket Kalıpları",
              text: "Yanlış öğrenilmiş hareketler zamanla kronik ağrıya dönüşür."
            },
            {
              title: "Zayıf Stabilizasyon",
              text: "Derin kasların yetersizliği tüm vücut mekaniğini bozar."
            },
            {
              title: "Hareketsiz Yaşam",
              text: "Uzun süreli hareketsizlik kas atrofisine ve eklem sertliğine neden olur."
            },
            {
              title: "Bel ve Diz Problemleri",
              text: "Yanlış kas kullanımının sonucu olarak gelişen kronik bölgesel ağrılar."
            },
            {
              title: "Omuz Sıkışmaları",
              text: "Rotator cuff dengesizliği omuzda mekanik sıkışma sendromuna yol açar."
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

      {/* REFORMER ADVANTAGES */}
      <section className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Reformer'ın Avantajları
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "1. Kontrollü Hareket",
              text: "Yaylı mekanizma sayesinde sakatlanma riski minimum düzeyde tutulur."
            },
            {
              title: "2. Kişiye Özel Direnç",
              text: "Her hastanın güç seviyesine göre direnç ayarlanır."
            },
            {
              title: "3. İzole Kas Çalışması",
              text: "Kaslar dengeli ve izole biçimde çalıştırılır."
            },
            {
              title: "4. Eklem Koruması",
              text: "Eklemlere minimum yük binerek güvenli güçlendirme sağlanır."
            },
            {
              title: "5. Hızlı Rehabilitasyon",
              text: "Geleneksel yöntemlere kıyasla rehabilitasyon süreci hızlanır."
            },
            {
              title: "6. İlerleme Takibi",
              text: "Her seans kayıt altına alınarak gelişim objektif olarak ölçülür."
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
            "Kapalı kinetik zincir egzersizler",
            "Core stabilizasyon çalışmaları",
            "Eksantrik kas kontrol egzersizleri",
            "Denge ve koordinasyon çalışmaları",
            "Nefes kontrollü hareket teknikleri",
            "Postüral re-edukasyon",
            "Fonksiyonel hareket eğitimi",
            "Propriosepsiyon eğitimi"
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
            alt="Klinik egzersiz uygulaması"
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
              q: "Reformer pilates ile klasik pilates farkı nedir?",
              a: "Reformer, cihaz destekli olduğu için daha kontrollü ve kişiye özel uygulanabilir. Direnç ayarlanabilir olduğundan rehabilitasyon için çok daha uygundur."
            },
            {
              q: "Kaç seans gerekir?",
              a: "Genelde 6–12 seans arasında belirgin gelişme görülür. Program kişiye ve hedefe göre planlanır."
            },
            {
              q: "Zayıflama sağlar mı?",
              a: "Dolaylı olarak vücut sıkılaşması ve form kazanımı sağlar. Temel amacı güçlendirme ve rehabilitasyondur."
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
          Kaslarını Güvenle Güçlendir
        </h2>

        <p className="text-gray-600 mt-3">
          Kişiye özel reformer programı için hemen randevu oluştur.
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