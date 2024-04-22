import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js';
import Login from './Components/Login.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Link to={"/Login"}><Home/></Link>}/>
      <Route path='/Login' element={<Login/>}/>

    </Routes>
  );
}

export default App;
