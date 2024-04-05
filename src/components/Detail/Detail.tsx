import './Detail.css'

type DetailProps = {
  sunrise?: number
  sunset?: number
}

export function Detail({ sunrise, sunset }: DetailProps) {
  if (!sunrise || !sunset) return null

  return (
    <div className="detail">
      <span>
        Sunrise{' '}
        {new Date(sunrise).toLocaleTimeString([], {
          timeStyle: 'short',
        })}
      </span>
      <span>
        Sunset{' '}
        {new Date(sunset).toLocaleTimeString([], {
          timeStyle: 'short',
        })}
      </span>
    </div>
  )
}
