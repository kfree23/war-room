import Badge from '../components/ui/Badge'
import '../styles/page.css'
import '../styles/coming-soon.css'

// TODO(krystal): you write this

export default function ScoutingPage() {
  return (
    <div>
      <header className="page-header">
        <h1 className="page-header__title">Scouting</h1>
        <p className="page-header__subtitle">Prospect reports and evaluation notes</p>
      </header>

      <div className="coming-soon">
        <Badge variant="info">Coming Soon</Badge>
        <p className="coming-soon__text">
          Scouting reports aren't wired up yet.
        </p>
      </div>
    </div>
  )
}
