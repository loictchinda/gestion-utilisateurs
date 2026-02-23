import { useState } from "react";
import DisplayError from "./DisplayError";
import UserInput from "./UserInput";
import SubmitButton from "./SubmitButton";

function UserFormManager() {
    const [username, setUsername] = useState("");
    const [hasError, setHasError] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const isValid = username.trim().length >= 3;

    const handleChange = (value) => {
        setUsername(value);
        setHasError(false);
        setSuccessMessage("");
    };

    const handleSubmit = () => {
        if (!isValid) {
            setHasError(true);
            setSuccessMessage("");
            return;
        }
        setHasError(false);
        setSuccessMessage(`✅ Utilisateur "${username}" soumis avec succès !`);
        setUsername("");
    };

    return (
        <div className="user-form-manager">
            <h2>Formulaire Utilisateur</h2>

            <UserInput value={username} onChange={handleChange} />

            <DisplayError
                message="Le nom doit contenir au moins 3 caractères."
                hasError={hasError}
            />

            {successMessage && (
                <p className="success-message">{successMessage}</p>
            )}

            <SubmitButton isValid={isValid} onSubmit={handleSubmit} />
        </div>
    );
}

export default UserFormManager;