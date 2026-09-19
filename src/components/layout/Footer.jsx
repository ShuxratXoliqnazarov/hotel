import Logo from './Logo'
import Newsletter from './Newsletter'
import FacebookIcon from '@/assets/icons/facebook.svg?react'
import TwitterIcon from '@/assets/icons/twitter.svg?react'
import YoutubeIcon from '@/assets/icons/youtube.svg?react'
import InstagramIcon from '@/assets/icons/instagram.svg?react'

const SOCIALS = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Twitter', icon: TwitterIcon },
  { label: 'YouTube', icon: YoutubeIcon },
  { label: 'Instagram', icon: InstagramIcon },
]

const LINK_GROUPS = [
  { title: 'Our Destinations', links: ['Canada', 'Alaksa', 'France', 'Iceland'] },
  { title: 'Our Activities', links: ['Northern Lights', 'Cruising & sailing', 'Multi-activities', 'Kayaing'] },
  { title: 'Travel Blogs', links: ['Bali Travel Guide', 'Sri Lanks Travel Guide', 'Peru Travel Guide', 'Bali Travel Guide'] },
  { title: 'About Us', links: ['Our Story', 'Work with us'] },
  { title: 'Contact Us', links: ['Our Story', 'Work with us'] },
]

/** Подвал: карточка подписки «наезжает» на мятный фон (151px прозрачного сверху). */
export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(to_bottom,transparent_151px,var(--color-primary)_151px)]">
      <div className="container-page flex flex-col gap-16 pb-16">
        <Newsletter />

        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-6">
            <Logo accent="#112211" />
            <ul className="flex gap-3">
              {SOCIALS.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <a href="#" aria-label={label} className="block transition-transform duration-500 hover:-translate-y-1 hover:scale-110">
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:flex">
            {LINK_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col gap-4 lg:w-[175px]">
                <h3 className="font-heading text-base leading-5">{group.title}</h3>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link, index) => (
                    <li key={`${link}-${index}`}>
                      <a href="#" className="inline-block text-sm font-medium text-ink/70 transition-all duration-500 hover:translate-x-1 hover:text-ink">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
