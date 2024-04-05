import { render, screen } from '@testing-library/react'
import { Detail } from './Detail'

describe('Detail', () => {
  it('should render Detail', () => {
    render(<Detail sunrise={1663540000} sunset={1634740000} />)
    expect(screen.getByText('Sunrise 7:05 AM')).toBeInTheDocument()
    expect(screen.getByText('Sunset 11:05 PM')).toBeInTheDocument()
  })

  it('should not render Detail if sunrise and sunset are not provided', () => {
    render(<Detail />)
    expect(screen.queryByText('Sunrise')).not.toBeInTheDocument()
    expect(screen.queryByText('Sunset')).not.toBeInTheDocument()
  })
})
