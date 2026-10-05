import FeatureItem from '../components/FeatureItem'
import { BadgeIcon, ShieldIcon, HeadsetIcon, HeartIcon } from '../components/icons'

const features = [
  { icon: <BadgeIcon className="w-7 h-7" />, title: 'Verified Listings', description: '100% genuine listings with verified owners.' },
  { icon: <ShieldIcon className="w-7 h-7" />, title: 'Trusted & Secure', description: 'Safe transactions with complete transparency.' },
  { icon: <HeadsetIcon className="w-7 h-7" />, title: 'Expert Support', description: 'Guidance at every step of your journey.' },
  { icon: <HeartIcon className="w-7 h-7" />, title: 'Better Living', description: 'Find a home that fits your lifestyle.' },
]

export default function TrustFeatures() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-cream-200">
      <div className="container-premium">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {features.map(f => <FeatureItem key={f.title} {...f} />)}
        </div>
      </div>
    </section>
  )
}
