import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import PasswordField from '@/components/ui/PasswordField'
import AuthLayout from './components/AuthLayout'

export default function SetPasswordPage() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/login')
  }

  return (
    <AuthLayout
      title="Set a password"
      subtitle="Your previous password has been reseted. Please set a new password for your account."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <PasswordField label="Create Password" required />
          <PasswordField label="Re-enter Password" required />
        </div>

        <Button type="submit" className="w-full text-base">
          Set password
        </Button>
      </form>
    </AuthLayout>
  )
}
