import { useState } from 'react'
import Radio from '@/components/ui/Radio'
import Reveal from '@/components/ui/Reveal'

const OPTIONS = [
  { id: 'full', title: 'Pay in full', text: 'Pay the total and you are all set' },
  {
    id: 'part',
    title: 'Pay part now, part later',
    text: 'Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.',
    more: true,
  },
]

/** Выбор способа оплаты: сразу целиком или частями. */
export default function PaymentOptions() {
  const [selected, setSelected] = useState('full')

  return (
    <Reveal as="section" delay={100} className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-card">
      {OPTIONS.map((option) => {
        const checked = option.id === selected
        return (
          <label
            key={option.id}
            className={`flex cursor-pointer items-center justify-between gap-6 rounded-xl p-4 transition-all duration-700 ease-smooth ${
              checked ? 'bg-primary shadow-glow' : 'hover:translate-x-1 hover:bg-primary-soft'
            }`}
          >
            <div className="flex max-w-[632px] flex-col gap-2">
              <p className="font-heading leading-5">{option.title}</p>
              <p className="text-sm">{option.text}</p>
              {option.more && <span className="mt-1 text-xs font-medium underline">More info</span>}
            </div>
            <Radio name="payment-option" value={option.id} label={option.title} checked={checked} onChange={() => setSelected(option.id)} />
          </label>
        )
      })}
    </Reveal>
  )
}
