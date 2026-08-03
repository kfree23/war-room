import Badge from '../components/ui/Badge'
import '../styles/page.css'
import '../styles/coming-soon.css'

// TODO(krystal): you write this

export default function ShotChartsPage() {
  return (
    <div>
      <header className="page-header">
        <h1 className="page-header__title">Shot Charts</h1>
        <p className="page-header__subtitle">Shot location and efficiency visualizations</p>
      </header>

      <div className="coming-soon">
        <Badge variant="info">Coming Soon</Badge>
        <p className="coming-soon__text">
          Shot chart visualizations aren't wired up yet.
        </p>
      </div>
    </div>
  )
}
