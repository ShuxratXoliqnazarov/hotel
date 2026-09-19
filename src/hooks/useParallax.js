import { useEffect, useRef } from 'react'

/**
 * Параллакс при скролле: элемент смещается на scrollY * speed.
 * fade — дополнительно плавно гаснет по мере прокрутки (для текста в hero).
 */
export function useParallax(speed = 0.3, { fade = false } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let frame = 0
    const update = () => {
      const offset = window.scrollY
      element.style.transform = `translate3d(0, ${offset * speed}px, 0)`
      if (fade) element.style.opacity = String(Math.max(0, 1 - offset / 450))
      frame = 0
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [speed, fade])

  return ref
}
