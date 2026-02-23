function DisplayCounterValue({ value, isVisible }) {
    if (!isVisible) return null;

    return (
        <div className="display-counter">
            <p>Valeur actuelle : <strong>{value}</strong></p>
        </div>
    );
}

export default DisplayCounterValue;