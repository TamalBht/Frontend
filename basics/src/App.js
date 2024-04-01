import User from './Components/conditon.js';
import Counter from './Components/useStte.js';
import Theme from './Components/uState.js';
import './App.css';

function App() {
  return (
    <>
         <User isLoggedIn ={true}></User>
         <Theme/>
    </>
    );
}

export default App;
