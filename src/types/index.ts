export interface TeamEntry {
    team: {
      id: string,
      displayName: string,
      logos: {
        href: string
      } []
    }
    stats: {
      name: string
      value: number
    }[]
}


export interface Shot {
  player_name: string,
  shot_made: string,
  shot_type: string,
  basic_zone: string,
  loc_x: number,
  loc_y: number
}

export interface StandingRow {
  team_name: string;
  logo: string;
  conference: string;
  wins: number;
  losses: number;
  ppg: number;
  opp_ppg: number;
  diff: number;
}

export interface Statistic {
  name: string;
  value: number;
  displayValue: string;
}