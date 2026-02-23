import { useState } from "react";
import Clock from "./Clock";
import ToggleClock from "./ToggleClock";

function ClockManager() {
    const [isVisible, setIsVisible] = useState(true);

    const handleToggle = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <div className="clock-manager">
            <h2>Horloge en temps réel</h2>
            <ToggleClock isVisible={isVisible} onToggle={handleToggle} />
            {isVisible && <Clock />}
        </div>
    );
}

export default ClockManager;