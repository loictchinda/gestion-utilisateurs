function ToggleClock({ isVisible, onToggle }) {
    return (
        <div className="toggle-clock">
            <button onClick={onToggle}>
                {isVisible ? "Cacher l'horloge" : "Afficher l'horloge"}
            </button>
        </div>
    );
}

export default ToggleClock;