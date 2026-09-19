import { Outlet, useLocation } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

/** Общий каркас страниц: шапка + контент + подвал. Контент плавно появляется при смене страницы. */
export default function MainLayout({ loggedIn = false }) {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Header loggedIn={loggedIn} />
      <main key={pathname} className="flex-1 animate-page-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
