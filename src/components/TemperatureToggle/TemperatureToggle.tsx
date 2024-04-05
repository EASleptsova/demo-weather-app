import './TemperatureToggle.css'

type TemperatureToggleProps = {
  temperature: string
  setTemperature: React.Dispatch<React.SetStateAction<string>>
}

export function TemperatureToggle({
  temperature,
  setTemperature,
}: TemperatureToggleProps) {
  const handleTemperature = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(e.target.value === 'celsius' ? 'fahrenheit' : 'celsius')
  }
  return (
    <div className="temperature-toggle">
      <span>ºC</span>
      <label className="switch">
        <input
          type="checkbox"
          aria-labelledby="temperature-toggle"
          onChange={handleTemperature}
          value={temperature}
        />
        <span className="slider round"></span>
      </label>
      <span>ºF</span>
    </div>
  )
}
