import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import TrophyRecord from '../components/TrophyTrackRecord/TrophyRecord'

describe('TrophyRecord toggles', () => {
  it('shows Football records by default, then switches to Basketball', () => {
    render(
      <MemoryRouter>
        <TrophyRecord />
      </MemoryRouter>
    )
    // Football default
    expect(screen.getByText(/European Cups/i)).toBeInTheDocument()
    // Switch to Basketball
    fireEvent.click(screen.getByText('Basketball'))
    expect(screen.getByText(/ULEB Cup/i)).toBeInTheDocument()
  })
})
