import Button from '@/components/ui/Button'
import TextField from '@/components/ui/TextField'
import Reveal from '@/components/ui/Reveal'
import MailboxIcon from '@/assets/icons/mailbox.svg?react'

export default function Newsletter() {
  return (
    <Reveal as="section" variant="zoom" className="group flex justify-between gap-6 overflow-hidden rounded-[20px] bg-primary-light px-6 shadow-card">
      <div className="flex max-w-[640px] flex-1 flex-col justify-between gap-6 py-6">
        <h2 className="max-w-[364px] font-heading text-3xl md:text-[44px] md:leading-[54px]">Subscribe Newsletter</h2>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-xl leading-[25px] text-ink/80">The Travel</h3>
            <p className="font-medium text-ink/70">
              Get inspired! Receive travel discounts, tips and behind the scenes stories.
            </p>
          </div>

          <form className="flex flex-col gap-4 sm:max-w-[593px] sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <TextField
              type="email"
              placeholder="Your email address"
              bordered={false}
              className="flex-1"
              aria-label="Your email address"
            />
            <Button type="submit" variant="dark" size="lg" className="font-semibold">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <MailboxIcon className="hidden h-[305px] w-[400px] shrink-0 origin-bottom self-end transition-transform duration-1000 group-hover:-rotate-2 group-hover:scale-105 lg:block" aria-hidden="true" />
    </Reveal>
  )
}
