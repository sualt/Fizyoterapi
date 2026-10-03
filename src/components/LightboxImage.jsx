import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaSearchPlus, FaTimes } from 'react-icons/fa'

export default function LightboxImage({ src, alt, className = '', ...imageProps }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = event => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={event => {
          event.stopPropagation()
          setOpen(true)
        }}
        aria-label={`${alt || 'Görsel'} görselini büyüt`}
        aria-haspopup="dialog"
        className="group relative block h-full w-full cursor-zoom-in overflow-hidden"
      >
        <img src={src} alt={alt} className={className} {...imageProps} />
        <span className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/65 text-white opacity-70 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true">
          <FaSearchPlus />
        </span>
      </button>

      {open && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt || 'Büyütülmüş görsel'}
            className="relative flex h-full w-full items-center justify-center"
            onClick={event => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Görseli kapat"
              className="fixed right-4 top-4 z-[101] flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-slate-900 shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <FaTimes />
            </button>
            <img
              src={src}
              alt={alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}
