import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import FlightSearchFields from '@/components/flights/FlightSearchFields'
import AddIcon from '@/assets/icons/add.svg?react'
import PaperPlaneIcon from '@/assets/icons/paper-plane.svg?react'

/** «Where are you flying?» — форма поиска, наезжающая на hero. */
export default function FlightSearchCard() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/flights/list')
  }

  return (
    <form onSubmit={handleSubmit} className="container-page relative z-10 -mt-[76px] animate-fade-up [animation-delay:600ms]">
      <div className="flex flex-col gap-8 rounded-2xl bg-white px-6 pt-8 pb-12 shadow-search transition-shadow duration-700 hover:shadow-glow">
        <h2 className="text-xl leading-6 font-semibold">Where are you flying?</h2>

        <FlightSearchFields />

        <div className="flex items-center justify-end gap-6">
          <Button variant="ghost" icon={AddIcon} className="px-0">
            Add Promo Code
          </Button>
          <Button
            type="submit"
            icon={PaperPlaneIcon}
            className="[&>svg]:transition-transform [&>svg]:duration-700 hover:[&>svg]:translate-x-1 hover:[&>svg]:-translate-y-1"
          >
            Show Filghts
          </Button>
        </div>
      </div>
    </form>
  )
}
