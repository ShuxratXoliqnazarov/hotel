import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import PaymentOptions from '@/pages/flights/components/PaymentOptions'
import BookingLogin from '@/pages/flights/components/BookingLogin'
import PaymentCards from '@/pages/flights/components/PaymentCards'
import AddCardModal from '@/pages/flights/components/AddCardModal'
import StaySummary from './components/StaySummary'
import HotelPriceSummary from './components/HotelPriceSummary'
import { getHotelDetail } from '@/data/hotels'
import { savedCards } from '@/data/flights'

/**
 * /hotels/:hotelId/booking — бронирование (Figma: Hotel Flow → Booking detail).
 * Гость видит форму входа, после «входа» — выбор карты. Добавление новой карты
 * завершает оплату и ведёт на страницу билета. Блоки оплаты общие с Flight Flow.
 */
export default function HotelBookingPage() {
  const { hotelId } = useParams()
  const navigate = useNavigate()
  const hotel = getHotelDetail(hotelId)

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedCard, setSelectedCard] = useState(savedCards[0].id)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddCard = () => {
    setIsModalOpen(false)
    navigate(`/hotels/${hotel.id}/ticket`)
  }

  return (
    <div className="mx-auto flex w-full max-w-[calc(1280px+2rem)] flex-col gap-6 px-4 pt-12 pb-[120px]">
      <div className="lg:px-6">
        <Breadcrumbs items={hotel.breadcrumbs} />
      </div>

      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-1 flex-col gap-10">
          <StaySummary hotel={hotel} />

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

        <HotelPriceSummary hotel={hotel} />
      </div>

      {isModalOpen && <AddCardModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddCard} />}
    </div>
  )
}
