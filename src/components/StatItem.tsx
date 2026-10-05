interface Props {
  value: string
  label: string
}

export default function StatItem({ value, label }: Props) {
  return (
    <div>
      <div className="text-4xl lg:text-5xl font-bold text-gold-light">{value}</div>
      <div className="text-sm text-navy-200 mt-1">{label}</div>
    </div>
  )
}
