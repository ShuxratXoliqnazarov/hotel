import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'golobe-favourite-hotels'
// При первом заходе в избранном уже есть пара отелей — как в макете страницы Favourites
const DEFAULT_IDS = ['cvk-park-bosphorus', 'male-water-villa', 'eresin-taxim']

function readIds() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === null ? DEFAULT_IDS : JSON.parse(saved)
  } catch {
    return DEFAULT_IDS
  }
}

// Один общий стор на всё приложение: сердечко в списке, на странице отеля и страница Favourites всегда синхронны
let ids = readIds()
const listeners = new Set()

const subscribe = (listener) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function setIds(next) {
  ids = next
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // localStorage недоступен — избранное живёт до перезагрузки
  }
  listeners.forEach((listener) => listener())
}

/** const { ids, has, toggle } = useFavourites() — избранные отели (хранятся в localStorage). */
export function useFavourites() {
  const current = useSyncExternalStore(subscribe, () => ids)

  return {
    ids: current,
    has: (id) => current.includes(id),
    toggle: (id) => setIds(current.includes(id) ? current.filter((value) => value !== id) : [...current, id]),
  }
}
