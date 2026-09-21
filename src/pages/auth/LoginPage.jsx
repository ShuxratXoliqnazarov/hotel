import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import TextField from '@/components/ui/TextField'
import PasswordField from '@/components/ui/PasswordField'
import AuthLayout from './components/AuthLayout'
import SocialLogin from './components/SocialLogin'
import FormError from './components/FormError'
import { useAuth } from '@/context/authContext'

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = Object.fromEntries(new FormData(event.currentTarget))
    const result = login(form)

    if (!result.ok) {
      setError(result.error)
      return
    }

    navigate(location.state?.from ?? '/account', { replace: true })
  }

  return (
    <AuthLayout title="Login" subtitle="Login to access your Golobe account">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <TextField name="email" label="Email" type="email" required />
          <PasswordField name="password" required />
        </div>

        <FormError message={error} />

        <div className="flex items-center justify-between gap-4">
          <Checkbox label="Remember me" />
          <Link to="/forgot-password" className="text-sm font-medium text-accent hover:underline">
            Forgot Password
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <Button type="submit" className="w-full text-base">
            Login
          </Button>
          <p className="text-center text-sm">
            Don’t have an account?{' '}
            <Link to="/signup" className="font-medium text-accent hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>

      <SocialLogin />
    </AuthLayout>
  )
}
