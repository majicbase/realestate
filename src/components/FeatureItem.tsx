import type { ReactNode } from 'react'

interface Props {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureItem({ icon, title, description }: Props) {
  return (
    <div className="text-center sm:text-left group">
      <div className="w-14 h-14 rounded-2xl bg-cream-100 flex items-center justify-center text-champagne-dark mb-4 mx-auto sm:mx-0 transition-all duration-300 group-hover:bg-champagne group-hover:text-white">
        {icon}
      </div>
      <h3 className="font-bold text-navy mb-1.5">{title}</h3>
      <p className="text-sm text-navy-300 leading-relaxed">{description}</p>
    </div>
  )
}
