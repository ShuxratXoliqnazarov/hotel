import pass1 from '@/assets/images/flights/pass-1.jpg'
import pass2 from '@/assets/images/flights/pass-2.jpg'
import pass3 from '@/assets/images/flights/pass-3.jpg'
import pass4 from '@/assets/images/flights/pass-4.jpg'
import pass5 from '@/assets/images/flights/pass-5.jpg'
import melbourne from '@/assets/images/flights/melbourne.jpg'
import paris from '@/assets/images/flights/paris.jpg'
import london from '@/assets/images/flights/london.jpg'
import columbia from '@/assets/images/flights/columbia.jpg'
import sriLanka1 from '@/assets/images/flights/srilanka-1.jpg'
import sriLanka2 from '@/assets/images/flights/srilanka-2.jpg'
import sriLanka3 from '@/assets/images/flights/srilanka-3.jpg'
import sriLanka4 from '@/assets/images/flights/srilanka-4.jpg'
import logoEmirates from '@/assets/images/flights/logo-emirates.png'
import logoFlyDubai from '@/assets/images/flights/logo-flydubai.png'
import logoQatar from '@/assets/images/flights/logo-qatar.png'
import logoEtihad from '@/assets/images/flights/logo-etihad.png'
import emiratesSmall from '@/assets/images/flights/emirates-small.png'
import planeCover from '@/assets/images/flights/plane-cover.jpg'
import feature1 from '@/assets/images/flights/feature-1.jpg'
import feature2 from '@/assets/images/flights/feature-2.jpg'
import feature3 from '@/assets/images/flights/feature-3.jpg'
import feature4 from '@/assets/images/flights/feature-4.jpg'
import feature5 from '@/assets/images/flights/feature-5.jpg'
import feature6 from '@/assets/images/flights/feature-6.jpg'
import feature7 from '@/assets/images/flights/feature-7.jpg'
import feature8 from '@/assets/images/flights/feature-8.jpg'
import feature9 from '@/assets/images/flights/feature-9.jpg'

/* ---------- Flights Search ---------- */

// Координаты в системе макета 1440×486 (карта «Let's go places together»)
export const boardingPasses = [
  { id: 1, image: pass3, card: { x: 305, y: 73 }, dot: { x: 413, y: 155 } },
  { id: 2, image: pass1, card: { x: 467, y: 294 }, dot: { x: 460, y: 377 } },
  { id: 3, image: pass4, card: { x: 774, y: 280 }, dot: { x: 765, y: 232 } },
  { id: 4, image: pass2, card: { x: 990, y: 89 }, dot: { x: 965, y: 190 } },
  { id: 5, image: pass5, card: { x: 1137, y: 260 }, dot: { x: 1140, y: 342 } },
]

export const fallDeals = [
  { city: 'Melbourne', caption: 'An amazing journey', price: 700, image: melbourne },
  { city: 'Paris', caption: 'A Paris Adventure', price: 600, image: paris },
  { city: 'London', caption: 'London eye adventure', price: 350, image: london },
  { city: 'Columbia', caption: 'Amazing streets', price: 700, image: columbia },
]

export const featuredTrip = {
  title: 'Backpacking Sri Lanka',
  price: 700,
  text: "Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.",
  images: [sriLanka1, sriLanka2, sriLanka3, sriLanka4],
}

/* ---------- Flight Listing / Detail / Booking ---------- */

export const airlines = ['Emirated', 'Fly Dubai', 'Qatar', 'Etihad']
export const tripTypes = ['Round trip', 'On Way', 'Multi-City', 'My Dates Are Flexible']
export const ratingOptions = [0, 1, 2, 3, 4]
export const PRICE_RANGE = [50, 1200]
export const TIME_RANGE = [1, 1436] // минуты: 12:01am – 11:56pm

