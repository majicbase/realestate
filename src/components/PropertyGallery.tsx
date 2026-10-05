import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'

export default function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0)

  const next = () => setActive(p => (p + 1) % images.length)
  const prev = () => setActive(p => (p - 1 + images.length) % images.length)

  return (
    <div className="space-y-3">
      <div className="relative rounded-2xl overflow-hidden h-80 sm:h-96 lg:h-[480px] group">
        <img src={images[active]} alt={title} className="w-full h-full object-cover transition-opacity duration-300" />
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-navy hover:bg-white transition-all opacity-0 group-hover:opacity-100" aria-label="Previous image">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-navy hover:bg-white transition-all opacity-0 group-hover:opacity-100" aria-label="Next image">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`h-1.5 rounded-full transition-all ${i === active ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`} aria-label={`Image ${i + 1}`} />
              ))}
            </div>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)} className={`rounded-xl overflow-hidden h-20 transition-all ${i === active ? 'ring-2 ring-champagne' : 'opacity-60 hover:opacity-100'}`}>
              <img src={img} alt={`${title} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
