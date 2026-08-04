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

export interface Standing {
  // TODO(krystal): you write this
}
