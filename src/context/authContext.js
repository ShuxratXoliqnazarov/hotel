import { createContext, useContext } from 'react'

export const AuthContext = createContext(null)

/** Доступ к текущему пользователю и действиям входа/регистрации. */
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth нужно вызывать внутри <AuthProvider>')
  return context
}
