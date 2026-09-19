import { useInView } from '@/hooks/useInView'

/**
 * Текст, который «выезжает» снизу по словам, когда попадает в экран.
 * <SplitText as="h2" text="Plan your perfect trip" className="..." />
 */
export default function SplitText({ as: Tag = 'span', text, delay = 0, className = '' }) {
  const [ref, visible] = useInView()
  const words = text.split(' ')

  return (
    <Tag ref={ref} data-visible={visible} style={{ '--delay': `${delay}ms` }} className={className} aria-label={text}>
      {words.map((word, index) => (
        <span key={index} aria-hidden="true">
          <span className="split-word">
            <span style={{ '--i': index }}>{word}</span>
          </span>
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  )
}
