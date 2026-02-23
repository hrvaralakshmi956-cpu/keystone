import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome.jsx"
import Header from "./Header.jsx"
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Blog from './Blog.jsx';
import Services from './Services.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';

function App() {
  return (
    <div>
        <Header></Header>
        
        <BrowserRouter>

        <Routes>

            <Route path='/welcome' element={<Welcome/>} />
            <Route path='/Blog' element={<Blog/>} />
            <Route path='/Services' element={<Services/>} />
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<h2>Page Not Found</h2>} />
            <Route path='/login' element={<Login/>} />
            

        </Routes>

        </BrowserRouter>
        
        
    </div>
  );
}

export default App;
