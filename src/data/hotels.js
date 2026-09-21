import hotelPool from '@/assets/images/landing/promo-hotels.jpg'
import lake from '@/assets/images/landing/hero.jpg'
import male from '@/assets/images/landing/male.jpg'
import istanbul from '@/assets/images/landing/istanbul.jpg'
import sydney from '@/assets/images/landing/sydney.jpg'
import baku from '@/assets/images/landing/baku.jpg'
import dubai from '@/assets/images/landing/dubai.jpg'
import paris from '@/assets/images/landing/paris.jpg'
import tokyo from '@/assets/images/landing/tokyo.jpg'
import sriLanka1 from '@/assets/images/flights/srilanka-1.jpg'
import sriLanka2 from '@/assets/images/flights/srilanka-2.jpg'
import sriLanka3 from '@/assets/images/flights/srilanka-3.jpg'
import sriLanka4 from '@/assets/images/flights/srilanka-4.jpg'
import melbourne from '@/assets/images/flights/melbourne.jpg'
import london from '@/assets/images/flights/london.jpg'
import columbia from '@/assets/images/flights/columbia.jpg'
import bookingThumb from '@/assets/images/flights/booking-thumb.jpg'
import avatar from '@/assets/images/common/avatar.jpg'
import review1 from '@/assets/images/landing/review-1.jpg'
import review2 from '@/assets/images/landing/review-2.jpg'
import review3 from '@/assets/images/landing/review-3.jpg'

// Фото отелей — заглушки из уже лежащих в репо картинок (в Figma другие фото отелей).
// Когда будут экспортированы настоящие — заменить импорты выше, остальное менять не надо.

/* ---------- Hotel Search ---------- */

export const stayDeals = [
  { city: 'Istanbul', caption: 'A Turkish stay', price: 240, image: istanbul },
  { city: 'Sydney', caption: 'Harbour views', price: 380, image: sydney },
  { city: 'Baku', caption: 'Old town charm', price: 190, image: baku },
  { city: 'Malé', caption: 'Overwater escape', price: 520, image: male },
]

export const featuredStay = {
  title: 'Sri Lanka Hill Retreats',
  price: 240,
  text: 'Wake up above the clouds in a tea-estate bungalow, spend the day exploring waterfalls and coastline, and end it with a dinner cooked on an open fire. Hand-picked stays for slow travel, far from the crowds — with free cancellation on most of them.',
  images: [sriLanka1, sriLanka2, sriLanka3, sriLanka4],
}

/* ---------- Hotel Listing ---------- */

export const PRICE_RANGE = [50, 1200]
export const ratingOptions = [0, 1, 2, 3, 4]
export const freebies = ['Free breakfast', 'Free parking', 'Free internet', 'Free airport shuttle', 'Free cancellation']
export const amenitiesList = ['24hr front desk', 'Air-conditioned', 'Fitness', 'Pool']

export const hotelSortTabs = [
  { id: 'recommended', label: 'Recommended' },
  { id: 'cheapest', label: 'Cheapest' },
  { id: 'rating', label: 'Top rated' },
]

const OVERVIEW =
  'Located in the heart of the city, this hotel offers spacious rooms, a rooftop pool and an award-winning restaurant. Guests enjoy free Wi-Fi throughout the property, a fully equipped fitness centre and a spa with a view. The city’s main sights, shopping streets and the metro are all within a ten-minute walk, so you can leave the car at home and see everything on foot.'

const room = (id, name, image, price, features) => ({ id, name, image, price, features })

const defaultRooms = [
  room('deluxe', 'Deluxe Double Room', sriLanka2, 240, ['1 king bed', 'City view', 'Free Wi-Fi', 'Breakfast included']),
  room('family', 'Family Suite', sriLanka3, 320, ['2 queen beds', 'Balcony', 'Kitchenette', 'Free cancellation']),
  room('presidential', 'Presidential Suite', sriLanka4, 560, ['1 king bed', 'Panoramic view', 'Private jacuzzi', 'Lounge access']),
]

const hotel = (fields) => ({
  reviews: 371,
  rating: 4.2,
  ratingLabel: 'Very Good',
  stars: 5,
  amenities: 20,
  address: 'Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437',
  freebies: ['Free breakfast', 'Free cancellation'],
  facilities: ['Air-conditioned', 'Pool'],
  rooms: defaultRooms,
  ...fields,
})

