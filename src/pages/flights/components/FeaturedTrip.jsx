import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import Tilt from '@/components/ui/Tilt'
import CountUp from '@/components/ui/CountUp'
import SectionHeader from '@/components/ui/SectionHeader'
import { featuredTrip } from '@/data/flights'

const SUBTITLE =
  'Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.'

export default function FeaturedTrip() {
  const { title, price, text, images } = featuredTrip

  return (
    <section className="container-page flex flex-col gap-6">
      <SectionHeader title="Fall into travel" subtitle={SUBTITLE} />

      <div className="flex flex-col gap-6 lg:flex-row">
        <Reveal variant="left" className="lg:w-[552px] lg:shrink-0">
          <Tilt
            as="article"
            max={4}
            className="group flex h-full flex-col justify-between gap-10 rounded-[20px] bg-primary p-6 hover:shadow-glow lg:h-[424px]"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between gap-6">
                <h3 className="max-w-[330px] font-heading text-3xl md:text-[40px] md:leading-[51px]">{title}</h3>
                <div className="flex h-fit flex-col items-center gap-1 rounded-lg bg-white p-2 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110">
                  <span className="font-heading text-sm font-normal">From</span>
                  <CountUp value={price} prefix="$" className="text-xl leading-6 font-semibold" />
                </div>
              </div>
              <p className="text-sm">{text}</p>
            </div>

            <Button to="/flights/list" variant="white" className="w-full">
              Book Flight
            </Button>
          </Tilt>
        </Reveal>

        <div className="grid flex-1 grid-cols-2 gap-x-5 gap-y-6">
          {images.map((image, index) => (
            <Reveal key={image} variant="zoom" delay={150 + index * 120}>
              <div className="group h-[140px] overflow-hidden rounded-xl border-2 border-primary transition-all duration-700 hover:-translate-y-1 hover:shadow-glow sm:h-[200px]">
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="size-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
