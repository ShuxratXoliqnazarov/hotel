import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@/assets/icons/chevron-right.svg?react'

/**
 * Хлебные крошки. items: [{ label, to? }]. Последний элемент — текущая страница.
 * muted — вариант, где ссылки тёмные, а текущий пункт бледный.
 */
export default function Breadcrumbs({ items, muted = false }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-medium">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        const linkColor = muted ? 'text-ink' : 'text-accent'
        const lastColor = muted ? 'text-ink/40' : 'text-ink/75'

        return (
          <Fragment key={item.label}>
            {isLast ? (
              <span className={lastColor}>{item.label}</span>
            ) : (
              <Link
                to={item.to ?? '#'}
                className={`${linkColor} bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-bottom-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_1px]`}
              >
                {item.label}
              </Link>
            )}
            {!isLast && <ChevronRightIcon className="size-4 text-ink/75" />}
          </Fragment>
        )
      })}
    </nav>
  )
}
