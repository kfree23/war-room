import StateWrapper from '../components/ui/StateWrapper'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import fetchStandings from '../services/api'
import type { StandingRow } from '../types/index';
import './StandingsPage.css'



export default function StandingsPage() {
  const [conference, setConference] = useState<'all' | 'east' | 'west'>('all');
  const [sortKey, setSortKey] = useState<string>('wins');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['standings'],
    queryFn: fetchStandings
  })

  if (isLoading) {
    return <StateWrapper state='loading'>Loading...</StateWrapper>
  }

  if (isError) {
    return <StateWrapper state='error'>Error: {error?.message}</StateWrapper>
  }


  const east = data?.east ?? [];
  const west = data?.west ?? [];


  const displayedTeams = conference === 'all' ? [...east, ...west]
    : conference === 'east' ? east : west;

  const sortedTeams = [...displayedTeams].sort((a, b) => {
    const aValue = a[sortKey as keyof typeof a];
    const bValue = b[sortKey as keyof typeof b]
      return sortDir === 'desc' ? bValue - aValue : aValue - bValue;
  })

  const handleSort = (key: string) => {
    if(key === sortKey) {
      setSortDir(sortDir === 'desc' ? 'asc' : 'desc')
    } else {
      setSortKey(key)
      setSortDir('desc')
    }
  }

  return (
    <div className="standings-page">
      <header className="page-header">
        <h1 className="page-header__title">Standings</h1>
        <p className="page-header__subtitle">League standings by conference and division</p>
      </header>

      {/* TODO(krystal): replace state="empty" with your query's derived state */}
      {/* <StateWrapper state="ready" emptyLabel="No standings data loaded yet."> */}
        {/* TODO(krystal): you write this — table/list of TeamEntry / Standing rows */}
        {
          <div>
            <div>
            <button onClick={() => setConference('all')}
              className={conference === 'all' ? 'active' : ''}
              >All</button>
            <button onClick={() => setConference('east')}
              className={conference === 'east' ? 'active' : ''}
              >East</button>
            <button onClick={() => setConference('west')}
              className={conference === 'west' ? 'active' : ''}
              >West</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Logo</th>
                <th>Team</th>
                <th onClick={() => handleSort('wins')}>W</th>
                <th onClick={() => handleSort('losses')}>L</th>
                <th onClick={() => handleSort('ppg')}>PPG</th>
                <th onClick={() => handleSort('opp_ppg')}>OPP PPG</th>
                <th onClick={() => handleSort('diff')}>DIFF</th>
              </tr>
            </thead>
            <tbody>
              {
                sortedTeams.map((entry: StandingRow) => (
                  <tr key={entry.team_name}>
                    <td><img src={entry.logo} /></td>
                    <td>{entry.team_name}</td>
                    <td>{entry.wins}</td>
                    <td>{entry.losses}</td>
                    <td>{entry.ppg}</td>
                    <td>{entry.opp_ppg}</td>
                    <td>{entry.diff}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          </div>
          
        }
      {/* </StateWrapper> */}
    </div>
  )
}

