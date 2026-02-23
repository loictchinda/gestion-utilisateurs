function DisplayMessage({ message, isVisible }) {
    if (!isVisible) return null;

    return (
        <div className="display-message">
            <p>{message}</p>
        </div>
    );
}

export default DisplayMessage;