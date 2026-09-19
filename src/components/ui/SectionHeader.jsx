import Button from './Button'
import Reveal from './Reveal'
import SplitText from './SplitText'

/** Заголовок секции: title выезжает по словам, подзаголовок и кнопка проявляются следом. */
export default function SectionHeader({ title, subtitle, actionLabel = 'See All', actionTo, className = '' }) {
  return (
    <div className={`flex items-center justify-between gap-6 ${className}`}>
      <div className="flex max-w-[851px] flex-col gap-4">
        <SplitText
          as="h2"
          text={title}
          className="text-2xl leading-tight font-semibold text-black md:text-[32px] md:leading-[39px]"
        />
        {subtitle && (
          <Reveal as="p" delay={250} className="text-base leading-5 text-ink/75">
            {subtitle}
          </Reveal>
        )}
      </div>

      {actionLabel && (
        <Reveal variant="zoom" delay={400} className="shrink-0">
          <Button variant="outline" size="sm" to={actionTo}>
            {actionLabel}
          </Button>
        </Reveal>
      )}
    </div>
  )
}
