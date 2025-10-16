import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('Routing via NavLinks', () => {
  it('navigates to Tour page when clicking Tour', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    )
    const tourLinks = screen.getAllByRole('link', { name: /^tour$/i })
    fireEvent.click(tourLinks[0])
    expect(screen.getByText(/Organise your visit/i)).toBeInTheDocument()
  })

  it('loads Tickets page on direct route', () => {
    render(
      <MemoryRouter initialEntries={["/tickets"]}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText(/Tickets Page/i)).toBeInTheDocument()
  })
})
