import { useState } from "react";
import DisplayMessage from "./DisplayMessage";
import ToggleMessageVisibility from "./ToggleMessageVisibility";
import UpdateMessage from "./UpdateMessage";

function MessageManager() {
    const [message, setMessage] = useState("Bonjour tout le monde !");
    const [isVisible, setIsVisible] = useState(true);

    const handleToggle = () => {
        setIsVisible((prev) => !prev);
    };

    const handleUpdate = (newMessage) => {
        setMessage(newMessage);
    };

    return (
        <div className="message-manager">
            <h2>Gestionnaire de Message</h2>
            <DisplayMessage message={message} isVisible={isVisible} />
            <ToggleMessageVisibility isVisible={isVisible} onToggle={handleToggle} />
            <UpdateMessage message={message} onUpdate={handleUpdate} />
        </div>
    );
}

export default MessageManager;