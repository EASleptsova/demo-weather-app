import { useState, useEffect } from 'react'
import { SelectCity } from '../SelectCity'
import { TemperatureToggle } from '../TemperatureToggle'
import { Detail } from '../Detail'
import { Temperature } from '../Temperature'
import './WeatherApp.css'

type WeatherData = {
  main: {
    temp: number
  }
  sys: {
    sunrise: number
    sunset: number
  }
  weather: {
    icon: string
  }[]
}

export function WeatherApp() {
  const [temperature, setTemperature] = useState('celsius')
  const [city, setCity] = useState('Lisbon')
  const [data, setData] = useState<WeatherData | null>(null)

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_API_KEY}&q=${city}`
    ).then((response) => {
      response.json().then((data) => {
        setData(data)
      })
    })
  }, [city])

  return (
    <div className="weather-app">
      <section className="weather-app-top-section">
        <SelectCity city={city} setCity={setCity} />
        <TemperatureToggle
          temperature={temperature}
          setTemperature={setTemperature}
        />
      </section>

      <Temperature temp={data?.main?.temp} temperature={temperature} />

      {data?.weather?.[0]?.icon && (
        <img
          alt="weather icon"
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
        />
      )}

      <Detail sunrise={data?.sys?.sunrise} sunset={data?.sys?.sunset} />
    </div>
  )
}
