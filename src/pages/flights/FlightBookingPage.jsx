import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CountUp from '@/components/ui/CountUp'
import FlightSegment from '@/components/flights/FlightSegment'
import PaymentOptions from './components/PaymentOptions'
import BookingLogin from './components/BookingLogin'
import PaymentCards from './components/PaymentCards'
import AddCardModal from './components/AddCardModal'
import PriceSummary from './components/PriceSummary'
import { getFlightDetail, savedCards } from '@/data/flights'

/**
 * Бронирование: гость видит форму входа, после «входа» — выбор карты.
 * Добавление новой карты завершает оплату и ведёт на страницу билета.
 */
export default function FlightBookingPage() {
  const { flightId } = useParams()
  const navigate = useNavigate()
  const flight = getFlightDetail(flightId)

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedCard, setSelectedCard] = useState(savedCards[0].id)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddCard = () => {
    setIsModalOpen(false)
    navigate(`/flights/${flight.id}/ticket`)
  }

  return (
    <div className="mx-auto flex w-full max-w-[calc(1280px+2rem)] flex-col gap-6 px-4 pt-12 pb-[120px]">
      <div className="lg:px-6">
        <Breadcrumbs items={flight.breadcrumbs} />
      </div>

      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-1 flex-col gap-10">
          <section className="flex animate-fade-up flex-col gap-6 rounded-xl bg-white px-6 py-8 shadow-card transition-shadow duration-700 hover:shadow-hover">
            <div className="flex items-center justify-between gap-4">
              <h1 className="font-heading text-2xl leading-[30px]">{flight.name}</h1>
              <CountUp value={flight.price} prefix="$" className="text-[32px] leading-[39px] font-bold text-accent" />
            </div>
            <div className="flex justify-between gap-4">
              <p className="font-heading leading-5">{flight.segment.date}</p>
              <p className="text-xl leading-6 font-medium text-ink/75">{flight.segment.duration}</p>
            </div>
            <FlightSegment segment={flight.segment} spread />
          </section>

          <PaymentOptions />

          {isLoggedIn ? (
            <PaymentCards
              cards={savedCards}
              selectedId={selectedCard}
              onSelect={setSelectedCard}
              onAddCard={() => setIsModalOpen(true)}
            />
          ) : (
            <BookingLogin onLogin={() => setIsLoggedIn(true)} />
          )}
        </div>

        <PriceSummary flight={flight} />
      </div>

      {isModalOpen && <AddCardModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddCard} />}
    </div>
  )
}
