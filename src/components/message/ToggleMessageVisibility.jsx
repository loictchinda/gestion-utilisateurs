function ToggleMessageVisibility({ isVisible, onToggle }) {
    return (
        <div className="toggle-message">
            <button onClick={onToggle}>
                {isVisible ? "Masquer le message" : "Afficher le message"}
            </button>
        </div>
    );
}

export default ToggleMessageVisibility;