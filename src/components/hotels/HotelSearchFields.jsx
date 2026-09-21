import TextField from '@/components/ui/TextField'
import LocationIcon from '@/assets/icons/location.svg?react'
import CalendarIcon from '@/assets/icons/calendar.svg?react'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'

/**
 * Четыре поля поиска отеля (Destination, Check In, Check Out, Rooms & Guests).
 * Используется на Hotel Search и Hotel Listing.
 * compact — более узкие поля для строки поиска над списком.
 */
export default function HotelSearchFields({ compact = false }) {
  const wide = compact ? 'lg:w-[297px]' : 'lg:w-[324px]'

  return (
    <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:flex">
      <TextField
        label="Enter Destination"
        defaultValue="Istanbul, Turkey"
        trailing={<LocationIcon className="size-5 transition-transform duration-700 group-hover:-translate-y-0.5" />}
        className={wide}
      />
      <TextField
        label="Check In"
        defaultValue="Fri 12/2/2022"
        trailing={<CalendarIcon className="size-5" />}
        className="lg:w-[220px] lg:shrink-0"
      />
      <TextField
        label="Check Out"
        defaultValue="Sun 12/4/2022"
        trailing={<CalendarIcon className="size-5" />}
        className="lg:w-[220px] lg:shrink-0"
      />
      <TextField
        as="select"
        label="Rooms & Guests"
        options={['1 room, 2 guests', '1 room, 1 guest', '2 rooms, 4 guests', '3 rooms, 6 guests']}
        trailing={<ChevronDownIcon className="size-5 transition-transform duration-500 group-focus-within:rotate-180" />}
        className={wide}
      />
    </div>
  )
}
