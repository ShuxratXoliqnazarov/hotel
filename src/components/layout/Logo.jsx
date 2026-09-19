import { Link } from 'react-router-dom'

/**
 * Логотип golobe: «g» + «o»-орбита + «lobe».
 * light — белый текст (на тёмном фоне), accent — цвет «o» (на мятном фоне делаем тёмным).
 */
export default function Logo({ light = false, accent = '#8dd3bb', className = '' }) {
  return (
    <Link
      to="/"
      aria-label="Golobe — на главную"
      className={`group inline-flex items-center text-[30px] leading-none font-bold tracking-tight ${
        light ? 'text-white' : 'text-ink'
      } ${className}`}
    >
      <span>g</span>
      <svg viewBox="0 0 28 28" className="mx-[1px] mt-1 size-[0.9em] transition-transform duration-1000 group-hover:rotate-[200deg]" fill="none" stroke={accent} aria-hidden="true">
        <circle cx="14" cy="14" r="8" strokeWidth="4" />
        <ellipse cx="14" cy="14" rx="13" ry="4.5" strokeWidth="2.6" transform="rotate(-32 14 14)" />
      </svg>
      <span>lobe</span>
    </Link>
  )
}
