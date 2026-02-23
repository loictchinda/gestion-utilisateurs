import { useState, useMemo } from "react";
import { useUsers } from "../../hooks/useUsers";
import UserDirectoryItem from "./UserDirectoryItem";
import UserModal from "./UserModal";

function UserDirectory() {
    const { users, loading, error, refetch } = useUsers(
        "https://jsonplaceholder.typicode.com/users"
    );

    const [search, setSearch] = useState("");
    const [sortAsc, setSortAsc] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);

    const filteredUsers = useMemo(() => {
        return users
            .filter((u) =>
                u.name.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) =>
                sortAsc
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name)
            );
    }, [users, search, sortAsc]);

    if (loading) return <p className="loading-message">⏳ Chargement...</p>;

    if (error)
        return (
            <div className="error-container">
                <p className="error-message">❌ Erreur : {error}</p>
                <button onClick={refetch}>🔄 Réessayer</button>
            </div>
        );

    return (
        <div className="user-directory">
            <h2>Annuaire des Utilisateurs</h2>

            <div className="directory-controls">
                <input
                    type="text"
                    placeholder="🔍 Rechercher par nom..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
                <button
                    className="sort-button"
                    onClick={() => setSortAsc((prev) => !prev)}
                >
                    Tri {sortAsc ? "A → Z" : "Z → A"}
                </button>
            </div>

            {filteredUsers.length === 0 ? (
                <p className="no-users">Aucun utilisateur trouvé.</p>
            ) : (
                <ul className="directory-list">
                    {filteredUsers.map((user) => (
                        <UserDirectoryItem
                            key={user.id}
                            user={user}
                            onSelect={() => setSelectedUser(user)}
                        />
                    ))}
                </ul>
            )}

            {selectedUser && (
                <UserModal
                    user={selectedUser}
                    onClose={() => setSelectedUser(null)}
                />
            )}
        </div>
    );
}

export default UserDirectory;