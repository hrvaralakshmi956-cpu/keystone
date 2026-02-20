import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome.jsx"
import Dashboard from "./Dashboard.jsx"

function App() {
  return (
    <div>
      <header>

        <h1>Welcome to React JS classes!</h1>
        <button>Click here</button>
        <Welcome></Welcome>
        <Dashboard></Dashboard>
        
      </header>
    </div>
  );
}

export default App;
