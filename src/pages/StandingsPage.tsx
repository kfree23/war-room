import StateWrapper from '../components/ui/StateWrapper'
import { useQuery } from '@tanstack/react-query'
import fetchStandings from '../services/api'
import './StandingsPage.css'



export default function StandingsPage() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['standings'],
    queryFn: fetchStandings
  })

  if(isLoading) {
    return <StateWrapper state='loading'>Loading...</StateWrapper>
  }

  if(isError) {
    return <StateWrapper state='error'>Error: {error?.message}</StateWrapper>
  }

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
