import Checkbox from '@/components/ui/Checkbox'
import RangeSlider from '@/components/ui/RangeSlider'
import Button from '@/components/ui/Button'
import FilterSection from '@/pages/flights/components/FilterSection'
import worldMap from '@/assets/images/flights/world-map.svg'
import LocationIcon from '@/assets/icons/location.svg?react'
import { amenitiesList, freebies, ratingOptions, PRICE_RANGE } from '@/data/hotels'

/** Боковая панель фильтров отелей. Всё состояние живёт в странице (filters / onChange). */
export default function HotelFilters({ filters, onChange }) {
  const update = (key, value) => onChange({ ...filters, [key]: value })

  const toggleInList = (key, item) => {
    const list = filters[key]
    update(key, list.includes(item) ? list.filter((value) => value !== item) : [...list, item])
  }

  return (
    <aside className="flex animate-fade-up flex-col gap-8 [animation-delay:100ms] lg:w-[343px] lg:shrink-0">
      {/* мини-карта «Show on map» */}
      <div className="group relative flex h-[160px] items-center justify-center overflow-hidden rounded-xl bg-primary-light">
        <img
          src={worldMap}
          alt=""
          className="absolute inset-0 size-full scale-150 object-cover opacity-70 transition-transform duration-[1.5s] ease-smooth group-hover:scale-[1.7]"
        />
        <Button variant="dark" icon={LocationIcon} className="relative gap-2 font-semibold">
          Show on map
        </Button>
      </div>

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

        <FilterSection title="Freebies">
          <div className="flex flex-col gap-2">
            {freebies.map((item) => (
              <Checkbox
                key={item}
                label={item}
                checked={filters.freebies.includes(item)}
                onChange={() => toggleInList('freebies', item)}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Amenities">
          <div className="flex flex-col gap-2">
            {amenitiesList.map((item) => (
              <Checkbox
                key={item}
                label={item}
                checked={filters.amenities.includes(item)}
                onChange={() => toggleInList('amenities', item)}
              />
            ))}
          </div>
        </FilterSection>
      </div>
    </aside>
  )
}
