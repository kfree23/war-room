import StateWrapper from '../components/ui/StateWrapper'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import fetchStandings from '../services/api'
import type { TeamEntry } from '../types';
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
    const aValue = a.stats.find((s: { name: string; value:number}) => s.name === sortKey)?.value ?? 0;
    const bValue = b.stats.find((s: { name: string; value:number}) => s.name === sortKey)?.value ?? 0;
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
            <button onClick={() => setConference('all')}>All</button>
            <button onClick={() => setConference('east')}>East</button>
            <button onClick={() => setConference('west')}>West</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Logo</th>
                <th>Team</th>
                <th onClick={() => handleSort('wins')}>W</th>
                <th onClick={() => handleSort('losses')}>L</th>
                <th onClick={() => handleSort('avgPointsFor')}>PPG</th>
                <th onClick={() => handleSort('avgPointsAgainst')}>OPP PPG</th>
                <th onClick={() => handleSort('differential')}>DIFF</th>
              </tr>
            </thead>
            <tbody>
              {
                sortedTeams.map((entry: TeamEntry) => (
                  <tr key={entry.team.id}>
                    <td><img src={entry.team.logos[0].href} /></td>
                    <td>{entry.team.displayName}</td>
                    <td>{entry.stats.find(s => s.name === 'wins')?.value}</td>
                    <td>{entry.stats.find(s => s.name === 'losses')?.value}</td>
                    <td>{entry.stats.find(s => s.name === 'avgPointsFor')?.value.toFixed(1)}</td>
                    <td>{entry.stats.find(s => s.name === 'avgPointsAgainst')?.value.toFixed(1)}</td>
                    <td>{entry.stats.find(s => s.name === 'differential')?.value.toFixed(1)}</td>
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