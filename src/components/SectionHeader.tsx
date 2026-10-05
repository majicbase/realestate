interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  action?: React.ReactNode
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left', action }: Props) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end gap-4 mb-10 ${align === 'center' ? 'sm:justify-center text-center' : 'sm:justify-between'}`}>
      <div className={align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="text-section font-bold text-navy">{title}</h2>
        {subtitle && <p className="text-navy-300 mt-3 text-lg">{subtitle}</p>}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  )
}
