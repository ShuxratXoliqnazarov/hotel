import SplitText from '@/components/ui/SplitText'
import { useParallax } from '@/hooks/useParallax'
import heroImage from '@/assets/images/landing/promo-hotels.jpg'

/** Hero страницы поиска отелей: фото с параллаксом и заголовок по словам. */
export default function HotelSearchHero() {
  const imageRef = useParallax(0.35)
  const textRef = useParallax(-0.15, { fade: true })

  return (
    <section className="relative h-[460px] overflow-hidden md:h-[537px]">
      <div ref={imageRef} className="absolute inset-x-0 -top-[40%] bottom-0 will-change-transform">
        <img src={heroImage} alt="" className="size-full animate-ken-burns object-cover object-[50%_62%]" />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-[#00234d]/63 to-[#00234d]/0" />

      <div ref={textRef} className="container-page relative pt-20 text-white will-change-transform lg:pl-[126px]">
        <div className="flex max-w-[440px] flex-col gap-2">
          <SplitText
            as="h1"
            text="Find your next stay, we’ll do the rest"
            delay={200}
            className="font-heading text-4xl md:text-[45px] md:leading-[57px]"
          />
          <p className="animate-fade-up text-lg font-medium [animation-delay:900ms] md:text-xl">
            Hand-picked hotels for every budget
          </p>
        </div>
      </div>
    </section>
  )
}
