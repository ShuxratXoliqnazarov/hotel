import Radio from '@/components/ui/Radio'
import VisaBadge from '@/components/ui/VisaBadge'
import AddCircleIcon from '@/assets/icons/add-circle.svg?react'

/** Список сохранённых карт + кнопка «Add a new card». */
export default function PaymentCards({ cards, selectedId, onSelect, onAddCard }) {
  return (
    <section className="flex animate-scale-in flex-col gap-4 rounded-xl bg-white p-4 shadow-card">
      {cards.map((card) => {
        const checked = card.id === selectedId
        return (
          <label
            key={card.id}
            className={`flex h-20 cursor-pointer items-center justify-between rounded-xl px-4 transition-all duration-500 hover:shadow-glow ${
              checked ? 'bg-primary' : 'hover:bg-primary-soft'
            }`}
          >
            <span className="flex items-center gap-8">
              <span className="grid h-8 w-8 place-items-center">
                <VisaBadge />
              </span>
              <span className="flex items-center gap-2">
                <span className="font-heading">**** {card.last4}</span>
                <span className="text-sm">{card.expires}</span>
              </span>
            </span>
            <Radio name="saved-card" value={card.id} label={`Card ending ${card.last4}`} checked={checked} onChange={() => onSelect(card.id)} />
          </label>
        )
      })}

      <button
        type="button"
        onClick={onAddCard}
        className="group flex h-[189px] flex-col items-center justify-center gap-2.5 rounded-[15px] border-2 border-dashed border-primary transition-all duration-700 hover:border-solid hover:bg-primary-soft hover:shadow-glow"
      >
        <AddCircleIcon className="size-16 text-primary transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-180" />
        <span className="text-xs font-medium text-ink/75">Add a new card</span>
      </button>
    </section>
  )
}
