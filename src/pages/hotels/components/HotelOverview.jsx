import Reveal from '@/components/ui/Reveal'
import Rating from '@/components/ui/Rating'
import WifiIcon from '@/assets/icons/wifi.svg?react'
import FastFoodIcon from '@/assets/icons/fast-food.svg?react'
import StopwatchIcon from '@/assets/icons/stopwatch.svg?react'
import BedIcon from '@/assets/icons/bed.svg?react'
import SeatIcon from '@/assets/icons/seat.svg?react'
import { hotelOverview } from '@/data/hotels'

const AMENITIES = [
  { label: 'Free Wi-Fi', icon: WifiIcon },
  { label: 'Breakfast', icon: FastFoodIcon },
  { label: '24hr front desk', icon: StopwatchIcon },
  { label: 'Comfy beds', icon: BedIcon },
  { label: 'Lounge', icon: SeatIcon },
]

/** «Overview»: описание отеля, рейтинг и иконки удобств. */
export default function HotelOverview({ hotel }) {
  return (
    <Reveal as="section" className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-heading text-2xl leading-[30px]">Overview</h2>
        <Rating score={hotel.rating} label={hotel.ratingLabel} reviews={hotel.reviews} />
      </div>

      <p className="max-w-[1000px] leading-6 text-ink/75">{hotelOverview}</p>

      <ul className="flex flex-wrap gap-4">
        {AMENITIES.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="group flex items-center gap-3 rounded-xl border border-primary/50 px-5 py-3 text-sm font-medium transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-glow"
          >
            <Icon className="size-6 text-primary-dark transition-transform duration-700 group-hover:scale-110" />
            {label}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
