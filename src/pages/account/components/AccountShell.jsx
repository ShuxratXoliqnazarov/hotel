import { NavLink } from 'react-router-dom'
import Reveal from '@/components/ui/Reveal'
import CloudUploadIcon from '@/assets/icons/cloud-upload.svg?react'
import PencilIcon from '@/assets/icons/pencil.svg?react'
import avatar from '@/assets/images/common/avatar.jpg'
import { useAuth } from '@/context/authContext'

const TABS = [
  { label: 'Account', to: '/account' },
  { label: 'Tickets/Bookings', to: '/account/history' },
  { label: 'Payment methods', to: '/account/payment-methods' },
]

// Диагональные полосы обложки из макета
const COVER =
  'linear-gradient(115deg, #123b4f 0%, #123b4f 20%, #ef6c25 20%, #ef6c25 40%, #f8952b 40%, #f8952b 58%, #fbb418 58%, #fdc500 100%)'

/** Обложка, аватар и вкладки — общая шапка для всех страниц аккаунта. */
export default function AccountShell({ children }) {
  const { user } = useAuth()

  return (
    <div className="container-page flex flex-col gap-8 pt-12 pb-[120px]">
      <header className="flex flex-col items-center">
        <div
          style={{ background: COVER }}
          className="relative h-[220px] w-full overflow-hidden rounded-[20px] md:h-[350px]"
        >
          <button
            type="button"
            className="shine absolute right-6 bottom-6 flex items-center gap-2 rounded bg-primary px-4 py-2 text-xs font-medium transition-all hover:-translate-y-0.5 hover:shadow-glow"
          >
            <CloudUploadIcon className="size-4" />
            Upload new cover
          </button>
        </div>

        <div className="relative -mt-[76px]">
          <img
            src={avatar}
            alt={`${user.firstName} ${user.lastName}`}
            className="size-[152px] rounded-full border-4 border-white object-cover object-[28%_0%] shadow-card-lg"
          />
          <button
            type="button"
            aria-label="Change photo"
            className="absolute right-2 bottom-2 grid size-8 place-items-center rounded-full bg-primary text-ink transition-transform hover:scale-110"
          >
            <PencilIcon className="size-4" />
          </button>
        </div>

        <h1 className="mt-4 text-xl leading-6 font-semibold">
          {user.firstName} {user.lastName}
        </h1>
        <p className="mt-1 text-sm text-ink/60">{user.email}</p>
      </header>

      <nav className="grid grid-cols-1 overflow-hidden rounded-xl bg-white shadow-card sm:grid-cols-3">
        {TABS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `relative flex h-16 items-center justify-center px-4 text-center font-medium transition-colors not-first:border-t not-first:border-divider sm:not-first:border-t-0 sm:not-first:border-l ${
                isActive ? 'text-ink' : 'text-ink/60 hover:text-ink'
              } after:absolute after:inset-x-6 after:bottom-0 after:h-1 after:origin-left after:bg-primary after:transition-transform ${
                isActive ? 'after:scale-x-100' : 'after:scale-x-0'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <Reveal className="flex flex-col gap-6">{children}</Reveal>
    </div>
  )
}
