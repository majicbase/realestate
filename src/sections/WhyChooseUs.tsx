import StatItem from '../components/StatItem'
import { ArrowRightIcon } from '../components/icons'
import { Link } from 'react-router-dom'

const stats = [
  { value: '12K+', label: 'Happy Clients' },
  { value: '500+', label: 'Properties Listed' },
  { value: '25+', label: 'Cities' },
  { value: '98%', label: 'Success Rate' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image with overlay text */}
          <div className="relative rounded-3xl overflow-hidden h-80 sm:h-96 lg:h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury living room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="font-script text-5xl lg:text-6xl text-white leading-tight">
                More<br />Than Just<br />a Home
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="eyebrow mb-4">WHY CHOOSE EVERLIGHT</p>
            <h2 className="text-section font-bold text-navy mb-4">
              More Than Properties.<br />We Build Futures.
            </h2>
            <p className="text-navy-300 text-lg leading-relaxed mb-8">
              Everlight helps you buy, sell, and rent properties with confidence. Our team of experts brings deep market knowledge, personalized service, and a commitment to finding the perfect match for your lifestyle and investment goals.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map(s => <StatItem key={s.label} {...s} />)}
            </div>
            <Link to="/about" className="btn-accent">
              Get Started <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
