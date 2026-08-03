import Badge from '../components/ui/Badge'
import '../styles/page.css'
import '../styles/coming-soon.css'

// TODO(krystal): you write this

export default function DraftBoardPage() {
  return (
    <div>
      <header className="page-header">
        <h1 className="page-header__title">Draft Board</h1>
        <p className="page-header__subtitle">Draft rankings and big board management</p>
      </header>

      <div className="coming-soon">
        <Badge variant="info">Coming Soon</Badge>
        <p className="coming-soon__text">
          The draft board isn't wired up yet.
        </p>
      </div>
    </div>
  )
}
