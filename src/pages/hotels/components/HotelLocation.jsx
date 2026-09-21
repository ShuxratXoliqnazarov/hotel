import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import worldMap from '@/assets/images/flights/world-map.svg'
import LocationIcon from '@/assets/icons/location.svg?react'

/** Карта-заглушка с пином отеля и кнопкой «View on maps». */
export default function HotelLocation({ hotel }) {
  return (
    <Reveal as="section" className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-heading text-2xl leading-[30px]">Location</h2>
        <p className="flex items-center gap-1 text-sm font-medium text-ink/75">
          <LocationIcon className="size-[18px] shrink-0 text-ink" />
          {hotel.address}
        </p>
      </div>

      <div className="group relative flex h-[300px] items-center justify-center overflow-hidden rounded-xl bg-primary md:h-[380px]">
        <img
          src={worldMap}
          alt=""
          className="absolute inset-0 size-full scale-[2.2] object-cover object-[60%_35%] transition-transform duration-[2s] ease-smooth group-hover:scale-[2.4]"
        />

        <span className="relative grid size-14 place-items-center">
          <span className="absolute size-5 animate-pulse-dot rounded-full bg-white" />
          <LocationIcon className="relative size-12 animate-bounce-soft text-ink drop-shadow-lg" />
        </span>

        <Button variant="dark" className="absolute right-4 bottom-4 font-semibold">
          View on maps
        </Button>
      </div>
    </Reveal>
  )
}
