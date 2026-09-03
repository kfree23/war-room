import type { StandingRow } from '../types/index';

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const BASE_URL = '/espn-site/apis/site/v2/sports/basketball/nba';
const ATHLETE_URL = '/espn-athlete/apis/common/v3/sports/basketball/nba';


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

export async function fetchTeams() {

    try {
        const response = await fetch(`${BASE_URL}/teams`);
        if (!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }
        const data = await response.json();
        return data.sports[0].leagues[0].teams;

    } catch (err) {
        console.error(err)
        throw err
    }
}

export async function fetchRoster(teamId: string) {
    try {
        const response = await fetch(`${BASE_URL}/teams/${teamId}/roster`);
        if (!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }

        const data = await response.json();
        return data.athletes;
    } catch(err) {
        console.error(err)
        throw err
    }
}

export async function fetchAthlete(athleteId: string) {
    try {
        const response = await fetch(`${ATHLETE_URL}/athletes/${athleteId}`);
        if(!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }
        const data = await response.json();
        return data.athlete;
    } catch(err) {
        console.error(err)
        throw err
    }
}