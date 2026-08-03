import StateWrapper from '../components/ui/StateWrapper'
import './StandingsPage.css'

// TODO(krystal): fetch standings data (services/api.ts) and wire up
// TanStack Query here — useQuery, loading/error/data states, etc.

export default function StandingsPage() {
  return (
    <div className="standings-page">
      <header className="page-header">
        <h1 className="page-header__title">Standings</h1>
        <p className="page-header__subtitle">League standings by conference and division</p>
      </header>

      {/* TODO(krystal): replace state="empty" with your query's derived state */}
      <StateWrapper state="empty" emptyLabel="No standings data loaded yet.">
        {/* TODO(krystal): you write this — table/list of TeamEntry / Standing rows */}
      </StateWrapper>
    </div>
  )
}
