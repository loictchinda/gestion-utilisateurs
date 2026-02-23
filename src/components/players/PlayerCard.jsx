const CATEGORY_STYLES = {
    Élevé: { background: "#e8f5e9", border: "#a5d6a7", color: "#2e7d32", icon: "🏆" },
    Moyen: { background: "#fff8e1", border: "#ffe082", color: "#f57f17", icon: "⭐" },
    Faible: { background: "#ffebee", border: "#ef9a9a", color: "#c62828", icon: "📉" },
};

function PlayerCard({ player }) {
    const style = CATEGORY_STYLES[player.category];

    return (
        <li
            className="player-card"
            style={{ backgroundColor: style.background, borderColor: style.border }}
        >
            <div className="player-rank">#{player.rank}</div>

            <div className="player-info">
                <span className="player-name">{player.name}</span>
                <span className="player-category" style={{ color: style.color }}>
                    {style.icon} {player.category}
                </span>
            </div>

            <div className="player-score-block">
                <div className="player-score-bar-wrapper">
                    <div
                        className="player-score-bar"
                        style={{
                            width: `${player.score}%`,
                            backgroundColor: style.color,
                        }}
                    />
                </div>
                <span className="player-score-value">{player.score} pts</span>
            </div>
        </li>
    );
}

export default PlayerCard;