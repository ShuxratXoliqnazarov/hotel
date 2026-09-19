/** Квадратная кнопка 48×48 с мятной обводкой (избранное, поделиться). */
export default function IconButton({ icon: Icon, label, active = false, className = '', ...props }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      className={`grid size-12 shrink-0 place-items-center rounded border border-primary transition-all duration-500 hover:-translate-y-0.5 hover:bg-primary-soft hover:shadow-glow active:scale-90 ${className}`}
      {...props}
    >
      {/* key заставляет иконку перемонтироваться и проиграть «pop» при переключении */}
      <Icon key={String(active)} className={`size-5 ${active ? 'animate-pop text-accent' : ''}`} />
    </button>
  )
}
