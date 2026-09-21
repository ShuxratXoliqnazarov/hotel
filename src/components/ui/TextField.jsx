/**
 * Поле ввода в стиле Material Outlined: подпись лежит на рамке.
 * `as="select"` превращает поле в выпадающий список (options — массив строк).
 */
export default function TextField({
  label,
  as = 'input',
  options = [],
  trailing,
  className = '',
  inputClassName = '',
  bordered = true,
  ...props
}) {
  const Control = as
  const frame = bordered
    ? 'border border-outline hover:border-ink focus-within:border-primary focus-within:shadow-[0_0_0_4px_rgb(141_211_187/0.25)]'
    : 'focus-within:shadow-[0_0_0_4px_rgb(17_34_17/0.1)]'

  return (
    <label className={`group relative flex h-14 items-center rounded bg-white transition-all duration-500 ${frame} ${className}`}>
      {label && (
        <span className="absolute -top-2.5 left-3 bg-white px-1 text-sm leading-[17px] whitespace-nowrap text-ink transition-colors duration-500 group-focus-within:text-primary-dark">
          {label}
        </span>
      )}

      <Control
        className={`h-full w-full min-w-0 appearance-none truncate bg-transparent pl-4 text-base text-[#1c1b1f] outline-none placeholder:text-ink/40 ${
          trailing ? 'pr-12' : 'pr-4'
        } ${inputClassName}`}
        {...props}
      >
        {as === 'select'
          ? options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
          : undefined}
      </Control>

      {trailing && (
        <span className="pointer-events-none absolute right-3 grid size-6 place-items-center transition-transform duration-700 group-hover:scale-110 group-focus-within:scale-110">
          {trailing}
        </span>
      )}
    </label>
  )
}
