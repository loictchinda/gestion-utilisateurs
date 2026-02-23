import { useState } from "react";
import { useScoreStats } from "../../hooks/useScoreStats";
import ScoreMinFilter from "./ScoreMinFilter";
import ScoreStatCards from "./ScoreStatCards";
import ScoreUserList from "./ScoreUserList";

const USERS = [
    { id: 1, name: "Alice", score: 85 },
    { id: 2, name: "Bob", score: 42 },
    { id: 3, name: "Charlie", score: 90 },
    { id: 4, name: "David", score: 70 },
    { id: 5, name: "Eve", score: 55 },
];

function ScoreManager() {
    const [minScore, setMinScore] = useState(50);

    const { countAboveMin, average, max, min } = useScoreStats(USERS, minScore);

    return (
        <div className="score-manager">
            <h2>Analyse des Scores</h2>

            <ScoreMinFilter minScore={minScore} onMinScoreChange={setMinScore} />

            <ScoreStatCards
                countAboveMin={countAboveMin}
                average={average}
                max={max}
                min={min}
            />

            <ScoreUserList users={USERS} minScore={minScore} />
        </div>
    );
}

export default ScoreManager;