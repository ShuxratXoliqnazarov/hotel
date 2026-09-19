// Ползунок: мятный круг, при наведении увеличивается и светится
const THUMB =
  '[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary ' +
  '[&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-500 [&::-webkit-slider-thumb:hover]:scale-110 [&::-webkit-slider-thumb:hover]:shadow-[0_0_0_6px_rgb(141_211_187/0.3)] [&::-webkit-slider-thumb:active]:cursor-grabbing ' +
  '[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:size-6 [&::-moz-range-thumb]:cursor-grab [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-primary ' +
  '[&::-moz-range-thumb]:transition-all [&::-moz-range-thumb:hover]:scale-110 [&::-moz-range-thumb:hover]:shadow-[0_0_0_6px_rgb(141_211_187/0.3)]'

/**
 * Слайдер диапазона с двумя ползунками.
 * value — [min, max], format — как подписывать значения под слайдером.
 */
export default function RangeSlider({ min, max, step = 1, value, onChange, format = String, label }) {
  const [from, to] = value

  const handleFrom = (event) => onChange([Math.min(Number(event.target.value), to), to])
  const handleTo = (event) => onChange([from, Math.max(Number(event.target.value), from)])

  const inputClass = `pointer-events-none absolute inset-0 h-6 w-full appearance-none bg-transparent ${THUMB}`

  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-6">
        {/* трек между ползунками */}
        <div className="absolute inset-x-3 top-1/2 h-0.5 -translate-y-1/2 bg-ink" />
        <input type="range" min={min} max={max} step={step} value={from} onChange={handleFrom} aria-label={`${label} from`} className={inputClass} />
        <input type="range" min={min} max={max} step={step} value={to} onChange={handleTo} aria-label={`${label} to`} className={inputClass} />
      </div>
      <div className="flex justify-between text-xs font-medium">
        <span>{format(from)}</span>
        <span>{format(to)}</span>
      </div>
    </div>
  )
}
