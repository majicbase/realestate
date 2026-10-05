import CTASection from '../components/CTASection'
import StatItem from '../components/StatItem'
import { ArrowRightIcon, ShieldIcon, BadgeIcon, HeadsetIcon, HeartIcon, SparkleIcon } from '../components/icons'
import { Link } from 'react-router-dom'

const stats = [
  { value: '12K+', label: 'Happy Clients' },
  { value: '500+', label: 'Properties Listed' },
  { value: '25+', label: 'Cities' },
  { value: '98%', label: 'Success Rate' },
]

const values = [
  { icon: <ShieldIcon className="w-6 h-6" />, title: 'Integrity', description: 'We operate with complete transparency and honesty in every transaction.' },
  { icon: <BadgeIcon className="w-6 h-6" />, title: 'Excellence', description: 'We strive for the highest quality in everything we do.' },
  { icon: <HeadsetIcon className="w-6 h-6" />, title: 'Client First', description: 'Your needs guide every decision we make.' },
  { icon: <HeartIcon className="w-6 h-6" />, title: 'Passion', description: 'We love what we do, and it shows in our results.' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 lg:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1600&q=80" alt="Luxury interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="eyebrow text-champagne-light mb-3">OUR STORY</p>
            <h1 className="text-4xl lg:text-5xl font-bold">About Everlight Homes</h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container-premium grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">WHO WE ARE</p>
            <h2 className="text-section font-bold text-navy mb-5">A New Standard in Real Estate</h2>
            <p className="text-navy-300 leading-relaxed mb-4">
              Founded in 2015, Everlight Homes began with a simple vision: to make finding the perfect home a seamless, joyful experience. We saw an industry ripe for change — one where technology and human expertise could come together to serve clients better.
            </p>
            <p className="text-navy-300 leading-relaxed mb-4">
              Today, we're one of India's most trusted real estate platforms, with over 500 verified listings across 25+ cities. Our team of experienced advisors has helped more than 12,000 families find their dream homes.
            </p>
            <p className="text-navy-300 leading-relaxed">
              But we're more than just a property platform. We're your partners in one of life's most important decisions.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden h-80 lg:h-[480px] shadow-premium">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80" alt="Modern home" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="container-premium text-center max-w-3xl mx-auto">
          <SparkleIcon className="w-10 h-10 text-champagne mx-auto mb-5" />
          <p className="eyebrow text-champagne-light mb-4">OUR MISSION</p>
          <h2 className="text-2xl lg:text-3xl font-bold leading-relaxed">
            "To empower every person to find a place they truly belong — by making property discovery transparent, effortless, and deeply personal."
          </h2>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container-premium">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">WHAT WE STAND FOR</p>
            <h2 className="text-section font-bold text-navy">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(v => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-cream-100 flex items-center justify-center text-champagne-dark mx-auto mb-4">{v.icon}</div>
                <h3 className="font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container-premium">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(s => <div key={s.label} className="text-center"><StatItem {...s} /></div>)}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
