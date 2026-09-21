import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import PasswordField from '@/components/ui/PasswordField'
import AuthLayout from './components/AuthLayout'
import FormError from './components/FormError'
import { useAuth } from '@/context/authContext'

export default function SetPasswordPage() {
  const { resetPassword } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState('')
  const email = location.state?.email

  if (!email) return <Navigate to="/forgot-password" replace />

  const handleSubmit = (event) => {
    event.preventDefault()
    const { password, confirmPassword } = Object.fromEntries(new FormData(event.currentTarget))

    if (password !== confirmPassword) {
      setError('Пароли не совпадают')
      return
    }

    resetPassword(email, password)
    navigate('/login', { replace: true })
  }

  return (
    <AuthLayout
      title="Set a password"
      subtitle="Your previous password has been reseted. Please set a new password for your account."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <PasswordField name="password" label="Create Password" minLength={6} required />
          <PasswordField name="confirmPassword" label="Re-enter Password" minLength={6} required />
        </div>

        <FormError message={error} />

        <Button type="submit" className="w-full text-base">
          Set password
        </Button>
      </form>
    </AuthLayout>
  )
}
