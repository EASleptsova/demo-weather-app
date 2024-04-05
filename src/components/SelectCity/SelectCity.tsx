import './SelectCity.css'

type SelectProps = {
  city: string
  setCity: React.Dispatch<React.SetStateAction<string>>
}

export function SelectCity({ city, setCity }: SelectProps) {
  return (
    <select
      className="select-cities"
      aria-labelledby="select-city"
      onChange={(e) => setCity(e.target.value)}
      value={city}
    >
      <option value="London">London</option>
      <option value="New York">New York</option>
      <option value="Lisbon">Lisbon</option>
    </select>
  )
}