export const sortTabs = [
  { id: 'cheapest', label: 'Cheapest', price: 99, duration: '2h 18m' },
  { id: 'best', label: 'Best', price: 99, duration: '2h 18m' },
  { id: 'quickest', label: 'Quickest', price: 99, duration: '2h 18m' },
]

const leg = (airline) => ({
  departure: '12:00 pm',
  arrival: '01:28 pm',
  airline,
  stops: 'non stop',
  duration: '2h 28m',
  route: 'EWR-BNA',
})

export const flights = [
  {
    id: 'emirates-a380',
    airline: 'Emirated',
    name: 'Emirates A380 Airbus',
    logo: logoEmirates,
    rating: 4.2,
    reviews: 54,
    price: 104,
    legs: [leg('Emirates'), leg('Emirates')],
  },
  {
    id: 'flydubai-b737',
    airline: 'Fly Dubai',
    name: 'Fly Dubai Boeing 737',
    logo: logoFlyDubai,
    rating: 4.2,
    reviews: 54,
    price: 104,
    legs: [leg('Emirates'), leg('Emirates')],
  },
  {
    id: 'qatar-a350',
    airline: 'Qatar',
    name: 'Qatar Airways A350',
    logo: logoQatar,
    rating: 4.2,
    reviews: 54,
    price: 104,
    perNight: true,
    legs: [leg('Emirates'), leg('Emirates')],
  },
  {
    id: 'etihad-b787',
    airline: 'Etihad',
    name: 'Etihad Boeing 787',
    logo: logoEtihad,
    logoClassName: 'opacity-60',
    rating: 4.2,
    reviews: 54,
    price: 104,
    perNight: true,
    legs: [leg('Emirates'), leg('Emirates')],
  },
]

// Детальная информация (в макете одна — Emirates A380)
export const flightDetail = {
  name: 'Emirates A380 Airbus',
  address: 'Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437',
  price: 240,
  rating: 4.2,
  reviews: 54,
  cover: planeCover,
  breadcrumbs: [
    { label: 'Turkey', to: '/flights' },
    { label: 'Istanbul', to: '/flights/list' },
    { label: 'CVK Park Bosphorus Hotel Istanbul' },
  ],
  classes: ['Economy', 'First Class', 'Busines Class'],
  features: [feature1, feature2, feature3, feature4, feature5, feature6, feature7, feature8, feature9],
  policies: ['Pre-flight cleaning, installation of cabin HEPA filters.', 'Pre-flight health screening questions.'],
  segment: {
    date: 'Return Wed, Dec 8',
    duration: '2h 28m',
    airline: 'Emirates',
    aircraft: 'Airbus A320',
    logo: emiratesSmall,
    departure: { time: '12:00 pm', airport: 'Newark(EWR)' },
    arrival: { time: '12:00 pm', airport: 'Newark(EWR)' },
  },
  priceDetails: [
    { label: 'Base Fare', value: 400 },
    { label: 'Discount', value: 400 },
    { label: 'Taxes', value: 400 },
    { label: 'Service Fee', value: 400 },
  ],
  total: 400,
}

export const savedCards = [{ id: 'visa-4321', brand: 'VISA', last4: '4321', expires: '02/27' }]

export const ticket = {
  passenger: 'James Doe',
  boardingPass: 'Boarding Pass N’123',
  travelClass: 'Busniess Class',
  flightCode: 'EK',
  bookingCode: 'ABC12345',
  details: [
    { id: 'date', label: 'Date', value: 'Newark(EWR)' },
    { id: 'time', label: 'Flight time', value: '12:00' },
    { id: 'gate', label: 'Gate', value: 'A12' },
    { id: 'seat', label: 'Seat', value: '128' },
  ],
}

/** Детали рейса по id из URL. Для неизвестного id — данные из макета. */
export function getFlightDetail(flightId) {
  const flight = flights.find(({ id }) => id === flightId)
  return { ...flightDetail, id: flight?.id ?? flights[0].id, name: flight?.name ?? flightDetail.name }
}
