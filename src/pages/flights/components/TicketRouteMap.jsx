import Reveal from '@/components/ui/Reveal'
import AirplaneIcon from '@/assets/icons/airplane.svg?react'
import passImage from '@/assets/images/flights/pass-3.jpg'

const ROUTE = 'M52 211C90 110 220 70 323 98'

const POINTS = [
  { id: 'from', card: { left: 18, top: 222 }, dot: { x: 52, y: 211 } },
  { id: 'to', card: { left: 260, top: 51 }, dot: { x: 323, y: 98 } },
]

/** Мини-карта маршрута справа от посадочного. */
export default function TicketRouteMap({ passenger, boardingPass }) {
  return (
    <Reveal
      variant="right"
      delay={200}
      className="relative hidden h-[309px] overflow-hidden rounded-2xl border border-[#eaeaea] bg-white transition-shadow duration-700 hover:shadow-hover lg:block lg:flex-1"
    >
      <svg viewBox="0 0 375 309" className="absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <pattern id="route-dots" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.3" fill="#8dd3bb" />
          </pattern>
          <radialGradient id="route-fade">
            <stop offset="0" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="route-mask">
            <circle cx="60" cy="215" r="60" fill="url(#route-fade)" />
            <circle cx="320" cy="105" r="60" fill="url(#route-fade)" />
          </mask>
        </defs>

        <rect width="375" height="309" fill="url(#route-dots)" mask="url(#route-mask)" opacity="0.6" />
        {/* пунктир «бежит» по маршруту */}
        <path d={ROUTE} fill="none" stroke="#8dd3bb" strokeWidth="2.6" strokeDasharray="8 6" className="animate-dash-flow" />
        {POINTS.map(({ id, dot }) => (
          <g key={id}>
            <circle cx={dot.x} cy={dot.y} r="3" fill="#8dd3bb" className="origin-center animate-pulse-dot [transform-box:fill-box]" />
            <circle cx={dot.x} cy={dot.y} r="3" fill="#8dd3bb" />
          </g>
        ))}

        {/* самолёт летит по маршруту и разворачивается по касательной */}
        <g>
          <AirplaneIcon x="-11" y="-11" width="22" height="22" className="text-ink" />
          <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" path={ROUTE} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.45 0 0.55 1" />
        </g>
      </svg>

      {POINTS.map(({ id, card }) => (
        <div
          key={id}
          style={card}
          className="absolute flex animate-float items-center gap-2 rounded bg-white py-1 pr-2 pl-1 shadow-[0_2px_7px_rgb(17_34_17/0.06)]"
        >
          <img src={passImage} alt="" className="size-6 rounded-sm object-cover" />
          <div className="flex flex-col">
            <span className="font-heading text-[8px] leading-[10px]">{passenger}</span>
            <span className="text-[4px] leading-[5px]">{boardingPass}</span>
          </div>
        </div>
      ))}
    </Reveal>
  )
}
