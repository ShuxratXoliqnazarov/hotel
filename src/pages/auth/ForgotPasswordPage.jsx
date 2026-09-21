import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import TextField from '@/components/ui/TextField'
import AuthLayout from './components/AuthLayout'
import SocialLogin from './components/SocialLogin'

export default function ForgotPasswordPage() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/forgot-password/verify')
  }

  return (
    <AuthLayout
      title="Forgot your password?"
      subtitle="Don’t worry, happens to all of us. Enter your email below to recover your password"
      back={{ to: '/login', label: 'Back to login' }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <TextField label="Email" type="email" defaultValue="john.doe@gmail.com" />
        <Button type="submit" className="w-full text-base">
          Submit
        </Button>
      </form>

      <SocialLogin />
    </AuthLayout>
  )
}
