import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import Tilt from '@/components/ui/Tilt'
import PaperPlaneIcon from '@/assets/icons/paper-plane.svg?react'
import { promos } from '@/data/landing'

/** Две большие карточки «Flights» и «Hotels». */
export default function PromoSection() {
  return (
    <section className="container-page grid gap-6 md:grid-cols-2">
      {promos.map((promo, index) => (
        <Reveal key={promo.title} variant={index === 0 ? 'left' : 'right'}>
          <Tilt
            as="article"
            max={5}
            className="group flex h-[480px] items-end justify-center overflow-hidden rounded-[20px] shadow-card hover:shadow-hover md:h-[559px]"
          >
            <img
              src={promo.image}
              alt=""
              style={{ objectPosition: promo.imagePosition }}
              className="absolute inset-0 size-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-110"
            />
            {/* при наведении градиент поднимается выше */}
            <div className="absolute inset-x-0 bottom-0 h-[280px] bg-linear-to-b from-black/0 to-[#121212]/75 transition-all duration-1000 group-hover:h-full" />

            <div className="relative flex max-w-[389px] flex-col items-center gap-4 px-4 pb-6 text-center text-white transition-transform duration-1000 ease-smooth group-hover:-translate-y-6">
              <div className="flex flex-col gap-2">
                <h2 className="font-heading text-[40px] leading-[51px] transition-[letter-spacing] duration-1000 group-hover:tracking-wider">
                  {promo.title}
                </h2>
                <p>{promo.text}</p>
              </div>
              <Button to={promo.to} icon={PaperPlaneIcon}>
                {promo.button}
              </Button>
            </div>
          </Tilt>
        </Reveal>
      ))}
    </section>
  )
}
