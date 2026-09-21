/** Сообщение об ошибке формы. Пока ошибки нет — ничего не рендерим. */
export default function FormError({ message }) {
  if (!message) return null

  return (
    <p role="alert" className="animate-fade-up rounded bg-accent/10 px-4 py-3 text-sm font-medium text-accent">
      {message}
    </p>
  )
}
