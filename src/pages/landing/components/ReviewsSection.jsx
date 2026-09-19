import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import ReviewCard from './ReviewCard'
import { reviews } from '@/data/landing'

// Лента отзывов уходит за правый край экрана, как в макете
const bleedRight = { marginRight: 'calc(-1 * (max(0px, (100vw - 1264px) / 2) + 1rem))' }

export default function ReviewsSection() {
  return (
    <section className="container-page flex flex-col gap-10">
      <SectionHeader title="Reviews" subtitle="What people says about Golobe facilities" />

      <div style={bleedRight} className="overflow-x-auto pt-2 pb-10 [scrollbar-width:none]">
        <ul className="flex w-max gap-6 pr-6">
          {reviews.map((review, index) => (
            <Reveal as="li" key={review.id} variant="right" delay={index * 150}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
