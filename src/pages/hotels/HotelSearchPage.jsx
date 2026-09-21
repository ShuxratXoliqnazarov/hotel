import HotelSearchHero from './components/HotelSearchHero'
import HotelSearchCard from './components/HotelSearchCard'
import StayDeals from './components/StayDeals'
import FeaturedStay from './components/FeaturedStay'

/** /hotels — поиск отеля (Figma: Hotel Flow → Hotel Search). */
export default function HotelSearchPage() {
  return (
    <>
      <HotelSearchHero />
      <HotelSearchCard />

      <div className="flex flex-col gap-20 pt-20 pb-[120px]">
        <StayDeals />
        <FeaturedStay />
      </div>
    </>
  )
}
