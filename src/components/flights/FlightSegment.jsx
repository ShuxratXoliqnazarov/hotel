import AirplaneIcon from '@/assets/icons/airplane.svg?react'
import WifiIcon from '@/assets/icons/wifi.svg?react'
import StopwatchIcon from '@/assets/icons/stopwatch.svg?react'
import FastFoodIcon from '@/assets/icons/fast-food.svg?react'
import SeatIcon from '@/assets/icons/seat.svg?react'

const AMENITIES = [
  { label: 'Flight', icon: AirplaneIcon },
  { label: 'Wi-Fi', icon: WifiIcon },
  { label: 'Timing', icon: StopwatchIcon },
  { label: 'Food', icon: FastFoodIcon },
  { label: 'Seat', icon: SeatIcon },
]

/**
 * Блок сегмента рейса: авиакомпания + удобства + время вылета/прилёта.
 * Используется в Flight Detail и Booking detail.
 * spread — время прижато к краям (Booking), иначе — по центру с отступами (Detail).
 */
export default function FlightSegment({ segment, spread = false }) {
  const { airline, aircraft, logo, departure, arrival } = segment

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="group flex items-center gap-6 rounded-lg border border-primary/50 px-8 py-4 transition-all duration-700 hover:border-primary hover:shadow-glow">
          <img src={logo} alt={airline} className="h-11 w-16 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6" />
          <div className="flex flex-col gap-2">
            <p className="text-2xl leading-[29px] font-semibold">{airline}</p>
            <p className="text-sm font-medium text-ink/60">{aircraft}</p>
          </div>
        </div>

        <ul className="flex items-center py-4">
          {AMENITIES.map(({ label, icon: Icon }, index) => (
            <li key={label} className="flex items-center">
              {index > 0 && <span className="mx-6 h-12 w-px bg-divider" />}
              <Icon
                className="size-6 cursor-help transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:text-primary-dark"
                aria-label={label}
              />
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`flex flex-col items-center gap-6 sm:flex-row ${
          spread ? 'sm:justify-between' : 'sm:justify-center sm:gap-20'
        }`}
      >
        <TimePoint {...departure} />
        <FlightPathIcon />
        <TimePoint {...arrival} />
      </div>
    </div>
  )
}

function TimePoint({ time, airport }) {
  return (
    <p className="flex items-center gap-4">
      <span className="text-2xl leading-[29px] font-semibold">{time}</span>
      <span className="font-medium text-ink/60">{airport}</span>
    </p>
  )
}

/** •—— ✈ ——• */
function FlightPathIcon() {
  return (
    <span className="flex items-center gap-6" aria-hidden="true">
      <span className="relative h-px w-9 bg-ink before:absolute before:-top-[2.5px] before:left-0 before:size-1.5 before:rounded-full before:bg-ink" />
      <AirplaneIcon className="size-12 animate-fly" />
      <span className="relative h-px w-9 bg-ink before:absolute before:-top-[2.5px] before:right-0 before:size-1.5 before:rounded-full before:bg-ink" />
    </span>
  )
}
