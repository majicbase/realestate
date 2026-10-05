import { Link } from 'react-router-dom'
import { HomeIcon } from '../components/icons'

export default function NotFound() {
  return (
    <div className="container-premium py-24 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cream-100 flex items-center justify-center text-navy-300">
        <HomeIcon className="w-10 h-10" />
      </div>
      <h1 className="text-4xl font-bold text-navy mb-3">Page Not Found</h1>
      <p className="text-navy-300 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  )
}
