import { Link } from 'react-router-dom'
import PropertyGrid from '../components/PropertyGrid'
import SectionHeader from '../components/SectionHeader'
import { ArrowRightIcon } from '../components/icons'
import { properties } from '../data/properties'

export default function FeaturedProperties() {
  const featured = properties.filter(p => p.featured)

  return (
    <section className="py-16 lg:py-24">
      <div className="container-premium">
        <SectionHeader
          eyebrow="FEATURED PROPERTIES"
          title="Handpicked Homes for You"
          action={
            <Link to="/properties" className="inline-flex items-center gap-1.5 text-sm font-semibold text-champagne-dark hover:text-navy transition-colors">
              View All Properties <ArrowRightIcon className="w-4 h-4" />
            </Link>
          }
        />
        <PropertyGrid properties={featured} />
      </div>
    </section>
  )
}
