function DisplayError({ message, hasError }) {
    if (!hasError) return null;

    return (
        <div className="display-error">
            <p>⚠️ {message}</p>
        </div>
    );
}

export default DisplayError;