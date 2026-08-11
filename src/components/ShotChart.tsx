import * as d3 from 'd3';
import type { Shot } from '../types/index';
import Court from '../components/Court' 

interface ShotChartProps {
    shots: Shot[]
}

export default function ShotChart({ shots }: ShotChartProps) {
    const xScale = d3.scaleLinear()
        .domain([-25, 25])
        .range([0, 500]);

    const yScale = d3.scaleLinear()
        .domain([0, 47])
        .range([0, 470])

    return (
        <svg width={500} height={470}>
            <Court />
            {shots.map((shot, i) => {
                return <circle key={i}
                cx={xScale(shot.loc_x)}
                cy={yScale(shot.loc_y)}
                r={4}
                fill={shot.shot_made === "TRUE" ? "#4ade80" : "#f87171"}
                />
            })}
        </svg>
    )
}