import { Link } from 'react-router-dom'

// shine — блик по кнопке при наведении (см. index.css)
const VARIANTS = {
  primary: 'shine bg-primary text-ink hover:-translate-y-0.5 hover:shadow-glow',
  dark: 'shine bg-ink text-white hover:-translate-y-0.5 hover:shadow-hover',
  white: 'shine bg-white text-ink hover:-translate-y-0.5 hover:shadow-hover',
  outline: 'border border-primary text-ink hover:-translate-y-0.5 hover:bg-primary hover:shadow-glow',
  ghost: 'text-ink hover:text-ink/60 [&>svg]:transition-transform [&>svg]:duration-700 [&:hover>svg]:rotate-90',
}

const SIZES = {
  sm: 'h-10 px-4',
  md: 'h-12 px-4',
  lg: 'h-14 px-4',
}

/**
 * Универсальная кнопка из UI-кита.
 * Если передан `to` — рендерится как ссылка react-router.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  icon: Icon,
  className = '',
  children,
  ...props
}) {
  const classes = [
    'group/button inline-flex items-center justify-center gap-1 rounded text-sm font-medium transition-all duration-500 ease-smooth active:scale-95',
    VARIANTS[variant],
    SIZES[size],
    className,
  ].join(' ')

  const content = (
    <>
      {Icon && <Icon className="size-4 shrink-0" />}
      {children}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
