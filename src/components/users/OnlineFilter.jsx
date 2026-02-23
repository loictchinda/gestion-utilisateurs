function OnlineFilter({ showOnlineOnly, onFilterChange }) {
    return (
        <div className="online-filter">
            <label>
                <input
                    type="checkbox"
                    checked={showOnlineOnly}
                    onChange={(e) => onFilterChange(e.target.checked)}
                />
                Afficher uniquement les utilisateurs en ligne
            </label>
        </div>
    );
}

export default OnlineFilter;