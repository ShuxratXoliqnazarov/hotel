import TextField from '@/components/ui/TextField'
import SwapIcon from '@/assets/icons/swap.svg?react'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'

/**
 * Четыре поля поиска рейса (From-To, Trip, Depart-Return, Passenger-Class).
 * Используется на Landing, Flights Search и Flight Listing.
 * compact — более узкие поля для строки поиска над списком рейсов.
 */
export default function FlightSearchFields({ compact = false }) {
  const wide = compact ? 'lg:w-[297px]' : 'lg:w-[324px]'

  return (
    <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:flex">
      <TextField
        label="From - To"
        defaultValue="Lahore - Karachi"
        trailing={<SwapIcon className="size-6 transition-transform duration-700 group-hover:rotate-180" />}
        className={wide}
      />
      <TextField
        as="select"
        label="Trip"
        options={['Return', 'One way', 'Multi-City']}
        trailing={<ChevronDownIcon className="size-5 transition-transform duration-500 group-focus-within:rotate-180" />}
        className="lg:w-[140px] lg:shrink-0"
      />
      <TextField label="Depart- Return" defaultValue="07 Nov 22 - 13 Nov 22" className={wide} />
      <TextField label="Passenger - Class" defaultValue="1 Passenger, Economy" className={wide} />
    </div>
  )
}
