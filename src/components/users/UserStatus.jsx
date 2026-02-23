function UserStatus({ isOnline }) {
    return (
        <span className={`user-status ${isOnline ? "online" : "offline"}`}>
            {isOnline ? "🟢 En ligne" : "🔴 Hors ligne"}
        </span>
    );
}

export default UserStatus;