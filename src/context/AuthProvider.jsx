import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AuthContext } from './authContext'

// Учебный проект: аккаунты лежат в localStorage как есть, без шифрования.
const USERS_KEY = 'golobe.users'
const SESSION_KEY = 'golobe.session'

const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback
  } catch {
    return fallback
  }
}

const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* приватный режим браузера — просто не сохраняем */
  }
}

const normalizeEmail = (email) => email.trim().toLowerCase()

/** Хранит зарегистрированных пользователей и текущую сессию. */
export default function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => read(USERS_KEY, []))
  const [email, setEmail] = useState(() => read(SESSION_KEY, null))

  // На первом рендере данные только что прочитаны — записывать их обратно не нужно
  const mounted = useRef(false)
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    write(USERS_KEY, users)
    write(SESSION_KEY, email)
  }, [users, email])

  const user = useMemo(() => users.find((item) => item.email === email) ?? null, [users, email])

  const register = useCallback(
    (form) => {
      const nextEmail = normalizeEmail(form.email)
      if (users.some((item) => item.email === nextEmail)) {
        return { ok: false, error: 'Аккаунт с такой почтой уже существует' }
      }

      const newUser = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: nextEmail,
        phone: form.phone.trim(),
        password: form.password,
        address: '',
        birthDate: '',
        cards: [],
      }

      setUsers((prev) => [...prev, newUser])
      setEmail(nextEmail)
      return { ok: true }
    },
    [users],
  )

  const login = useCallback(
    (form) => {
      const found = users.find((item) => item.email === normalizeEmail(form.email))
      if (!found) return { ok: false, error: 'Аккаунт с такой почтой не найден' }
      if (found.password !== form.password) return { ok: false, error: 'Неверный пароль' }

      setEmail(found.email)
      return { ok: true }
    },
    [users],
  )

  const logout = useCallback(() => setEmail(null), [])

  const updateUser = useCallback(
    (patch) => {
      if (!email) return
      setUsers((prev) => prev.map((item) => (item.email === email ? { ...item, ...patch } : item)))
      if (patch.email) setEmail(normalizeEmail(patch.email))
    },
    [email],
  )

  /** Смена пароля по почте — для восстановления доступа. */
  const resetPassword = useCallback((targetEmail, password) => {
    const normalized = normalizeEmail(targetEmail)
    setUsers((prev) => prev.map((item) => (item.email === normalized ? { ...item, password } : item)))
  }, [])

  const hasEmail = useCallback((value) => users.some((item) => item.email === normalizeEmail(value)), [users])

  const addCard = useCallback(
    (card) => {
      if (!email) return
      setUsers((prev) =>
        prev.map((item) => (item.email === email ? { ...item, cards: [...item.cards, card] } : item)),
      )
    },
    [email],
  )

  const removeCard = useCallback(
    (id) => {
      if (!email) return
      setUsers((prev) =>
        prev.map((item) =>
          item.email === email ? { ...item, cards: item.cards.filter((card) => card.id !== id) } : item,
        ),
      )
    },
    [email],
  )

  const value = useMemo(
    () => ({ user, register, login, logout, updateUser, resetPassword, hasEmail, addCard, removeCard }),
    [user, register, login, logout, updateUser, resetPassword, hasEmail, addCard, removeCard],
  )

  return <AuthContext value={value}>{children}</AuthContext>
}
