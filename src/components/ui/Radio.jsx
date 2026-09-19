/** Радио-кнопка в стиле Material (кольцо + точка). */
export default function Radio({ checked, onChange, name, value, label }) {
  return (
    <span className="relative grid size-12 shrink-0 place-items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        aria-label={label}
        className="peer absolute inset-0 cursor-pointer appearance-none rounded-full"
      />
      <span
        className={`pointer-events-none grid size-5 place-items-center rounded-full border-2 transition-colors duration-500 ${
          checked ? 'border-white' : 'border-ink'
        }`}
      >
        <span
          className={`size-2.5 rounded-full bg-white transition-transform duration-500 ${
            checked ? 'scale-100' : 'scale-0'
          }`}
        />
      </span>
    </span>
  )
}
