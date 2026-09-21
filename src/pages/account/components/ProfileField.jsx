import { useState } from 'react'
import Button from '@/components/ui/Button'
import TextField from '@/components/ui/TextField'
import PencilIcon from '@/assets/icons/pencil.svg?react'

/**
 * Строка профиля: показывает значение, по «Change» превращается в поле ввода.
 * onSave получает новое значение, extraAction — дополнительная кнопка (например «Add another email»).
 */
export default function ProfileField({ label, value, type = 'text', placeholder, onSave, extraAction }) {
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const next = new FormData(event.currentTarget).get('value')
    onSave(String(next).trim())
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 not-first:border-t not-first:border-ink/10 sm:flex-row sm:items-center sm:justify-between"
      >
        <TextField
          name="value"
          label={label}
          type={type}
          defaultValue={value}
          placeholder={placeholder}
          autoFocus
          required
          className="w-full sm:max-w-[420px]"
        />

        <div className="flex gap-4">
          <Button type="submit" size="sm">
            Save
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)} className="px-2">
            Cancel
          </Button>
        </div>
      </form>
    )
  }

  return (
    <div className="flex flex-col gap-4 p-6 transition-colors not-first:border-t not-first:border-ink/10 hover:bg-primary-soft/60 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-ink/60">{label}</span>
        <span className={`font-medium ${value ? '' : 'text-ink/40'}`}>{value || 'Not added yet'}</span>
      </div>

      <div className="flex gap-4">
        {extraAction}
        <Button variant="outline" size="sm" icon={PencilIcon} onClick={() => setIsEditing(true)}>
          Change
        </Button>
      </div>
    </div>
  )
}
