import { useInView } from '@/hooks/useInView'

/**
 * Плавно показывает содержимое, когда оно попадает в экран.
 * variant: 'up' | 'left' | 'right' | 'zoom' | 'flip', delay — задержка в мс (для «лесенки»).
 */
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', style, children, ...props }) {
  const [ref, visible] = useInView()

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-visible={visible}
      style={{ '--delay': `${delay}ms`, ...style }}
      className={`reveal ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
