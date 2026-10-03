import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP } from '../config'
import { getBotReply } from '../utils/chatbot'

const quickQuestions = [
  'Fiyatlar nedir?',
  'Randevu nasıl alınır?',
  'Bel ağrısı tedavisi var mı?',
  'İletişim bilgileri',
]

export default function ChatBot() {
  const [open, setOpen]         = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Merhaba! 👋 Size nasıl yardımcı olabilirim? Hizmetlerimiz, randevu veya fiyat hakkında sorularınızı yanıtlayabilirim.',
    },
  ])
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef             = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async (messageText = input) => {
    const trimmed = messageText.trim()
    if (!trimmed || loading) return

    const userMsg = { role: 'user', content: trimmed }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const reply = getBotReply(trimmed)
      await new Promise(resolve => setTimeout(resolve, 250))
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? 'Sohbeti kapat' : 'Asistanı aç'}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center text-2xl"
      >
        {open ? <FaTimes /> : <FaComments />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: '480px' }}
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaRobot className="text-white text-lg" />
              </div>
              <div>
                <div className="text-white font-bold">Klinik Asistanı</div>
                <div className="text-white/70 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                  Otomatik bilgi • Tanı yerine geçmez
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-white/80 hover:text-white transition-colors"
                aria-label="WhatsApp ile iletişime geç"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Kapat"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-primary text-white rounded-br-sm'
                        : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-sm'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100">
                    <span className="flex gap-1">
                      {[0, 150, 300].map(delay => (
                        <span
                          key={delay}
                          className="w-2 h-2 bg-primary/50 rounded-full animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </span>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Hızlı sorular */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickQuestions.map(q => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100 flex gap-2 items-center">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Mesajınız..."
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center hover:bg-green-600 transition-all"
                aria-label="WhatsApp ile yaz"
              >
                <FaWhatsapp className="text-sm" />
              </a>
              <button
                onClick={() => send()}
                disabled={loading || !input.trim()}
                aria-label="Gönder"
                className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-accent transition-all disabled:opacity-40"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
            <p className="px-4 pb-3 text-center text-xs text-gray-400">Kişisel veya hassas sağlık bilgisi paylaşmayın.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}