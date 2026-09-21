import logoEmirates from '@/assets/images/flights/logo-emirates.png'
import cvk from '@/assets/images/hotels/cvk-1.jpg'

const flight = (id) => ({
  id,
  logo: logoEmirates,
  airline: 'Emirates',
  from: { airport: 'Newark(EWR)', time: '12:00 pm' },
  to: { airport: 'Newark(EWR)', time: '6:00 pm' },
  details: [
    { id: 'date', label: 'Date', value: '12-11-22' },
    { id: 'time', label: 'Flight time', value: 'Newark(EWR)' },
    { id: 'gate', label: 'Gate', value: 'A12' },
    { id: 'seat', label: 'Seat no.', value: '128' },
  ],
})

const stay = (id) => ({
  id,
  logo: cvk,
  hotel: 'CVK Park Bosphorus Hotel Istanbul',
  checkIn: { label: 'Check-In', value: 'Thur, Dec 8' },
  checkOut: { label: 'Check Out', value: 'Fri, Dec 9' },
  details: [
    { id: 'in', label: 'Check-In time', value: '12:00pm' },
    { id: 'out', label: 'Check-in out', value: '11:30am' },
    { id: 'room', label: 'Room no.', value: 'On arrival' },
  ],
})

export const bookings = {
  flights: [flight(1), flight(2), flight(3)],
  stays: [stay(1), stay(2), stay(3)],
}

export const bookingPeriods = ['Upcoming', 'Completed', 'Cancelled']
