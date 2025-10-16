import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Squad from '../components/FirstTeamFCMen/Squad'
import axios from 'axios'

vi.mock('axios')

const samplePlayers = [
  { _id: '1', firstname: 'Thibaut', surname: 'Courtois', number: 1, position: 'Goalkeeper' },
  { _id: '2', firstname: 'Dani', surname: 'Carvajal', number: 2, position: 'Defender' },
  { _id: '3', firstname: 'Luka', surname: 'Modric', number: 10, position: 'Midfielder' },
  { _id: '4', firstname: 'Vinicius', surname: 'Junior', number: 7, position: 'Forward' },
  { _id: '5', firstname: 'Carlo', surname: 'Ancelotti', position: 'Coach' },
]

describe('FirstTeamFCMen Squad API behavior', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders players after successful fetch', async () => {
    axios.get.mockResolvedValueOnce({ data: samplePlayers })
    render(
      <MemoryRouter>
        <Squad />
      </MemoryRouter>
    )
    // wait for one known surname to appear
    expect(await screen.findByText(/Courtois/i)).toBeInTheDocument()
    expect(screen.getByText(/Carvajal/i)).toBeInTheDocument()
    expect(screen.getByText(/Modric/i)).toBeInTheDocument()
    expect(screen.getByText(/Junior/i)).toBeInTheDocument()
  })

  it('handles API error gracefully (no crash, no spinner)', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network error'))
    const { container } = render(
      <MemoryRouter>
        <Squad />
      </MemoryRouter>
    )
    // The layout should still render section titles
    expect(await screen.findByText('Goalkeeper')).toBeInTheDocument()
    // No spinner should remain after error handling
    expect(container.querySelector('.spinner')).toBeNull()
  })
})
