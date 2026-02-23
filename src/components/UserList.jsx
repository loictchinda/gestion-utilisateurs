const users = [
  { id: 1, name: "Alice Martin", email: "alice@email.com", role: "Admin" },
  { id: 2, name: "Bob Dupont", email: "bob@email.com", role: "Utilisateur" },
  { id: 3, name: "Clara Leroy", email: "clara@email.com", role: "Utilisateur" },
];

function UserList() {
  return (
    <div className="user-list">
      <h2>Liste des utilisateurs</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;