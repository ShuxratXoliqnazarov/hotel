import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import Button from '@/components/ui/Button'
import AirplaneIcon from '@/assets/icons/airplane.svg?react'
import BedIcon from '@/assets/icons/bed.svg?react'
import HeartIcon from '@/assets/icons/heart.svg?react'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'
import avatar from '@/assets/images/common/avatar.jpg'

const NAV_ITEMS = [
  { label: 'Find Flight', to: '/flights', icon: AirplaneIcon },
  { label: 'Find Stays', to: '/hotels', icon: BedIcon },
]

/**
 * Шапка сайта.
 * - transparent: прозрачная, белый текст (поверх hero на лендинге)
 * - loggedIn: справа «Favourites» и аватар вместо Login / Sign up
 */
export default function Header({ transparent = false, loggedIn = false }) {
  const textColor = transparent ? 'text-white' : 'text-ink'

  return (
    <header className={`animate-fade-down ${transparent ? '' : 'relative z-10 bg-white shadow-card'}`}>
      <div
        className={`flex items-center justify-between gap-4 ${
          transparent ? 'h-24 px-4 md:px-8' : `container-page ${loggedIn ? 'h-[87px]' : 'h-[90px]'}`
        } ${textColor}`}
      >
        <nav className="flex h-full flex-1 items-center gap-4 md:gap-8">
          {NAV_ITEMS.map(({ label, to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `group relative flex h-full items-center gap-1 text-sm font-semibold after:absolute after:inset-x-0 after:origin-left after:transition-transform after:duration-700 after:ease-smooth ${
                  transparent ? 'after:bottom-6 after:h-0.5 after:bg-white' : 'after:bottom-0 after:h-[5px] after:bg-primary'
                } ${isActive && !transparent ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`
              }
            >
              <Icon className="size-6 transition-transform duration-700 group-hover:-translate-y-0.5 group-hover:rotate-[-8deg]" />
              <span className="hidden sm:inline">{label}</span>
            </NavLink>
          ))}
        </nav>

        <Logo light={transparent} className="shrink-0" />

        <div className="flex flex-1 items-center justify-end gap-4 md:gap-8">
          {loggedIn ? <UserMenu /> : <AuthButtons transparent={transparent} />}
        </div>
      </div>
    </header>
  )
}

function AuthButtons({ transparent }) {
  return (
    <>
      <Link to="/login" className="hidden text-sm font-semibold transition-opacity hover:opacity-60 sm:inline">
        Login
      </Link>
      <Button to="/signup" variant={transparent ? 'white' : 'dark'} className="rounded-lg px-6 font-semibold">
        Sign up
      </Button>
    </>
  )
}

function UserMenu() {
  return (
    <>
      <Link to="/favourites" className="group hidden items-center gap-4 text-sm font-semibold md:flex">
        <span className="flex items-center gap-1">
          <HeartIcon className="size-6 transition-all duration-500 group-hover:scale-110 group-hover:text-accent" />
          Favourites
        </span>
        <span aria-hidden="true">|</span>
      </Link>

      <Link to="/account" className="group flex items-center gap-1 text-sm font-semibold">
        <span className="relative">
          <img
            src={avatar}
            alt=""
            className="size-[45px] rounded-full object-cover object-[28%_0%] ring-0 ring-primary transition-all duration-500 group-hover:ring-4"
          />
          <span className="absolute -right-0.5 bottom-0 grid size-3.5 place-items-center rounded-full bg-ink text-white">
            <ChevronDownIcon className="size-2.5" />
          </span>
        </span>
        <span className="hidden sm:inline">John D.</span>
      </Link>
    </>
  )
}
