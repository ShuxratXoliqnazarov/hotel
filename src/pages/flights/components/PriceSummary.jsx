import Rating from '@/components/ui/Rating'
import Reveal from '@/components/ui/Reveal'
import CountUp from '@/components/ui/CountUp'
import thumb from '@/assets/images/flights/booking-thumb.jpg'

/** Правая карточка бронирования: рейс + расшифровка цены. */
export default function PriceSummary({ flight }) {
  return (
    <Reveal as="aside" variant="right" delay={150} className="flex h-fit flex-col gap-4 rounded-xl bg-white p-6 shadow-card lg:sticky lg:top-6 lg:w-[450px] lg:shrink-0">
      <div className="flex items-center gap-6">
        <div className="group size-[120px] shrink-0 overflow-hidden rounded-xl">
          <img src={thumb} alt="" className="size-full object-cover object-[93%_50%] transition-transform duration-1000 ease-smooth group-hover:scale-110" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-ink/75">Economy</p>
            <p className="text-xl leading-6 font-semibold">{flight.name}</p>
          </div>
          <Rating score={flight.rating} reviews={flight.reviews} />
        </div>
      </div>

      <hr className="border-ink/25" />
      <p className="font-medium">
        Your booking is protected by <span className="font-bold">golobe</span>
      </p>
      <hr className="border-ink/25" />

      <div className="flex flex-col gap-4">
        <h3 className="font-heading leading-5">Price Details</h3>
        <dl className="flex flex-col gap-4">
          {flight.priceDetails.map(({ label, value }) => (
            <div key={label} className="-mx-2 flex justify-between rounded px-2 transition-colors hover:bg-primary-soft">
              <dt className="font-medium">{label}</dt>
              <dd className="font-semibold">${value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <hr className="border-ink/25" />
      <div className="flex justify-between">
        <span className="font-medium">Total</span>
        <CountUp value={flight.total} prefix="$" className="font-semibold" />
      </div>
    </Reveal>
  )
}
