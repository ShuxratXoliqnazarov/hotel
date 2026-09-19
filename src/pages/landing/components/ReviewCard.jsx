import Tilt from '@/components/ui/Tilt'
import StarIcon from '@/assets/icons/star.svg?react'
import GoogleIcon from '@/assets/icons/google.svg?react'

export default function ReviewCard({ review }) {
  const { title, text, author, place, rating, image } = review

  return (
    <article className="group relative w-[300px] sm:w-[425px]">
      {/* мятная «тень»-подложка: при наведении отъезжает дальше */}
      <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[20px] bg-primary/40 transition-all duration-700 ease-smooth group-hover:translate-x-9 group-hover:translate-y-9 group-hover:bg-primary/70" />

      <Tilt
        max={5}
        className="flex flex-col gap-10 rounded-[20px] bg-white p-6 shadow-card-lg group-hover:-translate-x-1 group-hover:-translate-y-2"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="line-clamp-2 min-h-[60px] font-heading text-xl leading-[30px] sm:text-2xl">{title}</h3>
            <div className="flex flex-col gap-3">
              <p className="line-clamp-2 text-sm font-medium text-ink/50">{text}</p>
              <button type="button" className="self-end font-heading text-sm transition-colors hover:text-primary-dark">
                View more
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-3" aria-label={`${rating} of 5 stars`}>
              {Array.from({ length: rating }, (_, index) => (
                // звёзды «подпрыгивают» волной
                <StarIcon
                  key={index}
                  style={{ transitionDelay: `${index * 60}ms` }}
                  className="size-6 text-[#ffc107] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                />
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="font-heading text-sm">{author}</p>
                <p className="text-xs font-medium text-ink/50">{place}</p>
              </div>
              <p className="flex items-center gap-2">
                <GoogleIcon className="size-6" />
                <span className="font-heading text-xs text-ink/40">Google</span>
              </p>
            </div>
          </div>
        </div>

        <div className="h-[200px] overflow-hidden rounded-lg">
          <img src={image} alt="" className="size-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-110" />
        </div>
      </Tilt>
    </article>
  )
}
