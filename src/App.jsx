import UserList from "./components/UserList";
import CounterManager from "./components/counter/CounterManager";
import MessageManager from "./components/message/MessageManager";

function App() {
  return (
    <div className="app">
      <h1>Gestion des Utilisateurs</h1>
      <CounterManager />
      <MessageManager />
      <UserList />
    </div>
  );
}

export default App;