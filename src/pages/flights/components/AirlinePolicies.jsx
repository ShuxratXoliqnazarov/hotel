import Reveal from '@/components/ui/Reveal'
import StopwatchIcon from '@/assets/icons/stopwatch.svg?react'

export default function AirlinePolicies({ airline, policies }) {
  return (
    <Reveal as="section" variant="zoom" className="group flex flex-col gap-4 rounded-lg bg-primary/60 p-4 transition-colors duration-700 hover:bg-primary/80">
      <h2 className="font-heading text-2xl leading-[30px]">{airline} Airlines Policies</h2>
      <ul className="flex flex-col gap-4 md:flex-row">
        {policies.map((policy) => (
          <li key={policy} className="flex items-center gap-4 font-medium text-ink/75 md:flex-1">
            <StopwatchIcon className="size-6 shrink-0 text-ink transition-transform duration-1000 group-hover:rotate-[360deg]" />
            {policy}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
