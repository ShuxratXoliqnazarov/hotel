import MenuIcon from '@/assets/icons/menu.svg?react'
import { hotelSortTabs } from '@/data/hotels'

/** Табы сортировки списка отелей (Recommended / Cheapest / Top rated). */
export default function HotelSortTabs({ active, onChange }) {
  return (
    <div className="flex animate-fade-up flex-wrap items-stretch rounded-xl bg-white px-6 shadow-card [animation-delay:200ms]">
      {hotelSortTabs.map((tab) => {
        const isActive = tab.id === active
        return (
          <div key={tab.id} className="flex flex-1 items-stretch">
            <button
              type="button"
              onClick={() => onChange(tab.id)}
              aria-pressed={isActive}
              className={`group relative flex min-w-[120px] flex-1 items-center py-5 text-left after:absolute after:-inset-x-3 after:bottom-0 after:h-1 after:bg-primary after:transition-transform after:duration-700 after:ease-smooth ${
                isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-50'
              }`}
            >
              <span className="font-semibold transition-transform duration-500 group-hover:translate-x-1">{tab.label}</span>
            </button>
            <span className="mx-6 my-auto hidden h-12 w-px bg-divider sm:block" />
          </div>
        )
      })}

      <button type="button" className="group flex items-center gap-2 py-5 text-sm font-medium">
        <MenuIcon className="size-6 transition-transform duration-700 group-hover:rotate-180" />
        Other sort
      </button>
    </div>
  )
}
