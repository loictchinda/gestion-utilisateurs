function IncrementCounter({ onIncrement }) {
    return (
        <div className="increment-counter">
            <button onClick={onIncrement}>Incrémenter +1</button>
        </div>
    );
}

export default IncrementCounter;