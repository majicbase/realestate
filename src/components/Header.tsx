import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { HomeIcon, HeartIcon, UserIcon, ArrowRightIcon, MenuIcon, CloseIcon } from './icons'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Properties', path: '/properties' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { favorites } = useFavorites()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-cream/80 backdrop-blur-sm'}`}>
      <div className="container-premium">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center group-hover:bg-navy-600 transition-colors">
              <HomeIcon className="w-5 h-5 text-champagne" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-navy text-lg tracking-tight">Everlight</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne-dark">Buy · Sell · Rent</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-navy bg-cream-100' : 'text-navy-400 hover:text-navy hover:bg-cream-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/favorites" className="relative w-10 h-10 rounded-lg flex items-center justify-center text-navy-400 hover:text-champagne-dark hover:bg-cream-100 transition-colors" aria-label="Favorites">
              <HeartIcon className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-champagne text-navy text-[10px] font-bold rounded-full flex items-center justify-center">{favorites.length}</span>
              )}
            </Link>
            <button className="hidden sm:flex w-10 h-10 rounded-lg items-center justify-center text-navy-400 hover:text-champagne-dark hover:bg-cream-100 transition-colors" aria-label="Profile">
              <UserIcon className="w-5 h-5" />
            </button>
            <Link to="/properties" className="hidden sm:inline-flex btn-primary">
              Get Started <ArrowRightIcon className="w-4 h-4" />
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-navy hover:bg-cream-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-cream-200 bg-white animate-fade-in">
          <nav className="container-premium py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-navy bg-cream-100' : 'text-navy-400 hover:bg-cream-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/properties" className="btn-primary mt-2">Get Started <ArrowRightIcon className="w-4 h-4" /></Link>
          </nav>
        </div>
      )}
    </header>
  )
}
