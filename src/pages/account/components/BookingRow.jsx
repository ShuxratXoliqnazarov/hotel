import Button from '@/components/ui/Button'
import ChevronRightIcon from '@/assets/icons/chevron-right.svg?react'

/**
 * Строка брони: слева логотип, посередине маршрут и детали, справа кнопки.
 * route — две точки (вылет/прилёт или заезд/выезд), details — подписи с значениями.
 */
export default function BookingRow({ logo, logoAlt, route, details, to, index = 0 }) {
  return (
    <article
      style={{ animationDelay: `${index * 120}ms` }}
      className="group flex animate-fade-up flex-col gap-6 rounded-xl bg-white p-4 shadow-card transition-[translate,box-shadow] hover:-translate-y-1 hover:shadow-hover lg:flex-row lg:items-center"
    >
      <img
        src={logo}
        alt={logoAlt}
        className="h-14 w-20 shrink-0 self-start rounded-lg object-contain transition-transform group-hover:scale-110 lg:self-center"
      />

      <div className="flex flex-1 flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex items-center gap-4">
          {route.map((point, pointIndex) => (
            <div key={pointIndex} className="flex items-center gap-4">
              {pointIndex > 0 && <span className="h-px w-6 bg-ink/30" aria-hidden="true" />}
              <div className="flex flex-col gap-1">
                <span className="text-xs text-ink/60">{point.label}</span>
                <span className="font-semibold">{point.value}</span>
              </div>
            </div>
          ))}
        </div>

        <ul className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {details.map(({ id, label, value, icon: Icon }) => (
            <li key={id} className="flex items-center gap-2">
              <span className="grid size-6 shrink-0 place-items-center rounded bg-primary-soft">
                <Icon className="size-3.5 text-primary" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-ink/60">{label}</span>
                <span className="text-sm font-semibold">{value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2">
        <Button to={to} size="sm" className="px-5 font-medium">
          Download Ticket
        </Button>
        <Button to={to} variant="outline" size="sm" aria-label="Открыть бронь" className="w-10 px-0">
          <ChevronRightIcon className="size-4" />
        </Button>
      </div>
    </article>
  )
}
