import UserStatus from "./UserStatus";

function UserList({ users }) {
    if (users.length === 0) {
        return <p className="no-users">Aucun utilisateur trouvé.</p>;
    }

    return (
        <ul className="user-list-items">
            {users.map((user) => (
                <li key={user.id} className="user-item">
                    <span className="user-name">{user.name}</span>
                    <UserStatus isOnline={user.isOnline} />
                </li>
            ))}
        </ul>
    );
}

export default UserList;