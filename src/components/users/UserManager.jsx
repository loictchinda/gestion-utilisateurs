import { useState } from "react";
import UserList from "./UserList";
import OnlineFilter from "./OnlineFilter";

const INITIAL_USERS = [
    { id: 1, name: "Alice Martin", isOnline: true },
    { id: 2, name: "Bob Dupont", isOnline: false },
    { id: 3, name: "Clara Leroy", isOnline: true },
    { id: 4, name: "David Moreau", isOnline: false },
    { id: 5, name: "Eva Petit", isOnline: true },
];

function UserManager() {
    const [users] = useState(INITIAL_USERS);
    const [showOnlineOnly, setShowOnlineOnly] = useState(false);

    const filteredUsers = showOnlineOnly
        ? users.filter((user) => user.isOnline)
        : users;

    const handleFilterChange = (value) => {
        setShowOnlineOnly(value);
    };

    return (
        <div className="user-manager">
            <h2>Statut des Utilisateurs</h2>
            <OnlineFilter
                showOnlineOnly={showOnlineOnly}
                onFilterChange={handleFilterChange}
            />
            <UserList users={filteredUsers} />
        </div>
    );
}

export default UserManager;