import { useState } from "react";
import { usePlayerStats } from "../../hooks/usePlayerStats";
import PlayerList from "./PlayerList";
import PlayerStatCards from "./PlayerStatCards";

const PLAYERS = [
    { id: 1, name: "Alice", score: 85 },
    { id: 2, name: "Bob", score: 42 },
    { id: 3, name: "Charlie", score: 90 },
    { id: 4, name: "David", score: 70 },
    { id: 5, name: "Eve", score: 55 },
    { id: 6, name: "Frank", score: 30 },
    { id: 7, name: "Grace", score: 95 },
];

function PlayerDashboard() {
    const [minScore, setMinScore] = useState(0);

    const { countAboveMin, average, max, min, ranked } = usePlayerStats(
        PLAYERS,
        minScore
    );

    return (
        <div className="player-dashboard">
            <h2>🎮 Tableau de Classement</h2>

            <div className="player-filter">
                <label htmlFor="minScore">Score minimum :</label>
                <input
                    id="minScore"
                    type="number"
                    min={0}
                    max={100}
                    value={minScore}
                    onChange={(e) => setMinScore(Number(e.target.value))}
                />
            </div>

            <PlayerStatCards
                countAboveMin={countAboveMin}
                average={average}
                max={max}
                min={min}
            />

            <PlayerList players={ranked} />
        </div>
    );
}

export default PlayerDashboard;