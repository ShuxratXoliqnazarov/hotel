import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import AccountShell from './components/AccountShell'
import ProfileField from './components/ProfileField'
import PencilIcon from '@/assets/icons/pencil.svg?react'
import { useAuth } from '@/context/authContext'

export default function AccountPage() {
  const { user, updateUser, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleName = (value) => {
    const [firstName, ...rest] = value.split(' ')
    updateUser({ firstName, lastName: rest.join(' ') })
  }

  return (
    <AccountShell>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl leading-[29px] font-semibold">Account</h2>
        <Button variant="outline" size="sm" onClick={handleLogout}>
          Log out
        </Button>
      </div>

      <div className="flex flex-col rounded-xl bg-white shadow-card">
        <ProfileField label="Name" value={`${user.firstName} ${user.lastName}`.trim()} onSave={handleName} />
        <ProfileField
          label="Email"
          type="email"
          value={user.email}
          onSave={(email) => updateUser({ email })}
          extraAction={
            <Button variant="outline" size="sm" icon={PencilIcon}>
              Add another email
            </Button>
          }
        />
        <ProfileField
          label="Password"
          type="password"
          value={'•'.repeat(user.password.length)}
          onSave={(password) => updateUser({ password })}
        />
        <ProfileField label="Phone number" type="tel" value={user.phone} onSave={(phone) => updateUser({ phone })} />
        <ProfileField
          label="Address"
          value={user.address}
          placeholder="St 32 main downtown, Los Angeles"
          onSave={(address) => updateUser({ address })}
        />
        <ProfileField
          label="Date of birth"
          value={user.birthDate}
          placeholder="01-01-1992"
          onSave={(birthDate) => updateUser({ birthDate })}
        />
      </div>
    </AccountShell>
  )
}
