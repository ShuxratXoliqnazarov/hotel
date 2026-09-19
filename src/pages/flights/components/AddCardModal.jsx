import { useEffect } from 'react'
import { lenis } from '@/app/smoothScroll'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import TextField from '@/components/ui/TextField'
import CloseIcon from '@/assets/icons/close.svg?react'
import VisaBadge from '@/components/ui/VisaBadge'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'

const COUNTRIES = ['United States', 'United Kingdom', 'Uzbekistan', 'Turkey', 'UAE']

/** Модалка «Add a new Card». Закрывается по крестику, Esc и клику по фону. */
export default function AddCardModal({ onClose, onSubmit }) {
  useEffect(() => {
    const handleKey = (event) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    lenis.stop() // пока модалка открыта, страница под ней не скроллится

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      lenis.start()
    }
  }, [onClose])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    onSubmit(data)
  }

  return (
    <div
      className="fixed inset-0 z-50 grid animate-fade-in place-items-center overflow-y-auto bg-black/50 p-4 backdrop-blur-[2px]"
      onClick={onClose}
      role="presentation"
      data-lenis-prevent
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-card-title"
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-[640px] animate-scale-in rounded-xl bg-white p-6 shadow-hover sm:p-16"
      >
        <button type="button" onClick={onClose} aria-label="Close" className="group absolute top-6 right-6 rounded-full p-1 transition-colors hover:bg-primary-soft sm:top-16 sm:right-16">
          <CloseIcon className="size-6 transition-transform duration-700 group-hover:rotate-90" />
        </button>

        <h2 id="add-card-title" className="mt-6 mb-12 font-heading text-3xl text-black sm:text-[40px] sm:leading-[51px]">
          Add a new Card
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
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
            <Checkbox name="save" label="Securely save my information for 1-click checkout" defaultChecked />
          </div>

          <div className="flex flex-col gap-4">
            <Button type="submit" className="w-full font-semibold">
              Add Card
            </Button>
            <p className="text-center text-xs text-ink/75">
              By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this
              payment and future payments in accordance with their terms. You can always cancel your subscription.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
