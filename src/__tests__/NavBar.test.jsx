import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('NavBar interactions', () => {
  it('opens Sign In modal on click', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }))
    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument()
  })

  it('opens main menu and shows Schedule link', () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    )
    const menuIcon = container.querySelector('.menuIcon')
    expect(menuIcon).toBeTruthy()
    fireEvent.click(menuIcon)
    const links = screen.getAllByRole('link', { name: 'Schedule' })
    expect(links.length).toBeGreaterThan(0)
  })
})
