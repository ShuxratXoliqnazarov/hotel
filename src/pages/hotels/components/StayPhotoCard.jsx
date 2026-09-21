import Reveal from '@/components/ui/Reveal'
import LocationIcon from '@/assets/icons/location.svg?react'

/** Карточка с фото отеля справа от ваучера (скрыта на узких экранах). */
export default function StayPhotoCard({ hotel }) {
  return (
    <Reveal
      variant="right"
      delay={200}
      className="group relative hidden h-[309px] overflow-hidden rounded-2xl border border-[#eaeaea] bg-white transition-shadow duration-700 hover:shadow-hover lg:block lg:flex-1"
    >
      <img
        src={hotel.image}
        alt={hotel.name}
        className="absolute inset-0 size-full object-cover transition-transform duration-[1.5s] ease-smooth group-hover:scale-110"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-black/0 to-black/60" />
      <p className="absolute inset-x-4 bottom-4 flex items-center gap-1 text-xs font-medium text-white">
        <LocationIcon className="size-4 shrink-0" />
        {hotel.address}
      </p>
    </Reveal>
  )
}
