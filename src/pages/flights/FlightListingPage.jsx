import { useMemo, useState } from 'react'
import Button from '@/components/ui/Button'
import FlightSearchFields from '@/components/flights/FlightSearchFields'
import FiltersSidebar from './components/FiltersSidebar'
import SortTabs from './components/SortTabs'
import FlightCard from './components/FlightCard'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'
import SearchIcon from '@/assets/icons/search.svg?react'
import { flights, PRICE_RANGE, TIME_RANGE } from '@/data/flights'

const TOTAL_PLACES = 257

const INITIAL_FILTERS = {
  price: PRICE_RANGE,
  time: TIME_RANGE,
  rating: null,
  airlines: [],
  trips: [],
}

export default function FlightListingPage() {
  const [filters, setFilters] = useState(INITIAL_FILTERS)
  const [sort, setSort] = useState('best')

  const visibleFlights = useMemo(() => {
    const [minPrice, maxPrice] = filters.price

    const filtered = flights.filter(
      (flight) =>
        flight.price >= minPrice &&
        flight.price <= maxPrice &&
        (filters.rating === null || flight.rating >= filters.rating) &&
        (filters.airlines.length === 0 || filters.airlines.includes(flight.airline)),
    )

    return sort === 'cheapest' ? [...filtered].sort((a, b) => a.price - b.price) : filtered
  }, [filters, sort])

  return (
    <div className="container-page flex flex-col gap-8 pt-12 pb-[120px]">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex animate-fade-down flex-col gap-6 rounded-2xl bg-white px-6 py-8 shadow-card lg:flex-row lg:items-center"
      >
        <FlightSearchFields compact />
        <button
          type="submit"
          aria-label="Search flights"
          className="group shine grid h-14 shrink-0 place-items-center rounded bg-primary transition-all duration-500 hover:-translate-y-0.5 hover:shadow-glow active:scale-90 lg:w-14"
        >
          <SearchIcon className="size-6 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12" />
        </button>
      </form>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
        <FiltersSidebar filters={filters} onChange={setFilters} />

        <span className="mx-6 hidden w-px self-stretch bg-ink/25 lg:block" />

        <section className="flex flex-1 flex-col gap-6 lg:pl-4">
          <SortTabs active={sort} onChange={setSort} />

          <div className="flex items-center justify-between text-sm font-semibold">
            <p>
              Showing {visibleFlights.length} of <span className="text-accent">{TOTAL_PLACES} places</span>
            </p>
            <button type="button" className="flex items-center gap-1">
              <span className="font-normal">Sort by</span> Recommended
              <ChevronDownIcon className="size-[18px]" />
            </button>
          </div>

          {/* key меняется при смене авиакомпаний / рейтинга / сортировки → карточки заново «въезжают» лесенкой */}
          <div key={`${filters.airlines.join()}-${filters.rating}-${sort}`} className="flex flex-col gap-8">
            {visibleFlights.map((flight, index) => (
              <FlightCard key={flight.id} flight={flight} index={index} />
            ))}

            {visibleFlights.length === 0 && (
              <p className="animate-scale-in rounded-xl bg-white p-8 text-center text-ink/60 shadow-card">
                No flights match your filters.
              </p>
            )}
          </div>

          <Button variant="dark" className="w-full font-semibold">
            Show more results
          </Button>
        </section>
      </div>
    </div>
  )
}
