import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import PasswordField from '@/components/ui/PasswordField'
import AuthLayout from './components/AuthLayout'
import FormError from './components/FormError'

// Учебный проект: письма не отправляем, поэтому код фиксированный
const DEMO_CODE = '7789BM6X'

export default function VerifyCodePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState('')
  const email = location.state?.email

  const handleSubmit = (event) => {
    event.preventDefault()
    const { code } = Object.fromEntries(new FormData(event.currentTarget))

    if (code.trim().toUpperCase() !== DEMO_CODE) {
      setError(`Неверный код. Для демо подойдёт ${DEMO_CODE}`)
      return
    }

    navigate('/forgot-password/reset', { state: { email } })
  }

  if (!email) return <Navigate to="/forgot-password" replace />

  return (
    <AuthLayout
      title="Verify code"
      subtitle={`An authentication code has been sent to ${email}.`}
      back={{ to: '/login', label: 'Back to login' }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <PasswordField name="code" label="Enter Code" defaultVisible required />
          <p className="text-sm">
            Didn’t receive a code?{' '}
            <button type="button" className="font-medium text-accent hover:underline">
              Resend
            </button>
          </p>
        </div>

        <FormError message={error} />

        <Button type="submit" className="w-full text-base">
          Verify
        </Button>
      </form>
    </AuthLayout>
  )
}
