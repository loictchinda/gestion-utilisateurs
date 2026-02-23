function AgeFilter({ minAge, onAgeChange }) {
    return (
        <div className="age-filter">
            <label htmlFor="minAge">Âge minimum :</label>
            <input
                id="minAge"
                type="number"
                value={minAge}
                min={0}
                max={100}
                onChange={(e) => onAgeChange(Number(e.target.value))}
            />
        </div>
    );
}

export default AgeFilter;