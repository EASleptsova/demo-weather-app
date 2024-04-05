import './Temperature.css'

type TemperatureProps = {
  temp?: number
  temperature: string
}

export function Temperature({ temp, temperature }: TemperatureProps) {
  if (!temp) return null

  const getTemperature = (temp: number) => {
    /* Convert kelvin to celsius */
    if (temperature === 'celsius') {
      return (temp - 273.15).toFixed(0)
    }
    /* Convert kelvin to fahrenheit */
    return ((temp - 273.15) * (9 / 5) + 32).toFixed(0)
  }

  return (
    <div className="current-temperature">
      {getTemperature(temp)}
      <span>{temperature === 'celsius' ? ' ºC' : ' ºF'}</span>
    </div>
  )
}
