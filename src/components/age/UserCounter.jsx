import { useMemo } from "react";

function UserCounter({ users, minAge }) {
    const count = useMemo(() => {
        console.log("🔄 Recalcul du comptage...");
        return users.filter((user) => user.age >= minAge).length;
    }, [users, minAge]);

    return (
        <div className="user-counter">
            <p>
                Nombre d'utilisateurs âgés de{" "}
                <strong>{minAge} ans</strong> et plus :{" "}
                <span className="counter-badge">{count}</span>
            </p>
        </div>
    );
}

export default UserCounter;