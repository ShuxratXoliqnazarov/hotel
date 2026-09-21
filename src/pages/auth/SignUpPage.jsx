import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import TextField from '@/components/ui/TextField'
import PasswordField from '@/components/ui/PasswordField'
import AuthLayout from './components/AuthLayout'
import SocialLogin from './components/SocialLogin'
import FormError from './components/FormError'
import { useAuth } from '@/context/authContext'

export default function SignUpPage() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = Object.fromEntries(new FormData(event.currentTarget))

    if (form.password !== form.confirmPassword) {
      setError('Пароли не совпадают')
      return
    }

    const result = register(form)
    if (!result.ok) {
      setError(result.error)
      return
    }

    navigate('/signup/payment')
  }

  return (
    <AuthLayout title="Sign up" subtitle="Let’s get you all st up so you can access your personal account.">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <TextField name="firstName" label="First Name" required />
            <TextField name="lastName" label="Last Name" required />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <TextField name="email" label="Email" type="email" required />
            <TextField name="phone" label="Phone Number" type="tel" required />
          </div>
          <PasswordField name="password" minLength={6} required />
          <PasswordField name="confirmPassword" label="Confirm Password" minLength={6} required />
        </div>

        <FormError message={error} />

        <Checkbox
          required
          label={
            <>
              I agree to all the{' '}
              <a href="#" className="text-accent hover:underline">
                Terms
              </a>{' '}
              and{' '}
              <a href="#" className="text-accent hover:underline">
                Privacy Policies
              </a>
            </>
          }
        />

        <div className="flex flex-col gap-4">
          <Button type="submit" className="w-full text-base">
            Create account
          </Button>
          <p className="text-center text-sm">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-accent hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>

      <SocialLogin label="Or Sign up with" />
    </AuthLayout>
  )
}
