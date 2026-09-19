import Reveal from '@/components/ui/Reveal'
import AirplaneIcon from '@/assets/icons/airplane.svg?react'
import CalendarIcon from '@/assets/icons/calendar.svg?react'
import TimerIcon from '@/assets/icons/timer.svg?react'
import DoorIcon from '@/assets/icons/door.svg?react'
import SeatIcon from '@/assets/icons/seat.svg?react'
import avatar from '@/assets/images/common/avatar.jpg'

const DETAIL_ICONS = { date: CalendarIcon, time: TimerIcon, gate: DoorIcon, seat: SeatIcon }

/** Посадочный талон: время слева, пассажир и детали рейса справа. */
export default function BoardingPass({ ticket, segment }) {
  return (
    <Reveal
      as="article"
      variant="left"
      className="group/pass flex w-full flex-col overflow-hidden rounded-2xl border border-[#eaeaea] bg-white transition-shadow duration-700 hover:shadow-hover sm:flex-row lg:w-[856px] lg:shrink-0"
    >
      <div className="flex flex-row items-center justify-between gap-4 bg-primary-soft p-6 sm:w-[246px] sm:flex-col sm:items-start sm:justify-center">
        <TimePoint {...segment.departure} />
        <RouteIcon />
        <TimePoint {...segment.arrival} />
      </div>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between gap-3 bg-primary p-6">
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt=""
              className="size-12 rounded-full border border-white object-cover object-[28%_0%] transition-transform duration-700 group-hover/pass:scale-110 group-hover/pass:rotate-6"
            />
            <div>
              <p className="font-heading text-xl leading-[25px]">{ticket.passenger}</p>
              <p className="text-sm">{ticket.boardingPass}</p>
            </div>
          </div>
          <p className="text-right font-heading text-sm">{ticket.travelClass}</p>
        </header>

        <ul className="grid grid-cols-2 gap-6 p-6 sm:flex sm:gap-8">
          {ticket.details.map(({ id, label, value }) => {
            const Icon = DETAIL_ICONS[id]
            return (
              <li key={id} className="group flex items-center gap-2">
                <span className="grid size-8 shrink-0 place-items-center rounded bg-primary-soft transition-all duration-500 group-hover:scale-110 group-hover:bg-primary">
                  <Icon className="size-4 text-primary transition-colors duration-500 group-hover:text-white" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-ink/60">{label}</span>
                  <span className="text-xs font-medium">{value}</span>
                </span>
              </li>
            )
          })}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-4 pb-4 pl-[30px]">
          <div className="pb-4">
            <p className="text-[32px] leading-[39px] font-semibold">{ticket.flightCode}</p>
            <p className="text-xs font-medium text-ink/60">{ticket.bookingCode}</p>
          </div>
          <span className="shine mr-4 block rounded-sm">
            <Barcode className="h-[49px] w-[216px]" />
          </span>
        </div>
      </div>
    </Reveal>
  )
}

function TimePoint({ time, airport }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-2xl font-semibold sm:text-[32px] sm:leading-[39px]">{time}</p>
      <p className="text-xs font-medium text-ink/60">{airport}</p>
    </div>
  )
}

/** Вертикальная «вилка» с самолётом между временем вылета и прилёта. */
function RouteIcon() {
  return (
    <span className="relative hidden h-[92px] w-9 sm:block" aria-hidden="true">
      <svg viewBox="0 0 36 92" className="absolute inset-0 size-full" fill="none" stroke="#112211" strokeOpacity="0.25">
        <path d="M1 1 18 12l17-11M18 12v12M18 68v12M1 91l17-11 17 11" />
      </svg>
      <AirplaneIcon className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rotate-90 text-ink/25 transition-all duration-1000 group-hover/pass:translate-y-[-6px] group-hover/pass:text-primary" />
    </span>
  )
}

// Ширины полос штрихкода (повторяющийся «рисунок»)
const BAR_PATTERN = [3, 1, 2, 1, 1, 3, 2, 1, 1, 2, 3, 1, 2, 2, 1, 1, 3, 1, 1, 2]

function Barcode({ className }) {
  const bars = []
  let x = 0
  for (let i = 0; x < 216; i++) {
    const width = BAR_PATTERN[i % BAR_PATTERN.length]
    if (i % 2 === 0) bars.push(<rect key={i} x={x} width={width} height="49" />)
    x += width + (i % 3 === 0 ? 2 : 1)
  }

  return (
    <svg viewBox="0 0 216 49" className={className} fill="#112211" aria-label="Barcode" role="img">
      {bars}
    </svg>
  )
}
