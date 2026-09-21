import { useState } from 'react'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import StarIcon from '@/assets/icons/star.svg?react'
import { hotelReviews, ratingBreakdown } from '@/data/hotels'

const PAGE_SIZE = 2

function Stars({ value }) {
  return (
    <span className="flex gap-0.5" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} className={`size-4 ${index < value ? 'text-[#ffb800]' : 'text-ink/15'}`} />
      ))}
    </span>
  )
}

/** «Reviews»: общая оценка, разбивка по критериям (полоски «наполняются») и список отзывов. */
export default function HotelReviews({ hotel }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal as="h2" className="font-heading text-2xl leading-[30px]">
          Reviews
        </Reveal>
        <p className="text-sm font-medium text-ink/75">{hotel.reviews} reviews from verified guests</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <Reveal
          variant="zoom"
          className="flex flex-col items-center justify-center gap-2 rounded-xl bg-primary-light p-6 text-center shadow-card transition-shadow duration-700 hover:shadow-glow"
        >
          <p className="font-heading text-[56px] leading-none">{hotel.rating}</p>
          <p className="font-heading text-xl">{hotel.ratingLabel}</p>
          <Stars value={Math.round(hotel.rating)} />
        </Reveal>

        <Reveal as="ul" delay={150} className="grid gap-x-10 gap-y-4 rounded-xl bg-white p-6 shadow-card sm:grid-cols-2">
          {ratingBreakdown.map(({ label, score }) => (
            <li key={label} className="flex flex-col gap-2">
              <div className="flex justify-between text-sm font-medium">
                <span>{label}</span>
                <span className="font-semibold">{score}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-primary-soft">
                <div
                  style={{ width: `${(score / 5) * 100}%` }}
                  className="h-full origin-left rounded-full bg-primary transition-transform duration-[1.5s] ease-smooth in-data-[visible=false]:scale-x-0"
                />
              </div>
            </li>
          ))}
        </Reveal>
      </div>

      <ul className="flex flex-col gap-6">
        {hotelReviews.slice(0, visibleCount).map((review, index) => (
          <Reveal
            as="li"
            key={review.id}
            delay={index * 100}
            className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-card transition-shadow duration-700 hover:shadow-hover sm:flex-row"
          >
            <img src={review.avatar} alt="" className="size-14 shrink-0 rounded-full object-cover" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <p className="font-heading">{review.author}</p>
                <p className="text-xs font-medium text-ink/60">{review.date}</p>
                <Stars value={review.rating} />
              </div>
              <p className="text-sm leading-5 text-ink/75">{review.text}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      {visibleCount < hotelReviews.length && (
        <Button
          variant="outline"
          onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          className="w-full font-semibold sm:w-[260px] sm:self-center"
        >
          Show more reviews
        </Button>
      )}
    </section>
  )
}
