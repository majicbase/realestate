import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { HomeIcon, ArrowRightIcon, ShieldIcon, SparkleIcon, BadgeIcon, HeadsetIcon } from '../components/icons'

const services = [
  { icon: <HomeIcon className="w-7 h-7" />, title: 'Buying a Property', description: 'Find and purchase your dream home with expert guidance, verified listings, and seamless paperwork support.' },
  { icon: <ArrowRightIcon className="w-7 h-7" />, title: 'Selling a Property', description: 'List your property with professional marketing, accurate valuation, and access to qualified buyers.' },
  { icon: <ShieldIcon className="w-7 h-7" />, title: 'Renting a Property', description: "Whether you're a landlord or tenant, we make renting simple with verified listings and transparent terms." },
  { icon: <SparkleIcon className="w-7 h-7" />, title: 'Property Management', description: 'Comprehensive management services including maintenance, tenant relations, and financial reporting.' },
  { icon: <BadgeIcon className="w-7 h-7" />, title: 'Investment Advisory', description: 'Strategic real estate investment advice tailored to your financial goals and risk profile.' },
  { icon: <HeadsetIcon className="w-7 h-7" />, title: 'Expert Consultation', description: 'One-on-one sessions with our senior advisors for personalized property guidance and market insights.' },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container-premium text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-3">WHAT WE OFFER</p>
          <h1 className="text-section font-bold text-navy mb-4">Our Services</h1>
          <p className="text-navy-300 text-lg">
            From buying your first home to managing a portfolio of investments, we provide end-to-end real estate services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="container-premium">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
