import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import PropertyGallery from '../components/PropertyGallery'
import FavoriteButton from '../components/FavoriteButton'
import { properties } from '../data/properties'
import { BedIcon, BathIcon, AreaIcon, MapPinIcon, CarIcon, CalendarIcon, CheckIcon, PhoneIcon, MailIcon, ArrowRightIcon, StarIcon } from '../components/icons'

export default function PropertyDetails() {
  const { id } = useParams()
  const property = properties.find(p => p.id === id)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  if (!property) {
    return (
      <div className="container-premium py-20 text-center">
        <h1 className="text-2xl font-bold text-navy mb-4">Property not found</h1>
        <Link to="/properties" className="btn-primary">Back to Properties</Link>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="py-8 lg:py-12">
      <div className="container-premium">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-navy-300 mb-6">
          <Link to="/" className="hover:text-navy">Home</Link>
          <span>/</span>
          <Link to="/properties" className="hover:text-navy">Properties</Link>
          <span>/</span>
          <span className="text-navy font-medium">{property.title}</span>
        </nav>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Main content */}
          <div>
            <PropertyGallery images={property.gallery} title={property.title} />

            {/* Title & price */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mt-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${property.status === 'For Sale' ? 'bg-navy text-white' : 'bg-champagne text-navy'}`}>
                    {property.status}
                  </span>
                  <span className="text-sm text-navy-300">{property.type}</span>
                </div>
                <h1 className="text-3xl font-bold text-navy">{property.title}</h1>
                <div className="flex items-center gap-1.5 text-navy-300 mt-2">
                  <MapPinIcon className="w-4 h-4" /> {property.location}
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-navy">{property.priceUnit}</div>
                <FavoriteButton id={property.id} size="lg" variant="dark" />
              </div>
            </div>

            {/* Key specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 p-6 bg-white rounded-2xl border border-cream-200">
              {[
                { icon: <BedIcon className="w-5 h-5" />, label: 'Bedrooms', value: property.beds },
                { icon: <BathIcon className="w-5 h-5" />, label: 'Bathrooms', value: property.baths },
                { icon: <AreaIcon className="w-5 h-5" />, label: 'Area', value: `${property.area.toLocaleString()} sq ft` },
                { icon: <CarIcon className="w-5 h-5" />, label: 'Parking', value: property.parking },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center text-champagne-dark mx-auto mb-2">{s.icon}</div>
                  <div className="font-bold text-navy">{s.value}</div>
                  <div className="text-xs text-navy-300">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy mb-3">About this property</h2>
              <p className="text-navy-300 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map(a => (
                  <div key={a} className="flex items-center gap-2 text-sm text-navy-400">
                    <span className="w-5 h-5 rounded-full bg-champagne/20 flex items-center justify-center text-champagne-dark flex-shrink-0">
                      <CheckIcon className="w-3 h-3" />
                    </span>
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy mb-4">Property Features</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-navy-400">
                    <span className="w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center text-navy flex-shrink-0">
                      <CheckIcon className="w-3 h-3" />
                    </span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy mb-4">Location</h2>
              <div className="rounded-2xl overflow-hidden h-72 bg-cream-100 border border-cream-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-navy-300">
                  <div className="text-center">
                    <MapPinIcon className="w-12 h-12 mx-auto mb-2 text-champagne" />
                    <p className="font-medium">{property.location}</p>
                    <p className="text-sm">Interactive map would appear here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Agent & Contact */}
          <div>
            <div className="sticky top-24 space-y-4">
              {/* Agent card */}
              <div className="bg-white rounded-2xl border border-cream-200 p-6 shadow-card">
                <h3 className="font-bold text-navy mb-4">Listed by</h3>
                <div className="flex items-center gap-4 mb-5">
                  <img src={property.agent.image} alt={property.agent.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-navy">{property.agent.name}</div>
                    <div className="text-sm text-navy-300">{property.agent.title}</div>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-3.5 h-3.5 text-champagne" />)}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-5">
                  <a href={`tel:${property.agent.phone}`} className="flex items-center gap-2.5 text-sm text-navy-400 hover:text-navy transition-colors">
                    <PhoneIcon className="w-4 h-4 text-champagne" /> {property.agent.phone}
                  </a>
                  <a href={`mailto:${property.agent.email}`} className="flex items-center gap-2.5 text-sm text-navy-400 hover:text-navy transition-colors">
                    <MailIcon className="w-4 h-4 text-champagne" /> {property.agent.email}
                  </a>
                </div>
                <button className="w-full btn-primary mb-2">
                  <CalendarIcon className="w-4 h-4" /> Schedule a Viewing
                </button>
                <button className="w-full btn-outline">Call Agent</button>
              </div>

              {/* Contact form */}
              <div className="bg-white rounded-2xl border border-cream-200 p-6 shadow-card">
                <h3 className="font-bold text-navy mb-4">Contact Agent</h3>
                {submitted && (
                  <div className="bg-champagne/10 text-champagne-dark text-sm rounded-lg p-3 mb-4 flex items-center gap-2">
                    <CheckIcon className="w-4 h-4" /> Message sent! We'll be in touch soon.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input className="input-field" placeholder="Your Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  <input type="email" className="input-field" placeholder="Your Email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  <input className="input-field" placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                  <textarea className="input-field min-h-[100px] resize-none" placeholder="I'm interested in this property..." required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                  <button type="submit" className="w-full btn-accent">Send Message <ArrowRightIcon className="w-4 h-4" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
