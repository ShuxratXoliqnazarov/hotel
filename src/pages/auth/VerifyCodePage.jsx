import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import PasswordField from '@/components/ui/PasswordField'
import AuthLayout from './components/AuthLayout'

export default function VerifyCodePage() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/forgot-password/reset')
  }

  return (
    <AuthLayout
      title="Verify code"
      subtitle="An authentication code has been sent to your email."
      back={{ to: '/login', label: 'Back to login' }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <PasswordField label="Enter Code" defaultVisible required />
          <p className="text-sm">
            Didn’t receive a code?{' '}
            <button type="button" className="font-medium text-accent hover:underline">
              Resend
            </button>
          </p>
        </div>

        <Button type="submit" className="w-full text-base">
          Verify
        </Button>
      </form>
    </AuthLayout>
  )
}
