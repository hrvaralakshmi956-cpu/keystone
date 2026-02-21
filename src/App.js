import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome.jsx"
import Header from "./Header.jsx"
import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <Header></Header>
        <h1>Welcome to React JS classes!</h1>
        <button>Click here</button>

        <BrowserRouter>

        <Routes>

            <Route path='/welcome' element={<Welcome/>} />

        </Routes>

        </BrowserRouter>
        
        
    </div>
  );
}

export default App;
