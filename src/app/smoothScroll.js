import Lenis from 'lenis'

/** Инерционный плавный скролл на весь сайт (Lenis). */
export const lenis = new Lenis({
  duration: 1.3,
  easing: (t) => 1 - Math.pow(1 - t, 4), // easeOutQuart
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
