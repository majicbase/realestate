import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { properties } from '../data/properties'
import PropertyGrid from '../components/PropertyGrid'
import { HeartIcon, ArrowRightIcon } from '../components/icons'

export default function Favorites() {
  const { favorites } = useFavorites()
  const favProperties = properties.filter(p => favorites.includes(p.id))

  return (
    <div className="py-12 lg:py-16">
      <div className="container-premium">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">YOUR SAVED PROPERTIES</p>
          <h1 className="text-section font-bold text-navy mb-3">Favorites</h1>
          <p className="text-navy-300">
            {favProperties.length > 0
              ? `You have ${favProperties.length} saved ${favProperties.length === 1 ? 'property' : 'properties'}.`
              : 'Save properties you love to find them here later.'}
          </p>
        </div>

        {favProperties.length > 0 ? (
          <PropertyGrid properties={favProperties} />
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-cream-100 flex items-center justify-center text-navy-300">
              <HeartIcon className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">No favorites yet</h3>
            <p className="text-navy-300 mb-6 max-w-md mx-auto">
              Browse our properties and tap the heart icon to save your favorites here.
            </p>
            <Link to="/properties" className="btn-primary">
              Browse Properties <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
