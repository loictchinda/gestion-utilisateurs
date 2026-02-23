import ClockManager from "./components/clock/ClockManager";
import CounterManager from "./components/counter/CounterManager";
import MessageManager from "./components/message/MessageManager";
import UserManager from "./components/users/UserManager";
import UserFormManager from "./components/form/UserFormManager";
import UserAgeManager from "./components/age/UserAgeManager";
import UserDirectory from "./components/directory/UserDirectory";

function App() {
  return (
    <div className="app">
      <h1>Gestion des Utilisateurs</h1>
      <ClockManager />
      <CounterManager />
      <MessageManager />
      <UserManager />
      <UserFormManager />
      <UserAgeManager />
      <UserDirectory />
    </div>
  );
}

export default App;