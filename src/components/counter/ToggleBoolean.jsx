function ToggleBoolean({ isVisible, onToggle }) {
    return (
        <div className="toggle-boolean">
            <button onClick={onToggle}>
                {isVisible ? "Masquer la valeur" : "Afficher la valeur"}
            </button>
        </div>
    );
}

export default ToggleBoolean;