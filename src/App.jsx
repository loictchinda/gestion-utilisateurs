import CounterManager from "./components/counter/CounterManager";
import MessageManager from "./components/message/MessageManager";
import UserManager from "./components/users/UserManager";
import UserFormManager from "./components/form/UserFormManager";
import ClockManager from "./components/clock/ClockManager";

function App() {
  return (
    <div className="app">
      <h1>Gestion des Utilisateurs</h1>
      <CounterManager />
      <MessageManager />
      <UserManager />
      <UserFormManager />
      <ClockManager />
    </div>
  );
}

export default App;