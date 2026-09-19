import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Reveal from '@/components/ui/Reveal'
import CountUp from '@/components/ui/CountUp'
import { useParallax } from '@/hooks/useParallax'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import FlightTitle from '@/components/flights/FlightTitle'
import FlightSegment from '@/components/flights/FlightSegment'
import ClassFeatures from './components/ClassFeatures'
import AirlinePolicies from './components/AirlinePolicies'
import HeartOutlineIcon from '@/assets/icons/heart-outline.svg?react'
import HeartIcon from '@/assets/icons/heart.svg?react'
import ShareIcon from '@/assets/icons/share.svg?react'
import { getFlightDetail } from '@/data/flights'

export default function FlightDetailPage() {
  const { flightId } = useParams()
  const flight = getFlightDetail(flightId)
  const [favourite, setFavourite] = useState(false)
  const coverRef = useParallax(0.12)

  return (
    <div className="container-page flex flex-col gap-10 pt-12 pb-[120px]">
      <div className="flex flex-col gap-8">
        <Breadcrumbs items={flight.breadcrumbs} />

        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <FlightTitle name={flight.name} address={flight.address} rating={flight.rating} reviews={flight.reviews} />

          <div className="flex animate-fade-up flex-col gap-4 [animation-delay:150ms] md:items-end">
            <CountUp value={flight.price} prefix="$" className="text-[32px] leading-[39px] font-bold text-accent" />
            <div className="flex gap-4">
              <IconButton
                icon={favourite ? HeartIcon : HeartOutlineIcon}
                label="Add to favourites"
                active={favourite}
                onClick={() => setFavourite((prev) => !prev)}
              />
              <IconButton icon={ShareIcon} label="Share" />
              <Button to={`/flights/${flight.id}/booking`} className="w-[150px] font-semibold">
                Book now
              </Button>
            </div>
          </div>
        </div>

        <div className="group relative h-[240px] animate-scale-in overflow-hidden rounded-xl [animation-delay:250ms] md:h-[395px]">
          {/* лёгкий параллакс обложки при скролле */}
          <div ref={coverRef} className="absolute inset-x-0 -top-[25%] bottom-0 will-change-transform">
            <img
              src={flight.cover}
              alt={flight.name}
              className="size-full object-cover object-[50%_40%] transition-transform duration-[2s] group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      <ClassFeatures classes={flight.classes} features={flight.features} />
      <AirlinePolicies airline={flight.segment.airline} policies={flight.policies} />

      {[1, 2].map((key) => (
        <Reveal
          as="section"
          key={key}
          delay={key * 100}
          className="flex flex-col gap-6 rounded-xl bg-white px-6 py-8 shadow-card transition-shadow duration-700 hover:shadow-hover"
        >
          <div className="flex justify-between gap-4">
            <h2 className="font-heading text-xl leading-[25px]">{flight.segment.date}</h2>
            <p className="text-xl leading-6 font-medium text-ink/75">{flight.segment.duration}</p>
          </div>
          <FlightSegment segment={flight.segment} />
        </Reveal>
      ))}
    </div>
  )
}
