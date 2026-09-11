import type { StandingRow } from '../types/index';

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';


export default async function fetchStandings() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/nba/standings`)
        if (!response.ok) {
            throw new Error(`Something went wrong: ${response.status}`)
        }
        const data = await response.json();
        return {
            east: data.filter((row: StandingRow) => row.conference === 'East'),
            west: data.filter((row: StandingRow) => row.conference === 'West')
        }
    } catch(err) {
        console.error(err)
        throw err
    }
    
}

export async function fetchTeams() {

    try {
        const response = await fetch(`${API_BASE_URL}/api/espn/teams`);
        if (!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }
        const data = await response.json();
        return data;

    } catch (err) {
        console.error(err)
        throw err
    }
}

export async function fetchRoster(teamId: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/espn/teams/${teamId}/roster`);
        if (!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }

        const data = await response.json();
        return data;
    } catch(err) {
        console.error(err)
        throw err
    }
}

export async function fetchAthlete(athleteId: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/espn/athletes/${athleteId}`);
        if(!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }
        const data = await response.json();
        return data;
    } catch(err) {
        console.error(err)
        throw err
    }
}