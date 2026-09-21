import { Link, useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import TextField from '@/components/ui/TextField'
import PasswordField from '@/components/ui/PasswordField'
import AuthLayout from './components/AuthLayout'
import SocialLogin from './components/SocialLogin'

export default function SignUpPage() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/signup/payment')
  }

  return (
    <AuthLayout title="Sign up" subtitle="Let’s get you all st up so you can access your personal account.">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <TextField label="First Name" required />
            <TextField label="Last Name" required />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <TextField label="Email" type="email" required />
            <TextField label="Phone Number" type="tel" required />
          </div>
          <PasswordField required />
          <PasswordField label="Confirm Password" required />
        </div>

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
