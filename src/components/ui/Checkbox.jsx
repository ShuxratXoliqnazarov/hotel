import CheckIcon from '@/assets/icons/check.svg?react'

/** Чекбокс 18×18 с подписью. Отмеченный — мятная заливка, галочка «выпрыгивает». */
export default function Checkbox({ label, className = '', labelClassName = 'text-sm font-medium', ...props }) {
  return (
    <label className={`group flex cursor-pointer items-center gap-2 ${className}`}>
      <span className="relative grid size-6 shrink-0 place-items-center">
        <input
          type="checkbox"
          className="peer size-[18px] cursor-pointer appearance-none rounded-sm border-2 border-ink transition-all duration-500 group-hover:scale-110 checked:border-primary checked:bg-primary"
          {...props}
        />
        <CheckIcon className="pointer-events-none absolute size-3.5 scale-0 text-white transition-transform duration-500 peer-checked:scale-100" />
      </span>
      {label && (
        <span className={`transition-transform duration-500 group-hover:translate-x-0.5 ${labelClassName}`}>{label}</span>
      )}
    </label>
  )
}
