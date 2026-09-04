import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTeams, fetchRoster, fetchAthlete } from '../services/api';
import StateWrapper from '../components/ui/StateWrapper';
import type { Statistic } from '../types/index';

export default function ScoutingPage() {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const [selectedAthleteId, setSelectedAthleteId] = useState<string | null>(null);


  const { data: teams, isLoading: teamsLoading } = useQuery({ queryKey: ['nba-teams'], queryFn: fetchTeams });

  const { data: roster, isLoading: rosterLoading } = useQuery({
    queryKey: ['roster', selectedTeamId],
    queryFn: () => fetchRoster(selectedTeamId!),
    enabled: !!selectedTeamId
  })

  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: ['athlete', selectedAthleteId],
    queryFn: () => fetchAthlete(selectedAthleteId!),
    enabled: !!selectedAthleteId
  })

  if (teamsLoading) {
    return <StateWrapper state="loading" />
  }

  if (rosterLoading) {
    return <StateWrapper state="loading" />
  }

    if (profileLoading) {
    return <StateWrapper state="loading" />
  }

  const playerName = profile?.displayName;
  const playerHeadshot = profile?.headshot?.href;
  const height = profile?.displayHeight;
  const weight = profile?.displayWeight;
  const age = profile?.age;
  const jerseyNum = profile?.jersey;
  const teamName = profile?.team.displayName;
  const position = profile?.position?.name;
  const ppg = profile?.statsSummary?.statistics?.find((s: Statistic) => s.name === 'avgPoints')?.value.toFixed(1);
  const rpg = profile?.statsSummary?.statistics?.find((s: Statistic) => s.name === 'avgRebounds')?.value.toFixed(1);
  const apg = profile?.statsSummary?.statistics?.find((s: Statistic) => s.name === 'avgAssists')?.value.toFixed(1);
  const fieldGoalPercentage = profile?.statsSummary?.statistics?.find((s: Statistic) => s.name === 'fieldGoalPct')?.value.toFixed(1);


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
            logo: string //not showing
          }
        }) => {
          return (
            <option key={team.team.id} value={team.team.id}>
              {team.team.displayName}
            </option>
          )
        })}
      </select>


      {selectedTeamId && roster && (
        <select value={selectedAthleteId ?? ''} onChange={(e) => setSelectedAthleteId(e.target.value)}>
          <option value="">Select a player</option>
          {roster.map((athlete: {
            id: string,
            displayName: string
          }) => {
            return (
              <option key={athlete.id} value={athlete.id}>
                {athlete.displayName}
              </option>
            )
          })}
        </select>
      )}


      {selectedTeamId && roster && profile && (
        <div>
          <header>
            {playerName}
            <img src={playerHeadshot} alt={playerName} />
            <span>Team: {teamName}</span>
            <span>Height: {height}</span>
            <span>Weight: {weight}</span>
            <span>Age: {age}</span>
            <span>Jersey Number: {jerseyNum}</span>
          </header>

          <div>
            <span>Position: {position}</span>
            <span>PPG: {ppg}</span>
            <span>RPG: {rpg}</span>
            <span>APG: {apg}</span>
            <span>FG%: {fieldGoalPercentage}</span>
          </div>
        </div>
      )}
    </div>
  )
}
