import { useState } from 'react'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import CountUp from '@/components/ui/CountUp'
import CheckIcon from '@/assets/icons/check.svg?react'

/** «Available Rooms»: список номеров, выбранный номер подсвечен мятной рамкой. */
export default function AvailableRooms({ hotel }) {
  const [selectedId, setSelectedId] = useState(hotel.rooms[0].id)

  return (
    <section className="flex flex-col gap-6">
      <Reveal as="h2" className="font-heading text-2xl leading-[30px]">
        Available Rooms
      </Reveal>

      <ul className="flex flex-col gap-4">
        {hotel.rooms.map((room, index) => {
          const selected = room.id === selectedId
          return (
            <Reveal
              as="li"
              key={room.id}
              delay={index * 120}
              className={`group flex flex-col gap-4 rounded-xl border-2 bg-white p-4 shadow-card transition-all duration-700 ease-smooth hover:shadow-hover sm:flex-row sm:items-center sm:gap-6 ${
                selected ? 'border-primary' : 'border-transparent'
              }`}
            >
              <div className="h-[180px] shrink-0 overflow-hidden rounded-xl sm:h-[130px] sm:w-[200px]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="size-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <h3 className="text-xl leading-6 font-semibold">{room.name}</h3>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink/75">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-1">
                      <CheckIcon className="size-4 text-primary-dark" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end">
                <p className="text-2xl leading-[29px] font-bold text-accent">
                  <CountUp value={room.price} prefix="$" />
                  <span className="text-sm">/night</span>
                </p>
                <Button
                  variant={selected ? 'primary' : 'outline'}
                  onClick={() => setSelectedId(room.id)}
                  aria-pressed={selected}
                  className="w-[140px] font-semibold"
                >
                  {selected ? 'Selected' : 'Select room'}
                </Button>
              </div>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
