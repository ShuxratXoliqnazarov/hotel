import Checkbox from '@/components/ui/Checkbox'
import RangeSlider from '@/components/ui/RangeSlider'
import FilterSection from './FilterSection'
import { airlines, ratingOptions, tripTypes, PRICE_RANGE, TIME_RANGE } from '@/data/flights'

function formatTime(minutes) {
  const hours24 = Math.floor(minutes / 60)
  const hours12 = hours24 % 12 || 12
  const mins = String(minutes % 60).padStart(2, '0')
  return `${hours12}:${mins}${hours24 < 12 ? 'Am' : 'Pm'}`
}

/** Боковая панель фильтров. Всё состояние живёт в странице (filters / onChange). */
export default function FiltersSidebar({ filters, onChange }) {
  const update = (key, value) => onChange({ ...filters, [key]: value })

  const toggleInList = (key, item) => {
    const list = filters[key]
    update(key, list.includes(item) ? list.filter((value) => value !== item) : [...list, item])
  }

  return (
    <aside className="flex animate-fade-up flex-col gap-8 [animation-delay:100ms] lg:w-[343px] lg:shrink-0">
      <h2 className="text-xl leading-6 font-semibold">Filters</h2>

      <div className="flex flex-col gap-8">
        <FilterSection title="Price">
          <RangeSlider
            label="Price"
            min={PRICE_RANGE[0]}
            max={PRICE_RANGE[1]}
            value={filters.price}
            onChange={(value) => update('price', value)}
            format={(value) => `$${value}`}
          />
        </FilterSection>

        <FilterSection title="Departure Time">
          <RangeSlider
            label="Departure time"
            min={TIME_RANGE[0]}
            max={TIME_RANGE[1]}
            step={5}
            value={filters.time}
            onChange={(value) => update('time', value)}
            format={formatTime}
          />
        </FilterSection>

        <FilterSection title="Rating">
          <div className="flex gap-4">
            {ratingOptions.map((rating) => {
              const active = filters.rating === rating
              return (
                <button
                  key={rating}
                  type="button"
                  onClick={() => update('rating', active ? null : rating)}
                  aria-pressed={active}
                  className={`h-8 w-10 rounded border border-primary text-xs font-medium transition-all duration-500 hover:-translate-y-0.5 active:scale-90 ${
                    active ? 'scale-110 bg-primary shadow-glow' : 'hover:bg-primary-soft'
                  }`}
                >
                  {rating}+
                </button>
              )
            })}
          </div>
        </FilterSection>

        <FilterSection title="Airlines">
          <div className="flex flex-col gap-2">
            {airlines.map((airline) => (
              <Checkbox
                key={airline}
                label={airline}
                checked={filters.airlines.includes(airline)}
                onChange={() => toggleInList('airlines', airline)}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Trips">
          <div className="flex flex-col gap-2">
            {tripTypes.map((trip) => (
              <Checkbox
                key={trip}
                label={trip}
                checked={filters.trips.includes(trip)}
                onChange={() => toggleInList('trips', trip)}
              />
            ))}
          </div>
        </FilterSection>
      </div>
    </aside>
  )
}
