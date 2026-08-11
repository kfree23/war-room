import { useState } from 'react';
import Badge from '../components/ui/Badge'
import '../styles/page.css'
import '../styles/coming-soon.css'
import playerShots from '../fixtures/playerShots' 
import type { Shot } from '../types'



export default function ShotChartsPage() {

  const [shotType, setShotType] = useState<'allShots' | 'twoPointers' | 'threePointers'>('allShots');

  const filteredTwoPointers = playerShots.filter((shot: Shot) => {
    return shot.shot_type === '2PT Field Goal'
  })

    const filteredThreePointers = playerShots.filter((shot: Shot) => {
    return shot.shot_type === '3PT Field Goal'
  })

    const displayShots = shotType === 'allShots' ? [...filteredTwoPointers, ...filteredThreePointers] : shotType === 'twoPointers' ? filteredTwoPointers : filteredThreePointers;

  return (
    <div>
      <header className="page-header">
        <h1 className="page-header__title">Shot Charts</h1>
        <p className="page-header__subtitle">Shot location and efficiency visualizations</p>
      </header>

      <div>
        <button onClick={() => setShotType('allShots')} className={shotType === 'allShots' ? 'active' : ''}>All Shots</button>
        <button onClick={() => setShotType('twoPointers')} className={shotType === 'twoPointers' ? 'active' : ''}>2FG</button>
        <button onClick={() => setShotType('threePointers')} className={shotType === 'threePointers' ? 'active' : ''}>3FG</button>
      </div>

      {/* <div className="coming-soon">
        <Badge variant="info">Coming Soon</Badge>
        <p className="coming-soon__text">
          Shot chart visualizations aren't wired up yet.
        </p>
      </div> */}
    </div>
  )
}
