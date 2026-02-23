import { useState } from "react";
import DisplayCounterValue from "./DisplayCounterValue";
import ToggleBoolean from "./ToggleBoolean";
import IncrementCounter from "./IncrementCounter";

function CounterManager() {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    const handleToggle = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <div className="counter-manager">
            <h2>Gestionnaire de Compteur</h2>
            <DisplayCounterValue value={count} isVisible={isVisible} />
            <ToggleBoolean isVisible={isVisible} onToggle={handleToggle} />
            <IncrementCounter onIncrement={handleIncrement} />
        </div>
    );
}

export default CounterManager;