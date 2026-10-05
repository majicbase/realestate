import { Link } from 'react-router-dom'
import { HomeIcon, FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, PhoneIcon, MailIcon, MapPinIcon } from './icons'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Properties', path: '/properties' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-champagne flex items-center justify-center">
                <HomeIcon className="w-5 h-5 text-navy" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg tracking-tight">Everlight Homes</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne-light">Buy · Sell · Rent</span>
              </div>
            </Link>
            <p className="text-sm text-navy-200 leading-relaxed max-w-xs">
              Premium real estate for buying, selling, and renting properties. Find your dream home with confidence.
            </p>
            <div className="flex gap-3 mt-5">
              {[FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-navy-600 flex items-center justify-center text-navy-200 hover:bg-champagne hover:text-navy transition-all duration-300" aria-label="Social media">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-champagne-light mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-navy-200 hover:text-champagne-light transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-champagne-light mb-5">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-navy-200">
              <li className="flex items-start gap-2.5"><PhoneIcon className="w-4 h-4 mt-0.5 text-champagne flex-shrink-0" /> +91 98765 43210</li>
              <li className="flex items-start gap-2.5"><MailIcon className="w-4 h-4 mt-0.5 text-champagne flex-shrink-0" /> hello@everlight.com</li>
              <li className="flex items-start gap-2.5"><MapPinIcon className="w-4 h-4 mt-0.5 text-champagne flex-shrink-0" /> 221B Premium Plaza, Bandra West, Mumbai 400050</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-champagne-light mb-5">Stay Updated</h4>
            <p className="text-sm text-navy-200 mb-4">Get the latest property listings and market insights.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 bg-navy-600 border border-navy-500 rounded-lg px-4 py-2.5 text-sm text-white placeholder-navy-300 focus:outline-none focus:border-champagne" />
              <button className="bg-champagne text-navy px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-champagne-dark transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-600">
        <div className="container-premium py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-300">© 2025 Everlight Homes. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-navy-300">
            <a href="#" className="hover:text-champagne-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-champagne-light transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
