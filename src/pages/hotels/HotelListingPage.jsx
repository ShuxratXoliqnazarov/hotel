import { useMemo, useState } from 'react'
import Button from '@/components/ui/Button'
import HotelSearchFields from '@/components/hotels/HotelSearchFields'
import HotelCard from '@/components/hotels/HotelCard'
import HotelFilters from './components/HotelFilters'
import HotelSortTabs from './components/HotelSortTabs'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'
import SearchIcon from '@/assets/icons/search.svg?react'
import { hotels, PRICE_RANGE } from '@/data/hotels'

const TOTAL_PLACES = 257

const INITIAL_FILTERS = {
  price: PRICE_RANGE,
  rating: null,
  freebies: [],
  amenities: [],
}

/** /hotels/list — результаты поиска (Figma: Hotel Flow → Hotel Listing). */
export default function HotelListingPage() {
  const [filters, setFilters] = useState(INITIAL_FILTERS)
  const [sort, setSort] = useState('recommended')

  const visibleHotels = useMemo(() => {
    const [minPrice, maxPrice] = filters.price

    const filtered = hotels.filter(
      (hotel) =>
        hotel.price >= minPrice &&
        hotel.price <= maxPrice &&
        (filters.rating === null || hotel.rating >= filters.rating) &&
        filters.freebies.every((item) => hotel.freebies.includes(item)) &&
        filters.amenities.every((item) => hotel.facilities.includes(item)),
    )

    if (sort === 'cheapest') return [...filtered].sort((a, b) => a.price - b.price)
    if (sort === 'rating') return [...filtered].sort((a, b) => b.rating - a.rating)
    return filtered
  }, [filters, sort])

  return (
    <div className="container-page flex flex-col gap-8 pt-12 pb-[120px]">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex animate-fade-down flex-col gap-6 rounded-2xl bg-white px-6 py-8 shadow-card lg:flex-row lg:items-center"
      >
        <HotelSearchFields compact />
        <button
          type="submit"
          aria-label="Search hotels"
          className="group shine grid h-14 shrink-0 place-items-center rounded bg-primary transition-all duration-500 hover:-translate-y-0.5 hover:shadow-glow active:scale-90 lg:w-14"
        >
          <SearchIcon className="size-6 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12" />
        </button>
      </form>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
        <HotelFilters filters={filters} onChange={setFilters} />

        <span className="mx-6 hidden w-px self-stretch bg-ink/25 lg:block" />

        <section className="flex flex-1 flex-col gap-6 lg:pl-4">
          <HotelSortTabs active={sort} onChange={setSort} />

          <div className="flex items-center justify-between text-sm font-semibold">
            <p>
              Showing {visibleHotels.length} of <span className="text-accent">{TOTAL_PLACES} places</span>
            </p>
            <button type="button" className="flex items-center gap-1">
              <span className="font-normal">Sort by</span> Recommended
              <ChevronDownIcon className="size-[18px]" />
            </button>
          </div>

          {/* key меняется при смене фильтров / сортировки → карточки заново «въезжают» лесенкой */}
          <div
            key={`${filters.freebies.join()}-${filters.amenities.join()}-${filters.rating}-${filters.price.join()}-${sort}`}
            className="flex flex-col gap-8"
          >
            {visibleHotels.map((hotel, index) => (
              <HotelCard key={hotel.id} hotel={hotel} index={index} />
            ))}

            {visibleHotels.length === 0 && (
              <p className="animate-scale-in rounded-xl bg-white p-8 text-center text-ink/60 shadow-card">
                No hotels match your filters.
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
