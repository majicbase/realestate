import SearchBar from '../components/SearchBar'
import { ArrowRightIcon } from '../components/icons'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-premium pt-12 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-5">PREMIUM PROPERTIES. BETTER LIVING.</p>
            <h1 className="text-hero font-bold text-navy">
              Find Your<br />
              Dream Home{' '}
              <span className="font-script text-champagne-dark text-5xl lg:text-6xl">with Everlight</span>
            </h1>
            <p className="text-lg text-navy-300 mt-6 max-w-md leading-relaxed">
              Discover modern homes, prime locations, and lifestyle-driven communities — all in one place.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/properties" className="btn-primary">
                Browse Properties <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline">Talk to an Expert</Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden h-72 sm:h-96 lg:h-[520px] shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury villa at sunset"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-2xl shadow-premium p-4 sm:p-5 flex items-center gap-4 max-w-[260px]">
              <div className="w-12 h-12 rounded-xl bg-champagne/20 flex items-center justify-center text-champagne-dark font-bold text-lg">98%</div>
              <div>
                <div className="font-bold text-navy text-sm">Success Rate</div>
                <div className="text-xs text-navy-300">Happy clients finding homes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mt-12 lg:mt-16">
          <SearchBar />
        </div>
      </div>
    </section>
  )
}
