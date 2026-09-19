/** Маленький бейдж «VISA» (тёмный — в списке карт, синий — в поле номера карты). */
export default function VisaBadge({ className = 'bg-ink' }) {
  return (
    <span className={`inline-block rounded-[2px] px-1 py-px text-[8px] leading-[10px] font-extrabold text-white italic ${className}`}>
      VISA
    </span>
  )
}
