import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchStandings, { fetchTeams, fetchRoster, fetchAthlete } from '../services/api';
import StateWrapper from '../components/ui/StateWrapper';



export default function ScoutingPage() {
  const [ selectedTeamId, setSelectedTeamId ] = useState<string | null>(null);
  const [ selectedAthleteId, setSelectedAthleteId ] = useState<string | null>(null);


  const { data: teams, isLoading: teamsLoading } = useQuery({ queryKey: ['nba-teams'], queryFn: fetchTeams });

  const { data: roster } = useQuery({
    queryKey: ['roster', selectedTeamId],
    queryFn: () => fetchRoster(selectedTeamId!),
    enabled: !!selectedTeamId
  })

  const { data: profile } = useQuery({
    queryKey: ['athlete', selectedAthleteId],
    queryFn: () => fetchAthlete(selectedAthleteId!),
    enabled: !!selectedAthleteId
  })

  if (teamsLoading) {
    return <StateWrapper state="loading"/>
  }


  return (
    <div>
      <header className="page-header">
        <h1 className="page-header__title">Scouting</h1>
        <p className="page-header__subtitle">Prospect reports and evaluation notes</p>
      </header>

      <select value={selectedTeamId ?? ''} onChange={(e) => setSelectedTeamId(e.target.value)}>
        <option value="">Select a team</option>
        {teams.map((team: {
          team: {
            id: string;
            displayName: string,
            logo: string
          }
        }) => {
          return (
            <option key={team.team.id} value={team.team.id}>
              {team.team.displayName}
            </option>
          )
        })}
      </select>
    </div>
  )
}
