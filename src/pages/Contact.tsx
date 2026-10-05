import { useState } from 'react'
import { PhoneIcon, MailIcon, MapPinIcon, ArrowRightIcon, CheckIcon } from '../components/icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    { icon: <PhoneIcon className="w-5 h-5" />, label: 'Phone', value: '+91 98765 43210' },
    { icon: <MailIcon className="w-5 h-5" />, label: 'Email', value: 'hello@everlight.com' },
    { icon: <MapPinIcon className="w-5 h-5" />, label: 'Office', value: '221B Premium Plaza, Bandra West, Mumbai 400050' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container-premium text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-3">WE'D LOVE TO HEAR FROM YOU</p>
          <h1 className="text-section font-bold text-navy mb-4">Get In Touch</h1>
          <p className="text-navy-300 text-lg">
            Have a question about a property or our services? Our team is here to help you every step of the way.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-premium grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Contact Information</h2>
            <div className="space-y-5 mb-8">
              {contactInfo.map(c => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center text-champagne-dark flex-shrink-0">{c.icon}</div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-navy-300 mb-1">{c.label}</div>
                    <div className="text-navy font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-64 bg-cream-100 border border-cream-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-navy-300">
                <div className="text-center">
                  <MapPinIcon className="w-12 h-12 mx-auto mb-2 text-champagne" />
                  <p className="font-medium">Bandra West, Mumbai</p>
                  <p className="text-sm">Interactive map would appear here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-cream-200 p-8 shadow-card">
            <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
            {submitted && (
              <div className="bg-champagne/10 text-champagne-dark text-sm rounded-lg p-3 mb-5 flex items-center gap-2">
                <CheckIcon className="w-4 h-4" /> Thank you! Your message has been sent. We'll respond within 24 hours.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label-field">Full Name</label>
                <input className="input-field" placeholder="John Doe" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              </div>
              <div>
                <label className="label-field">Email Address</label>
                <input type="email" className="input-field" placeholder="john@example.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>
              <div>
                <label className="label-field">Subject</label>
                <input className="input-field" placeholder="I'd like to know more about..." required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
              </div>
              <div>
                <label className="label-field">Message</label>
                <textarea className="input-field min-h-[140px] resize-none" placeholder="Tell us how we can help..." required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
              </div>
              <button type="submit" className="w-full btn-primary">Send Message <ArrowRightIcon className="w-4 h-4" /></button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
