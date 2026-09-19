import { useEffect, useState } from 'react'
import { useInView } from '@/hooks/useInView'

/** Число плавно «набегает» от 0 до value, когда появляется на экране. */
export default function CountUp({ value, duration = 1600, prefix = '', className = '' }) {
  const [ref, visible] = useInView()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!visible) return

    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4) // easeOutQuart
      setCurrent(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, value, duration])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {current}
    </span>
  )
}
