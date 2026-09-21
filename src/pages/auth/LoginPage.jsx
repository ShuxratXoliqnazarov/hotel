import { Link, useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import TextField from '@/components/ui/TextField'
import PasswordField from '@/components/ui/PasswordField'
import AuthLayout from './components/AuthLayout'
import SocialLogin from './components/SocialLogin'

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/account')
  }

  return (
    <AuthLayout title="Login" subtitle="Login to access your Golobe account">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <TextField label="Email" type="email" defaultValue="john.doe@gmail.com" />
          <PasswordField defaultValue="password123456" />
        </div>

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
