import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Sign from './Components/Signup.js';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Link to={"/Signup"}><Home/></Link>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Sign/>}/>


    </Routes>
  );
}

export default App;
