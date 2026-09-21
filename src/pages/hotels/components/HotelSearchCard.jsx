import { Link, useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import HotelSearchFields from '@/components/hotels/HotelSearchFields'
import AirplaneIcon from '@/assets/icons/airplane.svg?react'
import BedIcon from '@/assets/icons/bed.svg?react'
import AddIcon from '@/assets/icons/add.svg?react'
import PaperPlaneIcon from '@/assets/icons/paper-plane.svg?react'

/** «Where are you staying?» — форма поиска с табами Flights / Stays, наезжает на hero. */
export default function HotelSearchCard() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/hotels/list')
  }

  return (
    <form onSubmit={handleSubmit} className="container-page relative z-10 -mt-[76px] animate-fade-up [animation-delay:600ms]">
      <div className="flex flex-col gap-8 rounded-2xl bg-white px-6 pt-4 pb-8 shadow-search transition-shadow duration-700 hover:shadow-glow">
        <div className="flex flex-col gap-10">
          <div className="flex h-12 items-center gap-8">
            <Link to="/flights" className="group flex items-center gap-2 font-semibold transition-colors hover:text-primary-dark">
              <AirplaneIcon className="size-6 transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-110" />
              Flights
            </Link>
            <span className="h-12 w-px bg-divider" />
            <span className="relative flex h-full items-center gap-2 font-semibold after:absolute after:-inset-x-2 after:-bottom-[15px] after:h-1 after:bg-primary">
              <BedIcon className="size-6" />
              Stays
            </span>
          </div>

          <HotelSearchFields />
        </div>

        <div className="flex items-center justify-end gap-6">
          <Button variant="ghost" icon={AddIcon} className="px-0">
            Add Promo Code
          </Button>
          <Button
            type="submit"
            icon={PaperPlaneIcon}
            className="[&>svg]:transition-transform [&>svg]:duration-700 hover:[&>svg]:translate-x-1 hover:[&>svg]:-translate-y-1"
          >
            Show Places
          </Button>
        </div>
      </div>
    </form>
  )
}
