import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { lenis } from '@/app/smoothScroll'

/** При переходе между страницами мгновенно прокручивает окно наверх. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    lenis.scrollTo(0, { immediate: true })
  }, [pathname])

  return <Outlet />
}
