import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('App', () => {
  it('renders Sign in button', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument()
  })

  it('navigates to Madridistas page', () => {
    render(
      <MemoryRouter initialEntries={["/madridistas"]}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText(/Madridistas Page/i)).toBeInTheDocument()
  })
})
