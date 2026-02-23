import UserList from "./components/UserList";
import CounterManager from "./components/counter/CounterManager";

function App() {
  return (
    <div className="app">
      <h1>Gestion des Utilisateurs</h1>
      <CounterManager />
      <UserList />
    </div>
  );
}

export default App;