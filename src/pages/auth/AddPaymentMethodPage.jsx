import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import TextField from '@/components/ui/TextField'
import VisaBadge from '@/components/ui/VisaBadge'
import AuthLayout from './components/AuthLayout'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'

const COUNTRIES = ['United States', 'United Kingdom', 'Uzbekistan', 'Turkey', 'UAE']

export default function AddPaymentMethodPage() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/account/payment-methods')
  }

  return (
    <AuthLayout
      title="Add a payment method"
      subtitle="Let’s get you all st up so you can access your personal account."
      back={{ to: '/signup', label: 'Back' }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <TextField
            name="number"
            label="Card Number"
            defaultValue="4321 4321 4321 4321"
            inputMode="numeric"
            trailing={<VisaBadge className="bg-[#1434cb]" />}
          />
          <div className="grid grid-cols-2 gap-6">
            <TextField name="expires" label="Exp. Date" defaultValue="02/27" />
            <TextField name="cvc" label="CVC" defaultValue="123" inputMode="numeric" />
          </div>
          <TextField name="name" label="Name on Card" defaultValue="John Doe" />
          <TextField
            as="select"
            name="country"
            label="Country or Region"
            options={COUNTRIES}
            trailing={<ChevronDownIcon className="size-5" />}
          />
        </div>

        <Checkbox name="save" label="Securely save my information for 1-click checkout" defaultChecked />

        <div className="flex flex-col gap-4">
          <Button type="submit" className="w-full text-base">
            Add payment method
          </Button>
          <p className="text-center text-xs text-ink/75">
            By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment
            and future payments in accordance with their terms. You can always cancel your subscription.
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}
