import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import TextField from '@/components/ui/TextField'
import FacebookIcon from '@/assets/icons/facebook-color.svg?react'
import GoogleIcon from '@/assets/icons/google.svg?react'
import AppleIcon from '@/assets/icons/apple.svg?react'
import MailIcon from '@/assets/icons/mail.svg?react'

const SOCIALS = [
  { label: 'Continue with Facebook', icon: FacebookIcon },
  { label: 'Continue with Google', icon: GoogleIcon },
  { label: 'Continue with Apple', icon: AppleIcon },
]

/** «Login or Sign up to book». onLogin — любой способ входа (фейковая авторизация). */
export default function BookingLogin({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin()
  }

  return (
    <Reveal as="section" delay={200} className="flex flex-col gap-6 rounded-xl bg-white p-6 shadow-card">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="font-heading text-xl leading-[25px]">Login or Sign up to book</h2>
        <TextField type="tel" placeholder="Phone Number" aria-label="Phone Number" />
        <p className="text-sm">
          We’ll call or text you to confirm your number. Standard message and data rates apply.{' '}
          <a href="#" className="font-medium">
            Privacy Policy
          </a>
        </p>
        <Button type="submit" className="w-full text-base">
          Continue
        </Button>
      </form>

      <div className="flex items-center gap-6 font-medium">
        <span className="h-px flex-1 bg-ink/25" />
        Or
        <span className="h-px flex-1 bg-ink/25" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4">
          {SOCIALS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              onClick={onLogin}
              className="group grid h-14 place-items-center rounded border border-primary transition-all duration-500 hover:-translate-y-1 hover:bg-primary-soft hover:shadow-glow active:scale-95"
            >
              <Icon className="size-6 transition-transform duration-700 group-hover:scale-110" />
            </button>
          ))}
        </div>
        <Button variant="outline" size="lg" icon={MailIcon} onClick={onLogin} className="w-full gap-4 text-base [&>svg]:size-6">
          Continue with email
        </Button>
      </div>
    </Reveal>
  )
}
