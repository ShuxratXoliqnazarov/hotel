import Footer from '@/components/layout/Footer'
import HeroSection from './components/HeroSection'
import SearchCard from './components/SearchCard'
import TripsSection from './components/TripsSection'
import PromoSection from './components/PromoSection'
import ReviewsSection from './components/ReviewsSection'

export default function LandingPage() {
  return (
    <div className="animate-page-in overflow-x-clip">
      <HeroSection />
      <SearchCard />

      <main className="flex flex-col gap-20 pt-20 pb-[66px]">
        <TripsSection />
        <PromoSection />
        <ReviewsSection />
      </main>

      <Footer />
    </div>
  )
}
