// War Room — shared domain types
// TODO(krystal): define these shapes to match the data you're working with

export interface TeamEntry {
  // TODO(krystal): you write this
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

// export interface Standing {

// }

export interface Shot {
  player_name: string,
  shot_made: string,
  shot_type: string,
  basic_zone: string,
  loc_x: number,
  loc_y: number
}