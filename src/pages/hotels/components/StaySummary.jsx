import CountUp from '@/components/ui/CountUp'
import CalendarIcon from '@/assets/icons/calendar.svg?react'
import BedIcon from '@/assets/icons/bed.svg?react'
import SeatIcon from '@/assets/icons/seat.svg?react'

/** Верхняя карточка бронирования: отель, цена и детали проживания (даты, номер, гости). */
export default function StaySummary({ hotel }) {
  const { stay } = hotel
  const details = [
    { label: 'Check-in', value: stay.checkIn, icon: CalendarIcon },
    { label: 'Check-out', value: stay.checkOut, icon: CalendarIcon },
    { label: 'Room', value: stay.room, icon: BedIcon },
    { label: 'Guests', value: stay.guests, icon: SeatIcon },
  ]

  return (
    <section className="flex animate-fade-up flex-col gap-6 rounded-xl bg-white px-6 py-8 shadow-card transition-shadow duration-700 hover:shadow-hover">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-heading text-2xl leading-[30px]">{hotel.name}</h1>
        <p className="shrink-0 text-[32px] leading-[39px] font-bold text-accent">
          <CountUp value={hotel.price} prefix="$" />
          <span className="text-sm">/night</span>
        </p>
      </div>

      <div className="flex justify-between gap-4">
        <p className="font-heading leading-5">
          {stay.checkIn} – {stay.checkOut}
        </p>
        <p className="text-xl leading-6 font-medium text-ink/75">
          {stay.nights} night{stay.nights > 1 ? 's' : ''}
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {details.map(({ label, value, icon: Icon }) => (
          <li
            key={label}
            className="group flex items-center gap-3 rounded-lg border border-primary/50 px-4 py-3 transition-all duration-700 hover:border-primary hover:shadow-glow"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded bg-primary-soft transition-colors duration-500 group-hover:bg-primary">
              <Icon className="size-5 text-primary-dark transition-colors duration-500 group-hover:text-white" />
            </span>
            <span className="flex flex-col">
              <span className="text-xs font-medium text-ink/60">{label}</span>
              <span className="text-sm font-semibold">{value}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
