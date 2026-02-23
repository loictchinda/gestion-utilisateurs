function UserDirectoryItem({ user, onSelect }) {
    return (
        <li className="directory-item" onClick={onSelect}>
            <div className="directory-item-info">
                <span className="directory-name">{user.name}</span>
                <span className="directory-email">{user.email}</span>
            </div>
            <span className="directory-arrow">›</span>
        </li>
    );
}

export default UserDirectoryItem;