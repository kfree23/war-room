import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchStandings, { fetchTeams, fetchRoster, fetchAthlete } from '../services/api';



export default function ScoutingPage() {
  const [ selectedTeamId, setSelectedTeamId ] = useState<string | null>(null);
  const [ selectedAthleteId, setSelectedAthleteId ] = useState<string | null>(null);


  const { data: teams } = useQuery({ queryKey: ['nba-teams'], queryFn: fetchTeams });

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
