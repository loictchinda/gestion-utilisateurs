function StatCard({ label, value, icon, color }) {
    return (
        <div className="player-stat-card" style={{ borderColor: color }}>
            <span className="player-stat-icon">{icon}</span>
            <span className="player-stat-value" style={{ color }}>{value}</span>
            <span className="player-stat-label">{label}</span>
        </div>
    );
}

function PlayerStatCards({ countAboveMin, average, max, min }) {
    return (
        <div className="player-stat-cards">
            <StatCard label="Au-dessus du filtre" value={countAboveMin} icon="👥" color="#4a90e2" />
            <StatCard label="Score moyen" value={average.toFixed(2)} icon="📊" color="#6c63ff" />
            <StatCard label="Score maximum" value={max} icon="🔝" color="#2e7d32" />
            <StatCard label="Score minimum" value={min} icon="🔻" color="#c62828" />
        </div>
    );
}

export default PlayerStatCards;