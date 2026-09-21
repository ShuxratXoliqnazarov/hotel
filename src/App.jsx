import { RouterProvider } from 'react-router-dom'
import AuthProvider from '@/context/AuthProvider'
import { router } from '@/app/router'

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
