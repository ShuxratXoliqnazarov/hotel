import istanbul from '@/assets/images/landing/istanbul.jpg'
import sydney from '@/assets/images/landing/sydney.jpg'
import baku from '@/assets/images/landing/baku.jpg'
import male from '@/assets/images/landing/male.jpg'
import paris from '@/assets/images/landing/paris.jpg'
import newYork from '@/assets/images/landing/new-york.jpg'
import london from '@/assets/images/landing/london.jpg'
import tokyo from '@/assets/images/landing/tokyo.jpg'
import dubai from '@/assets/images/landing/dubai.jpg'
import review1 from '@/assets/images/landing/review-1.jpg'
import review2 from '@/assets/images/landing/review-2.jpg'
import review3 from '@/assets/images/landing/review-3.jpg'
import promoFlights from '@/assets/images/landing/promo-flights.jpg'
import promoHotels from '@/assets/images/landing/promo-hotels.jpg'

// imagePosition повторяет кадрирование картинки из Figma
export const destinations = [
  { city: 'Istanbul, Turkey', image: istanbul },
  { city: 'Sydney, Australia', image: sydney },
  { city: 'Baku, Azerbaijan', image: baku },
  { city: 'Malé, Maldives', image: male },
  { city: 'Paris, France', image: paris, imagePosition: '50% 87%' },
  { city: 'New York, US', image: newYork },
  { city: 'London, UK', image: london },
  { city: 'Tokyo, Japan', image: tokyo, imagePosition: '63% 6%' },
  { city: 'Dubai, UAE', image: dubai },
]

export const promos = [
  {
    title: 'Flights',
    text: 'Search Flights & Places Hire to our most popular destinations',
    button: 'Show Filghts',
    to: '/flights',
    image: promoFlights,
    imagePosition: '0% 50%',
  },
  {
    title: 'Hotels',
    text: 'Search hotels & Places Hire to our most popular destinations',
    button: 'Show Hotels',
    to: '/hotels',
    image: promoHotels,
    imagePosition: '50% 74%',
  },
]

const REVIEW_TEXT =
  'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.'

export const reviews = [
  {
    id: 1,
    title: '“A real sense of community, nurtured”',
    text: REVIEW_TEXT,
    author: 'Olga',
    place: 'Weave Studios – Kai Tak',
    rating: 5,
    image: review1,
  },
  {
    id: 2,
    title: '“The facilities are superb. Clean, slick, bright.”',
    text: `“A real sense of community, nurtured”${REVIEW_TEXT}`,
    author: 'Thomas',
    place: 'Weave Studios – Olympic',
    rating: 5,
    image: review2,
  },
  {
    id: 3,
    title: '“A real sense of community, nurtured”',
    text: REVIEW_TEXT,
    author: 'Eliot',
    place: 'Weave Studios – Kai Tak',
    rating: 5,
    image: review3,
  },
]
