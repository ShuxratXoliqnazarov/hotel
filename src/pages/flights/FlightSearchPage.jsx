import SearchHero from './components/SearchHero'
import FlightSearchCard from './components/FlightSearchCard'
import PlacesMap from './components/PlacesMap'
import FallDeals from './components/FallDeals'
import FeaturedTrip from './components/FeaturedTrip'

export default function FlightSearchPage() {
  return (
    <>
      <SearchHero />
      <FlightSearchCard />

      <div className="flex flex-col gap-20 pt-20 pb-[120px]">
        <PlacesMap />
        <FallDeals />
        <FeaturedTrip />
      </div>
    </>
  )
}
