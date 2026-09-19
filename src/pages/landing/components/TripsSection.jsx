import Reveal from '@/components/ui/Reveal'
import Tilt from '@/components/ui/Tilt'
import SectionHeader from '@/components/ui/SectionHeader'
import { destinations } from '@/data/landing'

const SERVICES = ['Flights', 'Hotels', 'Resorts']

export default function TripsSection() {
  return (
    <section className="container-page flex flex-col gap-10">
      <SectionHeader
        title="Plan your perfect trip"
        subtitle="Search Flights & Places Hire to our most popular destinations"
        actionLabel="See more places"
        actionTo="/flights"
      />

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map(({ city, image, imagePosition }, index) => (
          // «лесенка»: каждая карточка появляется чуть позже предыдущей
          <Reveal as="li" key={city} variant="flip" delay={(index % 3) * 150 + Math.floor(index / 3) * 120}>
            <Tilt
              as="a"
              href="#"
              max={6}
              className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-card hover:-translate-y-2 hover:shadow-glow"
            >
              <span className="size-[90px] shrink-0 overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={city}
                  style={{ objectPosition: imagePosition }}
                  className="size-full object-cover transition-transform duration-1000 ease-smooth group-hover:scale-110 group-hover:rotate-3"
                />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-ink/70 transition-colors duration-500 group-hover:text-ink">{city}</h3>
                <p className="flex gap-2 text-sm font-medium">
                  {SERVICES.map((service, serviceIndex) => (
                    <span key={service} className="flex gap-2">
                      {serviceIndex > 0 && <span aria-hidden="true" className="transition-colors group-hover:text-primary">•</span>}
                      {service}
                    </span>
                  ))}
                </p>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
