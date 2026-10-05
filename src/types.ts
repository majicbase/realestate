export type PropertyStatus = 'For Sale' | 'For Rent'

export interface Property {
  id: string
  title: string
  location: string
  city: string
  state: string
  price: number
  priceUnit: string
  status: PropertyStatus
  type: string
  beds: number
  baths: number
  area: number
  image: string
  gallery: string[]
  description: string
  amenities: string[]
  features: string[]
  agent: {
    name: string
    title: string
    phone: string
    email: string
    image: string
  }
  featured?: boolean
  yearBuilt: number
  parking: number
}

export interface FilterState {
  location: string
  status: string
  type: string
  minPrice: number
  maxPrice: number
  beds: number
  baths: number
  minArea: number
  amenities: string[]
  search: string
}

export const defaultFilters: FilterState = {
  location: '',
  status: '',
  type: '',
  minPrice: 0,
  maxPrice: 100000000,
  beds: 0,
  baths: 0,
  minArea: 0,
  amenities: [],
  search: '',
}
