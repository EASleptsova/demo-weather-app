import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SelectCity } from './SelectCity'

const mockSetCity = jest.fn()

describe('SelectCity', () => {
  it('should render SelectCity', () => {
    render(<SelectCity city="Lisbon" setCity={mockSetCity} />)
    expect(screen.getByText('London')).toBeInTheDocument()
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Lisbon')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    userEvent.selectOptions(screen.getByRole('combobox'), 'New York')
    expect(mockSetCity).toHaveBeenCalledWith('New York')
  })
})
