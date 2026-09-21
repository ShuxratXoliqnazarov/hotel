/** Из данных формы делает карту для профиля: храним только последние 4 цифры. */
export function createCard({ number = '', expires = '', name = '' }) {
  const digits = number.replace(/\D/g, '')

  return {
    id: `card-${Date.now()}`,
    number: '**** **** ****',
    last4: digits.slice(-4) || '0000',
    validThru: expires || '—',
    holder: name.trim(),
  }
}
