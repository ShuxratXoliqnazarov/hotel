import { useRef } from 'react'

// Все свойства, которые могут меняться при наведении — плавно и без рывков
const TRANSITION = ['transform 0.9s', 'translate 0.7s', 'scale 0.7s', 'box-shadow 0.7s']
  .map((item) => `${item} var(--ease-smooth)`)
  .join(', ')

/**
 * Карточка плавно наклоняется в 3D вслед за курсором, по ней бегает мягкий блик.
 * max — максимальный угол наклона в градусах.
 */
export default function Tilt({ as: Tag = 'div', max = 8, glare = true, className = '', style, children, ...props }) {
  const ref = useRef(null)

  const handleMove = (event) => {
    const element = ref.current
    const rect = element.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    element.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`)
    element.style.setProperty('--rx', `${(0.5 - y) * max * 2}deg`)
    element.style.setProperty('--mx', `${x * 100}%`)
    element.style.setProperty('--my', `${y * 100}%`)
  }

  const handleLeave = () => {
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: TRANSITION, ...style }}
      className={`tilt relative ${className}`}
      {...props}
    >
      {children}
      {glare && <span className="tilt-glare" aria-hidden="true" />}
    </Tag>
  )
}
