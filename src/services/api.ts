import type { StandingRow } from '../types/index';

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';


export default async function fetchStandings() {
    const response = await fetch(`${API_BASE_URL}/api/nba/standings`)
    if (!response.ok) {
        throw new Error(`Something went wrong: ${response.status}`)
    }
    const data = await response.json();
    return {
        east: data.filter((row: StandingRow) => row.conference === 'East'),
        west: data.filter((row: StandingRow) => row.conference === 'West')
    }
}