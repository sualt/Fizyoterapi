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

export default function KadinErkekSagligi() {
  return (
    <div className="pt-24 pb-24 bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Kadın & Erkek Sağlığı Fizyoterapisi
          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Pelvik taban kasları, hormonal süreçler ve yaşam kalitesini etkileyen kas
            problemlerine yönelik özel bir tedavi alanı. Kişiye özel ve güvenli bir
            ortamda uzman fizyoterapi desteği.
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
            ✓ Pelvik taban güçlendirme • ✓ Doğum sonrası rehabilitasyon • ✓ Özel & güvenli ortam
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/kadin-hero.jpg"
            className="w-full h-[420px] object-cover"
          />
        </motion.div>
      </section>

      {/* PROBLEM ORIGIN */}
      <section id="detay" className="max-w-6xl mx-auto px-4 mt-28">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
          Hangi Problemleri Kapsar?
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              title: "Pelvik Taban Zayıflığı",
              text: "Pelvik taban kaslarının zayıflığı çeşitli fonksiyonel problemlere zemin hazırlar."
            },
            {
              title: "İdrar Kaçırma",
              text: "Kasların yeterli kontrolü sağlayamaması nedeniyle oluşan stres inkontinansı."
            },
            {
              title: "Doğum Sonrası Kas Problemleri",
              text: "Doğum sürecinde zayıflayan kasların rehabilitasyonu yaşam kalitesini artırır."
            },
            {
              title: "Core Kas Zayıflığı",
              text: "Merkezi kasların yetersizliği hem bel ağrısına hem de pelvik problemlere neden olur."
            },
            {
              title: "Postür Bozukluğu",
              text: "Pelvik pozisyon tüm omurga dizilimini ve vücut mekaniğini etkiler."
            },
            {
              title: "Günlük Yaşam Kısıtlamaları",
              text: "Egzersiz, koşu veya spor gibi aktivitelerdeki kaçırma problemi yaşam kalitesini düşürür."
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
          src="/images/kadin-banner.jpg"
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
              title: "1. Kişisel Değerlendirme",
              text: "Detaylı anamnez, postür ve pelvik taban fonksiyon analizi yapılır."
            },
            {
              title: "2. Kas Kuvvet Analizi",
              text: "Pelvik taban ve core kaslarının gücü ve koordinasyonu değerlendirilir."
            },
            {
              title: "3. Kas Aktivasyonu",
              text: "Doğru kas aktivasyon paternleri öğretilir ve pekiştirilir."
            },
            {
              title: "4. Core Stabilizasyon",
              text: "Derin karın ve pelvik kaslar birlikte çalışacak şekilde güçlendirilir."
            },
            {
              title: "5. Nefes Koordinasyonu",
              text: "Nefes mekanizması ve pelvik taban ilişkisi düzenlenir."
            },
            {
              title: "6. Ev Programı",
              text: "Günlük hayatta sürdürülebilir egzersiz protokolü oluşturulur."
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
            "Pelvik taban egzersizleri",
            "Core stabilizasyon çalışmaları",
            "Nefes koordinasyon teknikleri",
            "Postür düzeltme egzersizleri",
            "Fonksiyonel güçlendirme",
            "Propriosepsiyon eğitimi",
            "Kas aktivasyon protokolleri",
            "Reformer destekli pelvik egzersizler"
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
          "/images/kadin1.jpg",
          "/images/kadin2.jpg",
          "/images/kadin3.jpg"
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
              q: "Ne kadar sürede etkisini gösterir?",
              a: "Genelde 4–8 hafta içinde belirgin gelişme görülür. Düzenli ev egzersizi süreci hızlandırır."
            },
            {
              q: "Doğum sonrası ne zaman başlanabilir?",
              a: "Normal doğumda 6–8 hafta, sezaryende doktor onayıyla başlanabilir. Erken başlamak uzun vadede çok daha iyi sonuç verir."
            },
            {
              q: "Erkekler de yararlanabilir mi?",
              a: "Evet, pelvik taban fizyoterapisi prostat ameliyatı sonrası veya idrar kaçırma yaşayan erkekler için de etkili bir tedavi yöntemidir."
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
          Yaşam Kaliteni Artır
        </h2>

        <p className="text-gray-600 mt-3">
          Pelvik taban ve core güçlendirme için hemen randevu oluştur.
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