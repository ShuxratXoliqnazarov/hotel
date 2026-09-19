import Rating from '@/components/ui/Rating'
import LocationIcon from '@/assets/icons/location.svg?react'

/** Название рейса, адрес и (опционально) рейтинг — шапка Detail и Ticket. */
export default function FlightTitle({ name, address, rating, reviews }) {
  return (
    <div className="flex animate-fade-up flex-col gap-4">
      <h1 className="font-heading text-2xl leading-[30px]">{name}</h1>
      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-1 text-sm font-medium text-ink/75">
          <LocationIcon className="size-[18px] shrink-0 text-ink" />
          {address}
        </p>
        {rating && <Rating score={rating} reviews={reviews} />}
      </div>
    </div>
  )
}
