function SubmitButton({ isValid, onSubmit }) {
    return (
        <div className="submit-button">
            <button
                onClick={onSubmit}
                disabled={!isValid}
                className={isValid ? "btn-active" : "btn-disabled"}
            >
                Soumettre
            </button>
        </div>
    );
}

export default SubmitButton;