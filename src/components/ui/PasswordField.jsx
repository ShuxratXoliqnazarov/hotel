import { useState } from 'react'
import TextField from './TextField'
import EyeIcon from '@/assets/icons/eye.svg?react'
import EyeOffIcon from '@/assets/icons/eye-off.svg?react'

/** Поле пароля с переключателем видимости. */
export default function PasswordField({ label = 'Password', defaultVisible = false, ...props }) {
  const [visible, setVisible] = useState(defaultVisible)
  const Icon = visible ? EyeOffIcon : EyeIcon

  return (
    <div className="relative">
      <TextField label={label} type={visible ? 'text' : 'password'} inputClassName="pr-12" {...props} />
      <button
        type="button"
        onClick={() => setVisible((prev) => !prev)}
        aria-label={visible ? 'Скрыть пароль' : 'Показать пароль'}
        className="absolute top-1/2 right-3 grid size-8 -translate-y-1/2 place-items-center rounded-full transition-colors hover:bg-primary-soft"
      >
        <Icon className="size-5 text-ink/60" />
      </button>
    </div>
  )
}
