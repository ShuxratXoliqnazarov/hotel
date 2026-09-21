import Button from '@/components/ui/Button'
import AccountShell from './components/AccountShell'
import PencilIcon from '@/assets/icons/pencil.svg?react'
import { profileFields } from '@/data/account'

export default function AccountPage() {
  return (
    <AccountShell>
      <h2 className="text-2xl leading-[29px] font-semibold">Account</h2>

      <div className="flex flex-col rounded-xl bg-white shadow-card">
        {profileFields.map((field) => (
          <div
            key={field.id}
            className="flex flex-col gap-4 p-6 transition-colors not-first:border-t not-first:border-ink/10 hover:bg-primary-soft/60 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-ink/60">{field.label}</span>
              <span className="font-medium">{field.value}</span>
            </div>

            <div className="flex gap-4">
              {field.multiple && (
                <Button variant="outline" size="sm" icon={PencilIcon}>
                  Add another email
                </Button>
              )}
              <Button variant="outline" size="sm" icon={PencilIcon}>
                Change
              </Button>
            </div>
          </div>
        ))}
      </div>
    </AccountShell>
  )
}
