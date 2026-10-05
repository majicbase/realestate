import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { locations, propertyTypes, budgetRanges } from '../data/properties'
import { SearchIcon, ChevronDownIcon } from './icons'

export default function SearchBar() {
  const navigate = useNavigate()
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [budget, setBudget] = useState('')

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (location && location !== 'All Locations') params.set('location', location)
    if (type && type !== 'All Types') params.set('type', type)
    if (budget) params.set('budget', budget)
    navigate(`/properties?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-2xl shadow-premium p-2 sm:p-3 max-w-4xl">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <SearchField label="Location" value={location} onChange={setLocation} options={locations} />
        <SearchField label="Property Type" value={type} onChange={setType} options={propertyTypes} />
        <SearchField label="Budget" value={budget} onChange={setBudget} options={budgetRanges.map(b => b.label)} />
      </div>
      <button onClick={handleSearch} className="w-full mt-2 sm:mt-0 sm:w-auto sm:absolute sm:right-3 sm:top-1/2 sm:-translate-y-1/2 btn-primary sm:px-5 sm:py-3.5">
        <SearchIcon className="w-5 h-5" />
        <span className="sm:hidden">Search Properties</span>
      </button>
    </div>
  )
}

function SearchField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div className="relative">
      <label className="block text-[10px] font-semibold uppercase tracking-wider text-navy-400 px-3 pt-2.5 mb-0.5">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-cream-50 border-0 rounded-xl px-3 pb-3 pt-0.5 text-sm text-navy font-medium focus:outline-none cursor-pointer"
        >
          <option value="">Any</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDownIcon className="w-4 h-4 text-navy-300 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  )
}
