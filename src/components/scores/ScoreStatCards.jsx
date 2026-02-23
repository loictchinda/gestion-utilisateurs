function StatCard({ label, value, color }) {
    return (
        <div className="stat-card" style={{ borderColor: color }}>
            <span className="stat-label">{label}</span>
            <span className="stat-value" style={{ color }}>{value}</span>
        </div>
    );
}

function ScoreStatCards({ countAboveMin, average, max, min }) {
    return (
        <div className="stat-cards">
            <StatCard
                label="Au-dessus du minimum"
                value={countAboveMin}
                color="#4a90e2"
            />
            <StatCard
                label="Score moyen"
                value={average.toFixed(2)}
                color="#6c63ff"
            />
            <StatCard
                label="Score maximum"
                value={max}
                color="#2e7d32"
            />
            <StatCard
                label="Score minimum"
                value={min}
                color="#c62828"
            />
        </div>
    );
}

export default ScoreStatCards;