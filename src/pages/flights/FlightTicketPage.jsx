import { useParams } from 'react-router-dom'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CountUp from '@/components/ui/CountUp'
import Tilt from '@/components/ui/Tilt'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import FlightTitle from '@/components/flights/FlightTitle'
import BoardingPass from './components/BoardingPass'
import TicketRouteMap from './components/TicketRouteMap'
import TermsSection from './components/TermsSection'
import ShareIcon from '@/assets/icons/share.svg?react'
import { getFlightDetail, ticket } from '@/data/flights'

export default function FlightTicketPage() {
  const { flightId } = useParams()
  const flight = getFlightDetail(flightId)

  return (
    <div className="container-page flex flex-col gap-10 pt-12 pb-[120px]">
      <div className="flex flex-col gap-8">
        <Breadcrumbs items={flight.breadcrumbs} muted />

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <FlightTitle name={flight.name} address={flight.address} />

          <div className="flex animate-fade-up flex-col gap-4 [animation-delay:150ms] md:items-end">
            <CountUp value={flight.price} prefix="$" className="text-[32px] leading-[39px] font-bold" />
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
          <BoardingPass ticket={ticket} segment={flight.segment} />
          <TicketRouteMap passenger={ticket.passenger} boardingPass={ticket.boardingPass} />
        </Tilt>

        <TermsSection />
      </div>
    </div>
  )
}
