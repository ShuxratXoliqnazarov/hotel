import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import Tilt from '@/components/ui/Tilt'
import CountUp from '@/components/ui/CountUp'
import SectionHeader from '@/components/ui/SectionHeader'
import { stayDeals } from '@/data/hotels'

const SUBTITLE =
  'Looking for a place to unwind this season? Whether you want a city break or a beach retreat, we’ve got a stay that fits your plan.'

/** «Fall into travel» для отелей: четыре карточки-направления. */
export default function StayDeals() {
  return (
    <section className="container-page flex flex-col gap-10">
      <SectionHeader title="Popular places to stay" subtitle={SUBTITLE} actionTo="/hotels/list" />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stayDeals.map((deal, index) => (
          <Reveal as="li" key={deal.city} variant="flip" delay={index * 150}>
            <Tilt
              max={7}
              className="group flex h-[420px] items-end overflow-hidden rounded-xl p-6 hover:-translate-y-3 hover:shadow-hover"
            >
              <img
                src={deal.image}
                alt={deal.city}
                className="absolute inset-0 size-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-black/0 to-black/40 transition-all duration-700 group-hover:h-3/4 group-hover:to-black/70" />

              <div className="relative flex w-full flex-col gap-4 text-white">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <h3 className="text-2xl leading-[29px] font-semibold">{deal.city}</h3>
                    <p className="text-sm">{deal.caption}</p>
                  </div>
                  <p className="text-2xl leading-[29px] font-semibold transition-transform duration-700 group-hover:scale-110">
                    <CountUp value={deal.price} prefix="$ " />
                  </p>
                </div>
                <Button to="/hotels/list" className="w-full">
                  Book Hotel
                </Button>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
