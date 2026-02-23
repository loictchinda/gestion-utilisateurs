function UpdateMessage({ message, onUpdate }) {
    return (
        <div className="update-message">
            <input
                type="text"
                value={message}
                onChange={(e) => onUpdate(e.target.value)}
                placeholder="Saisir un message..."
            />
        </div>
    );
}

export default UpdateMessage;