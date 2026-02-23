function ScoreMinFilter({ minScore, onMinScoreChange }) {
    return (
        <div className="score-min-filter">
            <label htmlFor="minScore">Score minimum :</label>
            <input
                id="minScore"
                type="number"
                min={0}
                max={100}
                value={minScore}
                onChange={(e) => onMinScoreChange(Number(e.target.value))}
            />
        </div>
    );
}

export default ScoreMinFilter;