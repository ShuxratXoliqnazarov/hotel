import { useState } from 'react'
import VisaBadge from '@/components/ui/VisaBadge'
import AccountShell from './components/AccountShell'
import AddCardModal from '@/pages/flights/components/AddCardModal'
import AddCircleIcon from '@/assets/icons/add-circle.svg?react'
import TrashIcon from '@/assets/icons/trash.svg?react'
import { paymentCards } from '@/data/account'

export default function AccountPaymentMethodsPage() {
  const [cards, setCards] = useState(paymentCards)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddCard = ({ number = '', expires = '02/27' }) => {
    const digits = number.replace(/\D/g, '')
    setCards((prev) => [
      ...prev,
      { id: `card-${prev.length + 1}`, number: '**** **** ****', last4: digits.slice(-4) || '0000', validThru: expires },
    ])
    setIsModalOpen(false)
  }

  const handleRemove = (id) => setCards((prev) => prev.filter((card) => card.id !== id))

  return (
    <AccountShell>
      <h2 className="text-2xl leading-[29px] font-semibold">Payment methods</h2>

      <div className="rounded-xl bg-white p-6 shadow-card">
        <div className="flex flex-wrap gap-6">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group relative flex h-[190px] w-full max-w-[415px] flex-col justify-between rounded-xl bg-primary p-4 transition-[translate,box-shadow] hover:-translate-y-1 hover:shadow-glow sm:w-[415px]"
            >
              <button
                type="button"
                onClick={() => handleRemove(card.id)}
                aria-label="Удалить карту"
                className="absolute top-4 right-4 grid size-8 place-items-center rounded transition-colors hover:bg-white/40"
              >
                <TrashIcon className="size-5" />
              </button>

              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium tracking-[0.2em] text-ink/70">{card.number}</span>
                <span className="text-2xl leading-[29px] font-semibold tracking-[0.1em]">{card.last4}</span>
              </div>

              <div className="flex items-end justify-between">
                <span className="flex flex-col text-xs">
                  <span className="text-ink/60">Valid Thru</span>
                  <span className="font-semibold">{card.validThru}</span>
                </span>
                <VisaBadge className="bg-[#1434cb] px-2 py-1 text-[11px]" />
              </div>
            </article>
          ))}

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group flex h-[190px] w-full max-w-[415px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-primary transition-all hover:border-solid hover:bg-primary-soft hover:shadow-glow sm:w-[415px]"
          >
            <AddCircleIcon className="size-12 text-primary transition-transform group-hover:scale-110 group-hover:rotate-180" />
            <span className="text-xs font-medium text-ink/75">Add a new card</span>
          </button>
        </div>
      </div>

      {isModalOpen && <AddCardModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddCard} />}
    </AccountShell>
  )
}
