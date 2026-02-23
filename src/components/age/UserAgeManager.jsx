import { useState } from "react";
import UserCounter from "./UserCounter";
import AgeFilter from "./AgeFilter";

const USERS = [
    { id: 1, name: "Alice Martin", age: 28 },
    { id: 2, name: "Bob Dupont", age: 17 },
    { id: 3, name: "Clara Leroy", age: 34 },
    { id: 4, name: "David Moreau", age: 22 },
    { id: 5, name: "Eva Petit", age: 15 },
    { id: 6, name: "François Blanc", age: 45 },
    { id: 7, name: "Grace Noir", age: 19 },
];

function UserAgeManager() {
    const [minAge, setMinAge] = useState(18);

    const handleAgeChange = (value) => {
        setMinAge(value);
    };

    return (
        <div className="user-age-manager">
            <h2>Filtre par Âge</h2>

            <AgeFilter minAge={minAge} onAgeChange={handleAgeChange} />

            <UserCounter users={USERS} minAge={minAge} />

            <div className="user-age-list">
                <h3>Liste complète</h3>
                <ul>
                    {USERS.map((user) => (
                        <li
                            key={user.id}
                            className={
                                user.age >= minAge ? "user-age-item valid" : "user-age-item invalid"
                            }
                        >
                            <span>{user.name}</span>
                            <span className="age-badge">{user.age} ans</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UserAgeManager;