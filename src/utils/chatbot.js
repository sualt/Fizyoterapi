import { PHONE, WHATSAPP, ADDRESS, WORKING_HOURS } from '../config.js'

const normalizeText = value =>
  value
    .toLocaleLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const answerRules = [
  {
    keys: ['fiyat', 'fiyati', 'fiyatlar', 'ucret', 'ucreti', 'ucretler', 'bedel', 'fiyatlar ne kadar', 'seans ucreti', 'masraf'],
    priority: 3,
    reply: `Tedavi ücretleri değerlendirme ve planlanan seanslara göre değişebilir. Güncel bilgi için WhatsApp üzerinden ${WHATSAPP} numarasına yazabilir veya ${PHONE} numarasını arayabilirsiniz.`,
  },
  {
    keys: ['randevu', 'randevu al', 'randevu nasil alinir', 'muayene', 'gorusme'],
    reply: `Randevu talebinizi WhatsApp üzerinden ${WHATSAPP} numarasına yazarak veya ${PHONE} numarasını arayarak iletebilirsiniz. Çalışma saatleri: ${WORKING_HOURS.weekdays}; ${WORKING_HOURS.sunday}.`,
  },
  {
    keys: ['adres', 'konum', 'harita', 'lokasyon', 'nerede', 'nereye'],
    reply: `Kliniğin adresi: ${ADDRESS}`,
  },
  {
    keys: ['telefon', 'whatsapp', 'iletisim', 'numara', 'telefon numarasi'],
    reply: `Telefon: ${PHONE}. WhatsApp: ${WHATSAPP}. Adres: ${ADDRESS}`,
  },
  {
    keys: ['calisma saati', 'calisma saatleri', 'kaca kadar acik', 'hangi gunler acik', 'pazar acik mi', 'cumartesi acik mi'],
    reply: `Çalışma saatleri: ${WORKING_HOURS.weekdays}; ${WORKING_HOURS.sunday}.`,
  },
  {
    keys: ['bel agrisi', 'bel fitigi', 'boyun agrisi', 'boyun fitigi', 'sirt agrisi', 'omurga', 'eklem agrisi', 'fizik tedavi'],
    reply: 'Bel, boyun ve eklem şikâyetlerinde önce hareket ve ihtiyaçlar değerlendirilir. Uygun fizyoterapi yaklaşımı bu değerlendirmeden sonra belirlenir; chatbot tanı koyamaz.',
  },
  {
    keys: ['migren', 'bas agrisi', 'basim agriyor'],
    reply: 'Baş ağrısının farklı nedenleri olabilir. Fizyoterapi değerlendirmesi özellikle boyun ve hareketle ilişkili etkenleri ele alabilir; yeni, şiddetli veya alışılmadık belirtilerde sağlık kuruluşuna başvurun.',
  },
  {
    keys: ['sporcu rehabilitasyonu', 'spor yaralanmasi', 'spor sakatligi', 'spora donus', 'sporcu'],
    reply: 'Spor yaralanmalarında değerlendirme; hareket, kuvvet ve spora özgü ihtiyaçları kapsar. Egzersiz ve spora dönüş planı kişiye ve yaralanmaya göre düzenlenir.',
  },
  {
    keys: ['klinik pilates', 'reformer', 'pilates', 'mat pilates'],
    reply: 'Klinik pilates ve reformer egzersizleri kişinin hareket kapasitesi ve hedeflerine göre planlanır. Uygunluk için ön değerlendirme yapılması gerekir.',
  },
  {
    keys: ['manuel terapi', 'manual terapi', 'eklem mobilizasyonu'],
    reply: 'Manuel terapi, değerlendirme sonrasında uygun görülürse egzersiz ve diğer fizyoterapi yaklaşımlarıyla birlikte planlanabilir.',
  },
  {
    keys: ['masaj', 'medikal masaj', 'recovery'],
    reply: 'Recovery ve medikal masaj uygulamalarının uygunluğu kişinin sağlık durumu ve ihtiyacına göre değerlendirilir. Randevu öncesinde önemli sağlık durumlarınızı klinikle paylaşın.',
  },
  {
    keys: ['kadin sagligi', 'erkek sagligi', 'pelvik taban', 'idrar kacirma', 'dogum sonrasi', 'gebelik'],
    reply: 'Pelvik taban fizyoterapisi, kişinin şikâyetleri ve hedefleri değerlendirilerek planlanır. Detaylı görüşme için klinikle iletişime geçebilirsiniz.',
  },
  {
    keys: ['skolyoz', 'omurga egriligi', 'postur', 'duruş bozuklugu', 'kifoz'],
    reply: 'Skolyoz ve duruş değerlendirmesinde kişinin yaşı, şikâyetleri ve mevcut klinik bulguları dikkate alınır. Egzersiz planı bireysel değerlendirme sonrasında oluşturulur.',
  },
  {
    keys: ['bruksizm', 'tme', 'tmj', 'dis sikma', 'cene agrisi', 'cigeme'],
    reply: 'Çene eklemi ve diş sıkma şikâyetlerinde fizyoterapi değerlendirmesi çene hareketlerini ve ilişkili kasları ele alır. Diş hekimi değerlendirmesi de gerekebilir.',
  },
  {
    keys: ['hizmetler', 'hizmetleriniz', 'hangi tedaviler', 'ne yapiyorsunuz'],
    reply: 'Hizmetler arasında fizik tedavi, manuel terapi, klinik pilates ve reformer, sporcu rehabilitasyonu, migren ve baş ağrısı değerlendirmesi, TME, medikal masaj, pelvik taban ve skolyoz çalışmaları bulunur. Ayrıntılar için Hizmetler sayfasına bakabilirsiniz.',
  },
]

const greetings = new Set(['merhaba', 'selam', 'merhabalar', 'iyi gunler', 'iyi aksamlar'])

export function getBotReply(message) {
  const text = normalizeText(message)

  if (!text) {
    return 'Lütfen sorunuzu yazın; randevu, ücret, çalışma saatleri veya hizmetler hakkında yardımcı olayım.'
  }

  if (greetings.has(text)) {
    return 'Merhaba! Randevu, ücret, çalışma saatleri, adres veya fizyoterapi hizmetleri hakkında sorunuzu yazabilirsiniz.'
  }

  const paddedText = ` ${text} `
  let bestRule = null
  let bestScore = 0

  for (const rule of answerRules) {
    const score = rule.keys.reduce((highest, key) => {
      const phrase = ` ${normalizeText(key)} `
      return paddedText.includes(phrase) ? Math.max(highest, phrase.trim().split(' ').length) : highest
    }, 0)

    const weightedScore = score ? score + (rule.priority || 0) : 0

    if (weightedScore > bestScore) {
      bestRule = rule
      bestScore = weightedScore
    }
  }

  if (bestRule) {
    return bestRule.reply
  }

  return `Sorunuzu doğru yanıtlayabilmem için biraz daha ayrıntı verebilir misiniz? Randevu ve kliniğe özel bilgiler için ${PHONE} numarasını arayabilir veya WhatsApp üzerinden ${WHATSAPP} numarasına yazabilirsiniz.`
}
