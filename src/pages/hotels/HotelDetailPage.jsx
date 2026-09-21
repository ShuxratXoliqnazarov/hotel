import { useParams } from 'react-router-dom'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CountUp from '@/components/ui/CountUp'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import FlightTitle from '@/components/flights/FlightTitle'
import { useFavourites } from '@/hooks/useFavourites'
import HotelGallery from './components/HotelGallery'
import HotelOverview from './components/HotelOverview'
import AvailableRooms from './components/AvailableRooms'
import HotelLocation from './components/HotelLocation'
import HotelReviews from './components/HotelReviews'
import HeartOutlineIcon from '@/assets/icons/heart-outline.svg?react'
import HeartIcon from '@/assets/icons/heart.svg?react'
import ShareIcon from '@/assets/icons/share.svg?react'
import { getHotelDetail } from '@/data/hotels'

/** /hotels/:hotelId — страница отеля (Figma: Hotel Flow → Hotel Listing, детальный экран). */
export default function HotelDetailPage() {
  const { hotelId } = useParams()
  const hotel = getHotelDetail(hotelId)
  const { has, toggle } = useFavourites()
  const favourite = has(hotel.id)

  return (
    <div className="container-page flex flex-col gap-12 pt-12 pb-[120px]">
      <div className="flex flex-col gap-8">
        <Breadcrumbs items={hotel.breadcrumbs} />

        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <FlightTitle name={hotel.name} address={hotel.address} rating={hotel.rating} reviews={hotel.reviews} />

          <div className="flex animate-fade-up flex-col gap-4 [animation-delay:150ms] md:items-end">
            <p className="text-[32px] leading-[39px] font-bold text-accent">
              <CountUp value={hotel.price} prefix="$" />
              <span className="text-sm">/night</span>
            </p>
            <div className="flex gap-4">
              <IconButton
                icon={favourite ? HeartIcon : HeartOutlineIcon}
                label={favourite ? 'Remove from favourites' : 'Add to favourites'}
                active={favourite}
                onClick={() => toggle(hotel.id)}
              />
              <IconButton icon={ShareIcon} label="Share" />
              <Button to={`/hotels/${hotel.id}/booking`} className="w-[150px] font-semibold">
                Book now
              </Button>
            </div>
          </div>
        </div>

        <HotelGallery key={hotel.id} images={hotel.gallery} name={hotel.name} />
      </div>

      <HotelOverview hotel={hotel} />
      <AvailableRooms key={hotel.id} hotel={hotel} />
      <HotelLocation hotel={hotel} />
      <HotelReviews hotel={hotel} />
    </div>
  )
}
