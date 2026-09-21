import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import Rating from '@/components/ui/Rating'
import CountUp from '@/components/ui/CountUp'
import { useFavourites } from '@/hooks/useFavourites'
import HeartOutlineIcon from '@/assets/icons/heart-outline.svg?react'
import HeartIcon from '@/assets/icons/heart.svg?react'
import LocationIcon from '@/assets/icons/location.svg?react'
import StarIcon from '@/assets/icons/star.svg?react'

/**
 * Карточка отеля: фото слева, описание и цена справа.
 * Используется в Hotel Listing и Favourites. Сердечко пишет в общее избранное (useFavourites).
 */
export default function HotelCard({ hotel, index = 0 }) {
  const { has, toggle } = useFavourites()
  const favourite = has(hotel.id)

  return (
    <article
      style={{ animationDelay: `${index * 150}ms` }}
      className="group flex animate-fade-up flex-col gap-4 rounded-xl bg-white p-4 shadow-card transition-all duration-700 ease-smooth hover:-translate-y-1 hover:shadow-hover sm:flex-row sm:gap-6"
    >
      <div className="relative h-[220px] shrink-0 overflow-hidden rounded-xl sm:h-auto sm:min-h-[240px] sm:w-[280px] lg:w-[340px]">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="absolute inset-0 size-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium">
          {hotel.gallery.length} photos
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6 sm:py-2">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl leading-6 font-semibold transition-colors duration-500 group-hover:text-primary-dark">
                {hotel.name}
              </h2>
              <p className="flex items-center gap-1 text-xs font-medium text-ink/75">
                <LocationIcon className="size-4 shrink-0 text-ink" />
                {hotel.address}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium">
              <span className="flex items-center gap-1">
                <StarIcon className="size-4 text-[#ffb800]" />
                {hotel.stars} Star Hotel
              </span>
              <span>{hotel.amenities}+ Amenities</span>
            </div>

            <Rating score={hotel.rating} label={hotel.ratingLabel} reviews={hotel.reviews} />
          </div>

          <div className="sm:text-right">
            <p className="text-xs font-medium text-ink/75">starting from</p>
            <p className="origin-right text-2xl leading-[29px] font-bold text-accent transition-transform duration-700 group-hover:scale-110">
              <CountUp value={hotel.price} prefix="$" duration={1200} />
              <span className="text-sm">/night</span>
            </p>
            <p className="text-xs font-medium text-ink/60">excl. tax</p>
          </div>
        </div>

        <div className="relative flex gap-4 pt-4 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-ink/25 after:absolute after:top-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-1000 after:ease-smooth group-hover:after:scale-x-100">
          <IconButton
            icon={favourite ? HeartIcon : HeartOutlineIcon}
            label={favourite ? 'Remove from favourites' : 'Add to favourites'}
            active={favourite}
            onClick={() => toggle(hotel.id)}
          />
          <Button to={`/hotels/${hotel.id}`} className="flex-1 font-semibold">
            View Place
          </Button>
        </div>
      </div>
    </article>
  )
}
