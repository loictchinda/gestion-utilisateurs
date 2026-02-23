function ScoreUserList({ users, minScore }) {
    return (
        <div className="score-user-list">
            <h3>Détail des utilisateurs</h3>
            <ul>
                {users.map((user) => {
                    const isAbove = user.score >= minScore;
                    return (
                        <li key={user.id} className={`score-user-item ${isAbove ? "above" : "below"}`}>
                            <span className="score-user-name">{user.name}</span>
                            <div className="score-user-right">
                                <div className="score-bar-wrapper">
                                    <div
                                        className="score-bar"
                                        style={{
                                            width: `${user.score}%`,
                                            backgroundColor: isAbove ? "#4a90e2" : "#e0e0e0",
                                        }}
                                    />
                                </div>
                                <span className="score-value">{user.score} pts</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ScoreUserList;