import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import StandingsPage from './pages/StandingsPage'
import ShotChartsPage from './pages/ShotChartsPage'
import ScoutingPage from './pages/ScoutingPage'
import DraftBoardPage from './pages/DraftBoardPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<StandingsPage />} />
        <Route path="shot-charts" element={<ShotChartsPage />} />
        <Route path="scouting" element={<ScoutingPage />} />
        <Route path="draft-board" element={<DraftBoardPage />} />
      </Route>
    </Routes>
  )
}
