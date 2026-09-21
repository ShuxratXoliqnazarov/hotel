import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '@/components/layout/Logo'
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg?react'
import { authSlides } from '@/data/auth'

/**
 * Каркас экранов входа: слева форма, справа фото-слайдер.
 * back — ссылка «Back to login» над заголовком.
 */
export default function AuthLayout({ title, subtitle, back, children }) {
  return (
    <div className="flex min-h-screen flex-col gap-10 px-6 py-8 lg:flex-row lg:gap-16 lg:px-[72px]">
      <div className="flex w-full flex-col gap-10 lg:max-w-[556px]">
        <Logo />

        <div className="flex animate-fade-up flex-col gap-8">
          <div className="flex flex-col gap-3">
            {back && (
              <Link
                to={back.to}
                className="group flex w-fit items-center gap-1 text-sm font-medium text-ink/75 transition-colors hover:text-ink"
              >
                <ChevronLeftIcon className="size-4 transition-transform group-hover:-translate-x-1" />
                {back.label}
              </Link>
            )}
            <h1 className="font-heading text-3xl md:text-[40px] md:leading-[51px]">{title}</h1>
            {subtitle && <p className="max-w-[420px] text-sm text-ink/75">{subtitle}</p>}
          </div>

          {children}
        </div>
      </div>

      <AuthSlider />
    </div>
  )
}

function AuthSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % authSlides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative hidden flex-1 overflow-hidden rounded-[20px] lg:block">
      {authSlides.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.alt}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${
            index === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
        {authSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Фото ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-700 ${
              index === active ? 'w-8 bg-primary' : 'w-2 bg-white/70 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
