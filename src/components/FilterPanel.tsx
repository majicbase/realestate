import { useState } from 'react'
import { locations, propertyTypes, allAmenities } from '../data/properties'
import { SlidersIcon, CloseIcon, ChevronDownIcon } from './icons'
import type { FilterState } from '../types'

interface Props {
  filters: FilterState
  onChange: (filters: FilterState) => void
  onClear: () => void
  resultCount: number
}

export default function FilterPanel({ filters, onChange, onClear, resultCount }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const update = (key: keyof FilterState, value: any) => onChange({ ...filters, [key]: value })

  const toggleAmenity = (a: string) => {
    const list = filters.amenities.includes(a)
      ? filters.amenities.filter(x => x !== a)
      : [...filters.amenities, a]
    update('amenities', list)
  }

  const content = (
    <div className="space-y-5">
      {/* Search */}
      <div>
        <label className="label-field">Search</label>
        <input
          type="text"
          value={filters.search}
          onChange={e => update('search', e.target.value)}
          placeholder="Property name or location..."
          className="input-field"
        />
      </div>

      {/* Location */}
      <div>
        <label className="label-field">Location</label>
        <SelectInput value={filters.location} onChange={v => update('location', v)} options={locations} />
      </div>

      {/* Buy / Rent */}
      <div>
        <label className="label-field">Listing Type</label>
        <div className="flex gap-2">
          {['', 'For Sale', 'For Rent'].map(s => (
            <button
              key={s}
              onClick={() => update('status', s)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                filters.status === s ? 'bg-navy text-white' : 'bg-cream-50 text-navy-400 hover:bg-cream-100'
              }`}
            >
              {s || 'All'}
            </button>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <label className="label-field">Property Type</label>
        <SelectInput value={filters.type} onChange={v => update('type', v)} options={propertyTypes} />
      </div>

      {/* Price Range */}
      <div>
        <label className="label-field">Max Price: ₹{(filters.maxPrice / 10000000).toFixed(1)} Cr</label>
        <input
          type="range"
          min={0}
          max={100000000}
          step={5000000}
          value={filters.maxPrice}
          onChange={e => update('maxPrice', Number(e.target.value))}
          className="w-full accent-champagne"
        />
      </div>

      {/* Beds & Baths */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label-field">Min Beds</label>
          <SelectInput value={String(filters.beds)} onChange={v => update('beds', Number(v))} options={['0', '1', '2', '3', '4', '5', '6']} />
        </div>
        <div>
          <label className="label-field">Min Baths</label>
          <SelectInput value={String(filters.baths)} onChange={v => update('baths', Number(v))} options={['0', '1', '2', '3', '4', '5', '6']} />
        </div>
      </div>

      {/* Min Area */}
      <div>
        <label className="label-field">Min Area (sq ft)</label>
        <input
          type="number"
          value={filters.minArea || ''}
          onChange={e => update('minArea', Number(e.target.value))}
          placeholder="Any"
          className="input-field"
        />
      </div>

      {/* Amenities */}
      <div>
        <label className="label-field">Amenities</label>
        <div className="flex flex-wrap gap-2">
          {allAmenities.map(a => (
            <button
              key={a}
              onClick={() => toggleAmenity(a)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filters.amenities.includes(a) ? 'bg-champagne text-navy' : 'bg-cream-50 text-navy-400 hover:bg-cream-100'
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <button onClick={onClear} className="w-full btn-outline">Clear All Filters</button>
    </div>
  )

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:block sticky top-24 bg-white rounded-2xl shadow-card border border-cream-200 p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-navy flex items-center gap-2"><SlidersIcon className="w-5 h-5 text-champagne" /> Filters</h3>
          <span className="text-sm text-navy-300">{resultCount} results</span>
        </div>
        {content}
      </aside>

      {/* Mobile */}
      <div className="lg:hidden">
        <button onClick={() => setMobileOpen(true)} className="btn-outline w-full">
          <SlidersIcon className="w-4 h-4" /> Filters ({resultCount})
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative ml-auto w-full max-w-sm bg-cream h-full overflow-y-auto p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-navy flex items-center gap-2"><SlidersIcon className="w-5 h-5 text-champagne" /> Filters</h3>
              <button onClick={() => setMobileOpen(false)} className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-cream-100"><CloseIcon className="w-5 h-5 text-navy" /></button>
            </div>
            {content}
            <button onClick={() => setMobileOpen(false)} className="w-full btn-primary mt-4">Show {resultCount} Results</button>
          </div>
        </div>
      )}
    </>
  )
}

function SelectInput({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div className="relative">
      <select value={value} onChange={e => onChange(e.target.value)} className="input-field appearance-none pr-10 cursor-pointer">
        {options.map(o => <option key={o} value={o === 'All Locations' || o === 'All Types' ? '' : o}>{o}</option>)}
      </select>
      <ChevronDownIcon className="w-4 h-4 text-navy-300 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  )
}
