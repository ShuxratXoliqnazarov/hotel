/** Бейдж рейтинга «4.2 Very Good 54 reviews». */
export default function Rating({ score, label = 'Very Good', reviews }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-8 w-10 place-items-center rounded border border-primary text-xs font-medium transition-colors duration-500 hover:bg-primary">
        {score}
      </span>
      <p className="text-xs">
        <span className="font-bold">{label}</span> <span className="font-medium">{reviews} reviews</span>
      </p>
    </div>
  )
}
