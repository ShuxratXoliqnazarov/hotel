import { useState } from 'react'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import Rating from '@/components/ui/Rating'
import Checkbox from '@/components/ui/Checkbox'
import CountUp from '@/components/ui/CountUp'
import HeartOutlineIcon from '@/assets/icons/heart-outline.svg?react'
import HeartIcon from '@/assets/icons/heart.svg?react'

/** Карточка рейса в списке результатов. */
export default function FlightCard({ flight, index = 0 }) {
  const [favourite, setFavourite] = useState(false)

  return (
    <article
      style={{ animationDelay: `${index * 150}ms` }}
      className="group flex animate-fade-up flex-col gap-4 rounded-xl bg-white px-4 py-6 shadow-card transition-all duration-700 ease-smooth hover:-translate-y-1 hover:shadow-hover sm:flex-row sm:gap-0"
    >
      <div className="flex h-[111px] w-40 shrink-0 items-start justify-center self-center sm:self-start">
        <img src={flight.logo} alt={flight.airline} className={`max-h-full w-full object-contain transition-transform duration-1000 group-hover:scale-110 ${flight.logoClassName ?? ''}`} />
      </div>

      <div className="flex flex-1 flex-col gap-4 sm:px-6">
        <div className="flex items-center justify-between gap-6">
          <Rating score={flight.rating} reviews={flight.reviews} />
          <div className="text-right">
            <p className="text-xs font-medium text-ink/75">starting from</p>
            <p className="origin-right text-2xl leading-[29px] font-bold text-accent transition-transform duration-700 group-hover:scale-110">
              <CountUp value={flight.price} prefix="$" duration={1200} />
              {flight.perNight && <span className="text-sm">/night</span>}
            </p>
          </div>
        </div>

        <ul className="flex flex-col gap-4">
          {flight.legs.map((leg, index) => (
            <li key={index} className="flex flex-wrap items-start gap-x-10 gap-y-2">
              <div className="flex gap-3">
                <Checkbox className="self-start opacity-30" aria-label="Select leg" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">
                    {leg.departure} <span className="mx-1">-</span> {leg.arrival}
                  </p>
                  <p className="text-sm text-ink/40">{leg.airline}</p>
                </div>
              </div>
              <p className="w-16 text-sm font-semibold whitespace-nowrap text-ink/80">{leg.stops}</p>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-ink/80">{leg.duration}</p>
                <p className="text-sm text-ink/40">{leg.route}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="relative flex gap-4 pt-4 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-ink/25 after:absolute after:top-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-1000 after:ease-smooth group-hover:after:scale-x-100">
          <IconButton
            icon={favourite ? HeartIcon : HeartOutlineIcon}
            label="Add to favourites"
            active={favourite}
            onClick={() => setFavourite((prev) => !prev)}
          />
          <Button to={`/flights/${flight.id}`} className="flex-1 font-semibold">
            View Deals
          </Button>
        </div>
      </div>
    </article>
  )
}
