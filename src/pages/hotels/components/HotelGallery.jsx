import { useState } from 'react'

/** Галерея отеля: большое фото + сетка 2×2, последняя плитка — «+N photos». Клик по плитке ставит её главной. */
export default function HotelGallery({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const main = images[activeIndex]
  const thumbs = images.map((image, index) => ({ image, index })).filter(({ index }) => index !== activeIndex).slice(0, 4)
  const hidden = Math.max(images.length - 5, 0)

  return (
    <div className="grid animate-scale-in gap-4 [animation-delay:250ms] lg:h-[500px] lg:grid-cols-2">
      <div className="group relative h-[260px] overflow-hidden rounded-xl md:h-[400px] lg:h-full">
        <img
          key={activeIndex}
          src={main}
          alt={name}
          className="absolute inset-0 size-full animate-fade-in object-cover transition-transform duration-[2s] group-hover:scale-105"
        />
      </div>

      <ul className="grid min-h-0 grid-cols-2 gap-4 lg:h-full lg:grid-rows-2">
        {thumbs.map(({ image, index }, position) => (
          <li key={index} className="relative h-[140px] sm:h-[190px] lg:h-auto">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show photo ${index + 1}`}
              className="group absolute inset-0 overflow-hidden rounded-xl"
            >
              <img
                src={image}
                alt=""
                className="absolute inset-0 size-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-110"
              />
              {position === thumbs.length - 1 && hidden > 0 && (
                <span className="absolute inset-0 grid place-items-center bg-black/45 font-semibold text-white transition-colors duration-500 group-hover:bg-black/60">
                  +{hidden} photos
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