export const hotels = [
  hotel({
    id: 'cvk-park-bosphorus',
    reviews: 371,
    name: 'CVK Park Bosphorus Hotel Istanbul',
    price: 240,
    rating: 4.2,
    image: hotelPool,
    gallery: [hotelPool, sriLanka1, sriLanka2, sriLanka3, sriLanka4],
    freebies: ['Free breakfast', 'Free parking', 'Free cancellation'],
    facilities: ['24hr front desk', 'Air-conditioned', 'Fitness', 'Pool'],
  }),
  hotel({
    id: 'eresin-taxim',
    reviews: 1284,
    name: 'Eresin Hotels Sultanahmet',
    price: 104,
    rating: 4.8,
    ratingLabel: 'Excellent',
    stars: 4,
    amenities: 24,
    image: istanbul,
    gallery: [istanbul, sydney, baku, dubai, paris],
    freebies: ['Free breakfast', 'Free internet'],
    facilities: ['Air-conditioned', 'Fitness'],
  }),
  hotel({
    id: 'male-water-villa',
    reviews: 642,
    name: 'Kaani Water Villa Maldives',
    price: 520,
    rating: 4.9,
    ratingLabel: 'Excellent',
    amenities: 32,
    address: 'North Malé Atoll, Kaafu, Maldives',
    image: male,
    gallery: [male, lake, sriLanka2, sriLanka1, melbourne],
    freebies: ['Free breakfast', 'Free airport shuttle', 'Free cancellation'],
    facilities: ['Pool', 'Air-conditioned', 'Fitness'],
  }),
  hotel({
    id: 'sydney-harbour',
    reviews: 208,
    name: 'Harbour Bridge Grand Sydney',
    price: 380,
    rating: 4.0,
    ratingLabel: 'Very Good',
    stars: 4,
    address: '1 Macquarie St, Sydney NSW 2000, Australia',
    image: sydney,
    gallery: [sydney, melbourne, london, columbia, tokyo],
    freebies: ['Free internet', 'Free parking'],
    facilities: ['24hr front desk', 'Pool'],
  }),
  hotel({
    id: 'baku-flame',
    reviews: 97,
    name: 'Flame Towers Residence Baku',
    price: 190,
    rating: 3.8,
    ratingLabel: 'Good',
    stars: 4,
    address: 'Mehdi Huseyn 1, Baku AZ1006, Azerbaijan',
    image: baku,
    gallery: [baku, istanbul, dubai, paris, tokyo],
    freebies: ['Free breakfast'],
    facilities: ['Air-conditioned', 'Fitness'],
  }),
  hotel({
    id: 'paris-latin',
    reviews: 456,
    name: 'Maison Latin Quarter Paris',
    price: 175,
    rating: 4.4,
    stars: 3,
    amenities: 12,
    address: '12 Rue Saint-Jacques, 75005 Paris, France',
    image: paris,
    gallery: [paris, london, columbia, sydney, baku],
    freebies: ['Free internet', 'Free cancellation'],
    facilities: ['24hr front desk', 'Air-conditioned'],
  }),
]

/* ---------- Hotel Detail ---------- */

export const hotelReviews = [
  { id: 1, author: 'Omar Siphron', date: 'Nov 2, 2022', rating: 5, avatar: review1, text: 'Great location and spotless rooms. The rooftop pool at sunset is unforgettable, and the staff went out of their way to arrange an early check-in for us.' },
  { id: 2, author: 'Cynthia Aldrin', date: 'Oct 21, 2022', rating: 4, avatar: review2, text: 'Very comfortable beds and a huge breakfast buffet. The metro is a five-minute walk. Only downside: the gym is a bit small at peak hours.' },
  { id: 3, author: 'Eliot Hamm', date: 'Oct 9, 2022', rating: 5, avatar: review3, text: 'We stayed for a week with two kids and everything was easy — family suite, friendly reception, free cancellation when our plans changed.' },
  { id: 4, author: 'Marta Kovalenko', date: 'Sep 30, 2022', rating: 4, avatar: avatar, text: 'Excellent value for the price. Room service was quick and the view of the Bosphorus from the 9th floor is worth it.' },
]

export const ratingBreakdown = [
  { label: 'Cleanliness', score: 4.8 },
  { label: 'Facilities', score: 4.4 },
  { label: 'Location', score: 4.9 },
  { label: 'Room comfort', score: 4.6 },
  { label: 'Service', score: 4.7 },
]

export const hotelOverview = OVERVIEW

/** Всё, что нужно странице отеля / бронирования / билета, по id из URL (неизвестный id → первый отель). */
export function getHotelDetail(hotelId) {
  const found = hotels.find(({ id }) => id === hotelId) ?? hotels[0]

  return {
    ...found,
    breadcrumbs: [
      { label: 'Turkey', to: '/hotels' },
      { label: 'Istanbul', to: '/hotels/list' },
      { label: found.name },
    ],
    stay: { checkIn: 'Thur, Dec 8', checkOut: 'Fri, Dec 9', nights: 1, room: 'Deluxe Double Room', guests: '2 adults' },
    priceDetails: [
      { label: 'Base Fare', value: found.price },
      { label: 'Discount', value: 0 },
      { label: 'Taxes', value: Math.round(found.price * 0.1) },
      { label: 'Service Fee', value: 12 },
    ],
    total: found.price + Math.round(found.price * 0.1) + 12,
    thumb: found.image ?? bookingThumb,
  }
}

export const hotelTicket = {
  guest: 'James Doe',
  voucher: 'Booking Voucher N’123',
  roomType: 'Deluxe Double Room',
  bookingCode: 'ABC12345',
  details: [
    { id: 'date', label: 'Booked on', value: 'Nov 12, 2022' },
    { id: 'time', label: 'Check-in', value: 'from 14:00' },
    { id: 'gate', label: 'Room', value: '128' },
    { id: 'seat', label: 'Guests', value: '2 adults' },
  ],
}
