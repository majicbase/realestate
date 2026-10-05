import { Link } from 'react-router-dom'
import { ArrowRightIcon } from './icons'

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-premium">
        <div className="relative rounded-3xl overflow-hidden bg-navy">
          {/* Background image on right */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/40 lg:to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury apartment"
              className="w-full h-full object-cover opacity-30 lg:opacity-60"
            />
          </div>
          <div className="relative grid lg:grid-cols-2 items-center gap-8 p-8 sm:p-12 lg:p-16">
            <div>
              <p className="eyebrow mb-4">READY TO FIND YOUR PERFECT HOME?</p>
              <h2 className="text-section font-bold text-white mb-4">Let's Make It Happen</h2>
              <p className="text-navy-200 text-lg mb-8 max-w-md">
                Explore the best properties, get expert advice, and take the next step towards your dream home.
              </p>
              <Link to="/properties" className="btn-accent">
                Get Started <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
