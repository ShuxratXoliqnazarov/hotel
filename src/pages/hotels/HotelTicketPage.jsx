import { useParams } from 'react-router-dom'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CountUp from '@/components/ui/CountUp'
import Tilt from '@/components/ui/Tilt'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import FlightTitle from '@/components/flights/FlightTitle'
import TermsSection from '@/pages/flights/components/TermsSection'
import HotelVoucher from './components/HotelVoucher'
import StayPhotoCard from './components/StayPhotoCard'
import ShareIcon from '@/assets/icons/share.svg?react'
import { getHotelDetail, hotelTicket } from '@/data/hotels'

/** /hotels/:hotelId/ticket — подтверждение брони (Figma: Hotel Flow → Booking detail, финальный экран). */
export default function HotelTicketPage() {
  const { hotelId } = useParams()
  const hotel = getHotelDetail(hotelId)

  return (
    <div className="container-page flex flex-col gap-10 pt-12 pb-[120px]">
      <div className="flex flex-col gap-8">
        <Breadcrumbs items={hotel.breadcrumbs} muted />

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <FlightTitle name={hotel.name} address={hotel.address} />

          <div className="flex animate-fade-up flex-col gap-4 [animation-delay:150ms] md:items-end">
            <CountUp value={hotel.total} prefix="$" className="text-[32px] leading-[39px] font-bold" />
            <div className="flex gap-4">
              <IconButton icon={ShareIcon} label="Share" />
              <Button onClick={() => window.print()} className="w-[150px] font-semibold">
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        <Tilt max={3} glare={false} className="flex">
          <HotelVoucher ticket={hotelTicket} stay={hotel.stay} />
          <StayPhotoCard hotel={hotel} />
        </Tilt>

        <TermsSection />
      </div>
    </div>
  )
}
