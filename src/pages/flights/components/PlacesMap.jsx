import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import worldMap from '@/assets/images/flights/world-map.svg'
import { boardingPasses } from '@/data/flights'

// Размер «холста» карты в макете — все координаты считаем в процентах от него
const MAP_W = 1440
const MAP_H = 486
const CARD_W = 141
const CARD_H = 48

const toPercent = ({ x, y }) => ({ left: `${(x / MAP_W) * 100}%`, top: `${(y / MAP_H) * 100}%` })

/** Изогнутая стрелка от точки на карте к карточке посадочного. */
function arrowPath({ card, dot }) {
  const cardBelow = card.y > dot.y
  const end = {
    x: card.x + CARD_W * (dot.x < card.x + CARD_W / 2 ? 0.3 : 0.6),
    y: cardBelow ? card.y - 4 : card.y + CARD_H + 4,
  }
  const control = { x: cardBelow ? end.x : dot.x + (end.x - dot.x) * 0.9, y: dot.y }
  return `M${dot.x} ${dot.y} Q${control.x} ${control.y} ${end.x} ${end.y}`
}

export default function PlacesMap() {
  return (
    <section className="flex flex-col gap-6">
      <SectionHeader
        className="container-page"
        title="Let's go places together"
        subtitle="Discover the latest offers and news and start planning your next trip with us."
      />

      <Reveal variant="zoom" className="relative aspect-[1440/486] overflow-hidden bg-primary">
        <img src={worldMap} alt="" className="absolute top-[-4%] left-[7.2%] w-[85.5%]" />

        <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="absolute inset-0 size-full" aria-hidden="true">
          <defs>
            <marker id="map-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M1 1L6 5L1 9" fill="none" stroke="#112211" strokeWidth="1.5" strokeLinecap="round" />
            </marker>
          </defs>
          {boardingPasses.map((pass, index) => (
            <g key={pass.id} style={{ '--delay': `${500 + index * 250}ms` }}>
              {/* линия «рисуется» от точки к карточке */}
              <path
                d={arrowPath(pass)}
                pathLength="1"
                className="draw-path"
                fill="none"
                stroke="#112211"
                strokeWidth="1.5"
                markerEnd="url(#map-arrow)"
              />
              {/* расходящиеся круги вокруг точки */}
              <circle
                cx={pass.dot.x}
                cy={pass.dot.y}
                r="4"
                fill="#fff"
                style={{ animationDelay: `${index * 400}ms` }}
                className="origin-center animate-pulse-dot [transform-box:fill-box]"
              />
              <circle cx={pass.dot.x} cy={pass.dot.y} r="4" fill="#fff" />
            </g>
          ))}
        </svg>

        {boardingPasses.map((pass, index) => (
          <div
            key={pass.id}
            style={{ ...toPercent(pass.card), animationDelay: `${index * 700}ms` }}
            className="absolute hidden animate-float hover:z-10 md:block"
          >
            <div className="flex cursor-pointer items-center gap-2 rounded bg-white py-1 pr-2 pl-1 transition-all duration-500 hover:scale-110 hover:shadow-hover">
              <img src={pass.image} alt="" className="size-10 rounded object-cover" />
              <div className="flex flex-col">
                <span className="font-heading text-[10px] leading-[13px]">James Doe</span>
                <span className="text-[8px] leading-[10px]">Boarding Pass N’123</span>
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
