function UserInput({ value, onChange }) {
    return (
        <div className="user-input">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
                id="username"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Entrez un nom d'utilisateur..."
            />
        </div>
    );
}

export default UserInput;