import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import ScrollToTop from '@/components/layout/ScrollToTop'

// Landing
import LandingPage from '@/pages/landing/LandingPage'

// Flight Flow
import FlightSearchPage from '@/pages/flights/FlightSearchPage'
import FlightListingPage from '@/pages/flights/FlightListingPage'
import FlightDetailPage from '@/pages/flights/FlightDetailPage'
import FlightBookingPage from '@/pages/flights/FlightBookingPage'
import FlightTicketPage from '@/pages/flights/FlightTicketPage'

// Hotel Flow
import HotelSearchPage from '@/pages/hotels/HotelSearchPage'
import HotelListingPage from '@/pages/hotels/HotelListingPage'
import HotelDetailPage from '@/pages/hotels/HotelDetailPage'
import HotelBookingPage from '@/pages/hotels/HotelBookingPage'
import HotelTicketPage from '@/pages/hotels/HotelTicketPage'
import FavouritesPage from '@/pages/hotels/FavouritesPage'

// Login / Sign up
import LoginPage from '@/pages/auth/LoginPage'
import SignUpPage from '@/pages/auth/SignUpPage'
import AddPaymentMethodPage from '@/pages/auth/AddPaymentMethodPage'
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage'
import VerifyCodePage from '@/pages/auth/VerifyCodePage'
import SetPasswordPage from '@/pages/auth/SetPasswordPage'

// Account Flow
import AccountPage from '@/pages/account/AccountPage'
import AccountHistoryPage from '@/pages/account/AccountHistoryPage'
import AccountPaymentMethodsPage from '@/pages/account/AccountPaymentMethodsPage'

/**
 * Все маршруты приложения.
 * - без layout: Landing (своя шапка в hero) и страницы входа/регистрации
 * - MainLayout: гостевая шапка (Login / Sign up)
 * - MainLayout loggedIn: шапка с Favourites и аватаром
 */
export const router = createBrowserRouter([
  {
    element: <ScrollToTop />,
    children: [
      { path: '/', element: <LandingPage /> },

      // Login / Sign up
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/signup/payment', element: <AddPaymentMethodPage /> },
      { path: '/forgot-password', element: <ForgotPasswordPage /> },
      { path: '/forgot-password/verify', element: <VerifyCodePage /> },
      { path: '/forgot-password/reset', element: <SetPasswordPage /> },

      // Гость
      {
        element: <MainLayout />,
        children: [
          { path: '/flights', element: <FlightSearchPage /> },
          { path: '/hotels', element: <HotelSearchPage /> },
        ],
      },

      // Авторизованный пользователь
      {
        element: <MainLayout loggedIn />,
        children: [
          { path: '/flights/list', element: <FlightListingPage /> },
          { path: '/flights/:flightId', element: <FlightDetailPage /> },
          { path: '/flights/:flightId/booking', element: <FlightBookingPage /> },
          { path: '/flights/:flightId/ticket', element: <FlightTicketPage /> },

          { path: '/hotels/list', element: <HotelListingPage /> },
          { path: '/hotels/:hotelId', element: <HotelDetailPage /> },
          { path: '/hotels/:hotelId/booking', element: <HotelBookingPage /> },
          { path: '/hotels/:hotelId/ticket', element: <HotelTicketPage /> },
          { path: '/favourites', element: <FavouritesPage /> },

          { path: '/account', element: <AccountPage /> },
          { path: '/account/history', element: <AccountHistoryPage /> },
          { path: '/account/payment-methods', element: <AccountPaymentMethodsPage /> },
        ],
      },
    ],
  },
])
