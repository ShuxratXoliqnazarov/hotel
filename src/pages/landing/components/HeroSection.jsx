import Header from '@/components/layout/Header'
import SplitText from '@/components/ui/SplitText'
import { useParallax } from '@/hooks/useParallax'
import heroImage from '@/assets/images/landing/hero.jpg'

export default function HeroSection() {
  // фон уезжает медленнее страницы, а текст — поднимается и гаснет
  const imageRef = useParallax(0.35)
  const textRef = useParallax(-0.2, { fade: true })

  return (
    <section className="relative mx-2.5 mt-2.5 h-[520px] overflow-hidden rounded-3xl md:mx-[30px] md:mt-[30px] md:h-[599px]">
      <div ref={imageRef} className="absolute inset-x-0 -top-[40%] bottom-0 will-change-transform">
        {/* медленный «наезд» камеры */}
        <img src={heroImage} alt="" className="size-full animate-ken-burns object-cover object-[100%_35%]" />
      </div>
      <div className="absolute inset-x-0 top-0 h-[581px] rounded-b-3xl bg-linear-to-b from-black/0 to-black/60" />

      <div className="relative">
        <Header transparent />

        <div ref={textRef} className="mt-14 flex flex-col items-center gap-4 px-4 text-center text-white will-change-transform">
          <div className="flex flex-col gap-1">
            <SplitText
              as="p"
              text="Helping Others"
              delay={300}
              className="font-heading text-2xl md:text-[45px] md:leading-[57px]"
            />
            <h1 className="animate-blur-in font-heading text-5xl uppercase [animation-delay:600ms] md:text-[80px] md:leading-[101px]">
              Live &amp; Travel
            </h1>
          </div>
          <p className="animate-fade-up text-lg font-semibold [animation-delay:1200ms] md:text-xl">
            Special offers to suit your plan
          </p>
        </div>
      </div>
    </section>
  )
}
