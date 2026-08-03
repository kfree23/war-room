export const BASE_URL = 'https://site.api.espn.com/apis/v2/sports/basketball/nba'


export default async function fetchStandings() {
    const response = await fetch(`${BASE_URL}/standings`);
    if(!response.ok) {
        throw new Error(`Something went wrong: ${response.status}`)
    }
    const data = await response.json();
    return {
        east: data.children[0].standings.entries,
        west: data.children[1].standings.entries
    }
}