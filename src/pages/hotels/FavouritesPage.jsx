import { useState } from 'react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import HotelCard from '@/components/hotels/HotelCard'
import { useFavourites } from '@/hooks/useFavourites'
import { hotels } from '@/data/hotels'

const PAGE_SIZE = 3

/** /favourites — сохранённые отели (Figma: Hotel Flow → Favourites). Общий стор с сердечками в списке и на странице отеля. */
export default function FavouritesPage() {
  const { ids } = useFavourites()
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const saved = ids.map((id) => hotels.find((hotel) => hotel.id === id)).filter(Boolean)

  return (
    <div className="container-page flex flex-col gap-8 pt-12 pb-[120px]">
      <div className="flex flex-col gap-4">
        <Breadcrumbs items={[{ label: 'Account', to: '/account' }, { label: 'Favourites' }]} muted />
        <div className="flex animate-fade-up flex-wrap items-end justify-between gap-4">
          <h1 className="font-heading text-3xl md:text-[40px] md:leading-[51px]">Favourites</h1>
          <p className="text-sm font-semibold">
            {saved.length} saved {saved.length === 1 ? 'place' : 'places'}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {saved.slice(0, visibleCount).map((hotel, index) => (
          <HotelCard key={hotel.id} hotel={hotel} index={index} />
        ))}

        {saved.length === 0 && (
          <div className="flex animate-scale-in flex-col items-center gap-4 rounded-xl bg-white p-10 text-center shadow-card">
            <p className="text-ink/60">You haven’t saved any places yet.</p>
            <Button to="/hotels/list" className="font-semibold">
              Find a place to stay
            </Button>
          </div>
        )}
      </div>

      {saved.length > visibleCount && (
        <Button variant="dark" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)} className="w-full font-semibold">
          Show more results
        </Button>
      )}
    </div>
  )
}
