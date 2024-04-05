import { render, screen } from '@testing-library/react'
import { WeatherApp } from './WeatherApp'

describe('WeatherApp', () => {
  it('should render without error', () => {
    const mockResponse = {
      main: {
        temp: 288.15,
      },
      sys: {
        sunrise: 1631739360,
        sunset: 1631784448,
      },
      weather: [
        {
          icon: '01d',
        },
      ],
    }
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    })

    render(<WeatherApp />)
    expect(screen.getByText('Lisbon')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.openweathermap.org/data/2.5/weather?appid=7a51e573a60d0b8d80b63f39d60a84f0&q=Lisbon'
    )
  })
})
