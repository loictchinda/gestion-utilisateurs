import PlayerCard from "./PlayerCard";

function PlayerList({ players }) {
    if (players.length === 0) {
        return <p className="no-users">Aucun joueur ne correspond au filtre.</p>;
    }

    return (
        <ul className="player-list">
            {players.map((player) => (
                <PlayerCard key={player.id} player={player} />
            ))}
        </ul>
    );
}

export default PlayerList;