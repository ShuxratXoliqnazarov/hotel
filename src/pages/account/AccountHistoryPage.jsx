import { useState } from 'react'
import AccountShell from './components/AccountShell'
import BookingRow from './components/BookingRow'
import AirplaneIcon from '@/assets/icons/airplane.svg?react'
import BedIcon from '@/assets/icons/bed.svg?react'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'
import CalendarIcon from '@/assets/icons/calendar.svg?react'
import TimerIcon from '@/assets/icons/timer.svg?react'
import DoorIcon from '@/assets/icons/door.svg?react'
import SeatIcon from '@/assets/icons/seat.svg?react'
import EnterIcon from '@/assets/icons/enter.svg?react'
import ExitIcon from '@/assets/icons/exit.svg?react'
import KeyIcon from '@/assets/icons/key.svg?react'
import { bookings, bookingPeriods } from '@/data/account'

const TABS = [
  { id: 'flights', label: 'Flights', icon: AirplaneIcon },
  { id: 'stays', label: 'Stays', icon: BedIcon },
]

const FLIGHT_ICONS = { date: CalendarIcon, time: TimerIcon, gate: DoorIcon, seat: SeatIcon }
const STAY_ICONS = { in: EnterIcon, out: ExitIcon, room: KeyIcon }

const withIcons = (details, icons) => details.map((detail) => ({ ...detail, icon: icons[detail.id] }))

export default function AccountHistoryPage() {
  const [tab, setTab] = useState('flights')
  const [period, setPeriod] = useState(bookingPeriods[0])

  return (
    <AccountShell>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl leading-[29px] font-semibold">Tickets/Bookings</h2>

        <label className="flex items-center gap-1 text-sm font-medium">
          <select
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
            aria-label="Период бронирований"
            className="cursor-pointer appearance-none bg-transparent font-medium outline-none"
          >
            {bookingPeriods.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <ChevronDownIcon className="size-4" />
        </label>
      </div>

      <div className="grid grid-cols-2 overflow-hidden rounded-xl bg-white shadow-card">
        {TABS.map(({ id, label, icon: Icon }) => {
          const isActive = id === tab
          return (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              aria-pressed={isActive}
              className={`group relative flex h-14 items-center justify-center gap-2 font-medium transition-colors not-first:border-l not-first:border-divider ${
                isActive ? 'text-ink' : 'text-ink/60 hover:text-ink'
              } after:absolute after:inset-x-6 after:bottom-0 after:h-1 after:origin-left after:bg-primary after:transition-transform ${
                isActive ? 'after:scale-x-100' : 'after:scale-x-0'
              }`}
            >
              <Icon className="size-5 transition-transform group-hover:-translate-y-0.5" />
              {label}
            </button>
          )
        })}
      </div>

      {/* key — чтобы карточки заново «влетали» при смене вкладки */}
      <div key={tab} className="flex flex-col gap-4">
        {tab === 'flights'
          ? bookings.flights.map((item, index) => (
              <BookingRow
                key={item.id}
                index={index}
                logo={item.logo}
                logoAlt={item.airline}
                route={[
                  { label: item.from.airport, value: item.from.time },
                  { label: item.to.airport, value: item.to.time },
                ]}
                details={withIcons(item.details, FLIGHT_ICONS)}
                to="/flights/emirates-a380/ticket"
              />
            ))
          : bookings.stays.map((item, index) => (
              <BookingRow
                key={item.id}
                index={index}
                logo={item.logo}
                logoAlt={item.hotel}
                route={[
                  { label: item.checkIn.label, value: item.checkIn.value },
                  { label: item.checkOut.label, value: item.checkOut.value },
                ]}
                details={withIcons(item.details, STAY_ICONS)}
                to="/hotels"
              />
            ))}
      </div>
    </AccountShell>
  )
}
