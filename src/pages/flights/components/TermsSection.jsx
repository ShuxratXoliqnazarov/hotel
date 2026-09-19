import Reveal from '@/components/ui/Reveal'

const PAYMENT_TERMS = [
  'If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes.',
  'If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us.',
  'Golobe may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in. Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system.',
]

const CONTACTS = ['Golobe Group Q.C.S.C', 'Golobe Tower', 'P.O. Box: 22550', 'Doha, State of Qatar']

export default function TermsSection() {
  return (
    <Reveal as="section" className="flex flex-col gap-[34px]">
      <h2 className="text-2xl leading-[29px] font-semibold">Terms and Conditions</h2>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl leading-6 font-medium">Payments</h3>
        <ul className="flex list-disc flex-col gap-4 pl-8 text-sm leading-[17px] text-ink/75">
          {PAYMENT_TERMS.map((term) => (
            <li key={term.slice(0, 20)} className="transition-colors duration-500 marker:text-primary hover:text-ink">
              {term}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl leading-6 font-medium">Contact Us</h3>
        <address className="text-sm leading-[17px] text-ink/75 not-italic">
          If you have any questions about our Website or our Terms of Use, please contact:
          {CONTACTS.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          Further contact details can be found at{' '}
          <a href="#" className="underline decoration-primary decoration-2 underline-offset-2 transition-colors hover:text-primary-dark">
            golobe.com/help
          </a>
        </address>
      </div>
    </Reveal>
  )
}
