import { useState } from 'react'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'

/** Сворачиваемый блок фильтра с заголовком и шевроном. */
export default function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true)

  return (
    <section className="flex flex-col border-t border-ink/25 pt-8 first:border-t-0 first:pt-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex items-center justify-between font-semibold transition-colors hover:text-primary-dark"
      >
        {title}
        <ChevronDownIcon className={`size-6 transition-transform duration-700 ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* плавное раскрытие через grid-rows 0fr → 1fr */}
      <div className={`grid transition-all duration-700 ease-smooth ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="-mx-2 -mb-2 overflow-hidden px-2 pb-2">
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </section>
  )
}
