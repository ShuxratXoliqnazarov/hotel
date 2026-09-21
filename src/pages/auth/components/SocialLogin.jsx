import FacebookIcon from '@/assets/icons/facebook-color.svg?react'
import GoogleIcon from '@/assets/icons/google.svg?react'
import AppleIcon from '@/assets/icons/apple.svg?react'

const PROVIDERS = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Google', icon: GoogleIcon },
  { label: 'Apple', icon: AppleIcon },
]

/** Разделитель «Or login with» и три кнопки соцсетей. */
export default function SocialLogin({ label = 'Or login with' }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 text-xs text-ink/60">
        <span className="h-px flex-1 bg-ink/15" />
        {label}
        <span className="h-px flex-1 bg-ink/15" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {PROVIDERS.map(({ label: provider, icon: Icon }) => (
          <button
            key={provider}
            type="button"
            aria-label={`Continue with ${provider}`}
            className="group grid h-12 place-items-center rounded border border-ink/15 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-glow active:scale-95"
          >
            <Icon className="size-5 transition-transform group-hover:scale-110" />
          </button>
        ))}
      </div>
    </div>
  )
}
