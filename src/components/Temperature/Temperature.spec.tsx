import { render, screen } from '@testing-library/react'
import { Temperature } from './Temperature'

describe('Temperature', () => {
  it('should render Temperature', () => {
    render(<Temperature temperature="celsius" temp={280} />)
    expect(screen.getByText('ºC')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
  })

  it('should not render Temperature if temp is not provided', () => {
    render(<Temperature temperature="celsius" />)
    expect(screen.queryByText('ºC')).not.toBeInTheDocument()
    expect(screen.queryByText('ºF')).not.toBeInTheDocument()
  })
})
