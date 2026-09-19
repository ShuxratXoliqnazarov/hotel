import { Link, useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import FlightSearchFields from '@/components/flights/FlightSearchFields'
import AirplaneIcon from '@/assets/icons/airplane.svg?react'
import BedIcon from '@/assets/icons/bed.svg?react'
import AddIcon from '@/assets/icons/add.svg?react'
import PaperPlaneIcon from '@/assets/icons/paper-plane.svg?react'

/** Карточка поиска с табами Flights / Stays, наезжает на hero. */
export default function SearchCard() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/flights/list')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="container-page relative z-10 -mt-24 animate-fade-up [animation-delay:1000ms] md:-mt-[97px]"
    >
      <div className="flex flex-col gap-8 rounded-2xl bg-white px-4 pt-4 pb-8 shadow-search transition-shadow duration-700 hover:shadow-glow md:px-8">
        <div className="flex flex-col gap-12">
          <div className="flex h-12 items-center gap-8">
            <span className="relative flex h-full items-center gap-2 font-semibold after:absolute after:-inset-x-2 after:-bottom-[15px] after:h-1 after:bg-primary">
              <AirplaneIcon className="size-6" />
              Flights
            </span>
            <span className="h-12 w-px bg-divider" />
            <Link to="/hotels" className="group flex items-center gap-2 font-semibold transition-colors hover:text-primary-dark">
              <BedIcon className="size-6 transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-110" />
              Stays
            </Link>
          </div>

          <FlightSearchFields />
        </div>

        <div className="flex items-center justify-end gap-6">
          <Button variant="ghost" icon={AddIcon} className="px-0">
            Add Promo Code
          </Button>
          <Button type="submit" icon={PaperPlaneIcon} className="[&>svg]:transition-transform [&>svg]:duration-700 hover:[&>svg]:translate-x-1 hover:[&>svg]:-translate-y-1">
            Show Filghts
          </Button>
        </div>
      </div>
    </form>
  )
}
