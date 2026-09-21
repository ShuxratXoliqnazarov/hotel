import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import TextField from '@/components/ui/TextField'
import AuthLayout from './components/AuthLayout'
import SocialLogin from './components/SocialLogin'
import FormError from './components/FormError'
import { useAuth } from '@/context/authContext'

export default function ForgotPasswordPage() {
  const { hasEmail } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const { email } = Object.fromEntries(new FormData(event.currentTarget))

    if (!hasEmail(email)) {
      setError('Аккаунт с такой почтой не найден')
      return
    }

    navigate('/forgot-password/verify', { state: { email } })
  }

  return (
    <AuthLayout
      title="Forgot your password?"
      subtitle="Don’t worry, happens to all of us. Enter your email below to recover your password"
      back={{ to: '/login', label: 'Back to login' }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <TextField name="email" label="Email" type="email" required />
        <FormError message={error} />
        <Button type="submit" className="w-full text-base">
          Submit
        </Button>
      </form>

      <SocialLogin />
    </AuthLayout>
  )
}
