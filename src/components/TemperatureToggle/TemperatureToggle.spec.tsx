import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TemperatureToggle } from './TemperatureToggle'

const mockSetTemperature = jest.fn()

describe('TemperatureToggle', () => {
  it('should render TemperatureToggle', () => {
    render(
      <TemperatureToggle
        temperature="celsius"
        setTemperature={mockSetTemperature}
      />
    )
    expect(screen.getByText('ºC')).toBeInTheDocument()
    expect(screen.getByText('ºF')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    userEvent.click(screen.getByRole('checkbox'))
    expect(mockSetTemperature).toHaveBeenCalledWith('fahrenheit')
  })
})
