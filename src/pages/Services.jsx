import { motion } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    icon: '🦴',
    title: 'Fizik Tedavi & Klinik Pilates',
    desc: 'Kas-iskelet sistemi rahatsızlıklarını sadece geçici olarak bastırmak yerine, altta yatan biyomekanik problemleri çözmeyi hedefleyen kapsamlı rehabilitasyon.',
    details: ['Core stabilizasyon', 'Segmental stabilizasyon', 'Nefes koordinasyonu', 'Fonksiyonel egzersizler'],
    who: 'Bel/boyun fıtığı başlangıcı, duruş bozukluğu, ameliyat sonrası',
    duration: '4-6 hafta içinde belirgin fark',
  },
  {
    icon: '🤲',
    title: 'Manuel Terapi',
    desc: 'Kas ve eklem problemlerine doğrudan temasla müdahale edilen ileri fizyoterapi teknikleri.',
    details: ['Eklem mobilizasyonu', 'Manipülasyon', 'Myofasyal release', 'Trigger point'],
    who: 'Boyun tutulması, bel ağrısı, omuz problemleri',
    duration: 'Hızlı sonuç — genelde 2-4 seans',
  },
  {
    icon: '🏋️',
    title: 'Reformer Klinik Egzersiz',
    desc: 'Özel reformer cihazı üzerinde kontrollü direnç ve doğru hareket paternleriyle yapılan ileri rehabilitasyon.',
    details: ['Kapalı kinetik zincir', 'Core stabilizasyon', 'Eksantrik kontrol', 'Denge & koordinasyon'],
    who: 'Bel/boyun ağrısı, kas zayıflığı, sporcular',
    duration: '6-12 seans belirgin gelişme',
  },
  {
    icon: '⚡',
    title: 'Ortopedik & Sporcu Rehabilitasyonu',
    desc: 'Yaralanmalar sonrası bilimsel yöntemlerle güvenli spora dönüş ve yeniden sakatlanma önleme.',
    details: ['ACL, menisküs, rotator cuff', 'Plyometrik antrenman', 'Propriosepsiyon', 'Performans testleri'],
    who: 'Sporcular, ameliyat sonrası, eklem yaralanmaları',
    duration: 'Yaralanmaya göre değişir',
  },
  {
    icon: '🧠',
    title: 'Migren & Baş Ağrısı',
    desc: 'Boyun kasları ve omurga dizilimi kaynaklı baş ağrılarında ilaç bağımlılığını azaltan fizyoterapi.',
    details: ['Manuel terapi', 'Trigger point tedavisi', 'Postür düzeltme', 'Nefes & gevşeme'],
    who: 'Haftada birden fazla baş ağrısı, migren tanısı',
    duration: '6-10 seans belirgin sonuç',
  },
  {
    icon: '😬',
    title: 'Bruksizm & TME Problemleri',
    desc: 'Diş sıkma ve çene eklem problemlerinde kas ve eklem seviyesinde uzman müdahale.',
    details: ['Çene mobilizasyonu', 'Trigger point', 'İç/dış kas gevşetme', 'Boyun destek tedavisi'],
    who: 'Diş sıkma, çene ağrısı, TME rahatsızlığı',
    duration: 'Birkaç seansta belirgin rahatlama',
  },
  {
    icon: '💆',
    title: 'Recovery & Medikal Masaj',
    desc: 'Kasların yenilenmesini hızlandıran, dolaşımı artıran profesyonel terapi.',
    details: ['Derin doku masajı', 'Spor masajı', 'Lenfatik drenaj', 'Fasya açma'],
    who: 'Sporcular, masa başı çalışanlar, kas ağrısı',
    duration: 'Tek seansta rahatlama',
  },
  {
    icon: '🌸',
    title: 'Kadın & Erkek Sağlığı',
    desc: 'Pelvik taban kasları ve hormonal süreçlere yönelik özel fizyoterapi programı.',
    details: ['Pelvik taban egzersizleri', 'Core stabilizasyon', 'Nefes teknikleri', 'Postür düzeltme'],
    who: 'Doğum sonrası kadınlar, idrar kaçırma, core zayıflığı',
    duration: '4-8 hafta belirgin gelişme',
  },
  {
    icon: '🦷',
    title: 'Omurga Sağlığı & Skolyoz',
    desc: 'Skolyoz, kifoz ve duruş bozukluklarını bilimsel egzersizlerle kontrol altına alma.',
    details: ['Schroth yöntemi', 'Üç boyutlu solunum', 'Postür eğitimi', 'Kas dengeleme'],
    who: 'Skolyoz hastaları, duruş bozukluğu, gençler',
    duration: 'Uzun dönem takip programı',
  },
]

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <main className="pt-16">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Uzmanlık Alanlarımız</span>
            <h1 className="font-display text-5xl font-bold text-gray-800 mt-2">Hizmetlerimiz</h1>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              Her hasta özel, her program kişiye özgü. Bilimsel yaklaşımla kalıcı sonuçlar sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                onClick={() => setActive(active === i ? null : i)}
                className="bg-light border border-gray-100 rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>

                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="border-t border-gray-100 pt-4 space-y-3"
                  >
                    <div>
                      <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Teknikler</div>
                      <div className="flex flex-wrap gap-1">
                        {s.details.map(d => (
                          <span key={d} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{d}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Kimler İçin</div>
                      <p className="text-xs text-gray-500">{s.who}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Süre</div>
                      <p className="text-xs text-gray-500">{s.duration}</p>
                    </div>
                  </motion.div>
                )}

                <div className="mt-3 text-primary text-sm font-semibold">
                  {active === i ? '▲ Kapat' : '▼ Detay Gör'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}