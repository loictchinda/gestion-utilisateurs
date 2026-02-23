function UserModal({ user, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>✕</button>
                <h3>{user.name}</h3>
                <ul className="modal-details">
                    <li>📧 <strong>Email :</strong> {user.email}</li>
                    <li>📞 <strong>Téléphone :</strong> {user.phone}</li>
                    <li>🌐 <strong>Site :</strong> {user.website}</li>
                    <li>🏢 <strong>Société :</strong> {user.company.name}</li>
                    <li>
                        📍 <strong>Ville :</strong> {user.address.city},{" "}
                        {user.address.street}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UserModal;