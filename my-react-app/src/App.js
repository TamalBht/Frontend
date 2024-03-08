import logo from './logo.svg';
import './App.css';
function Head(){
  return(
    <h1>Hello Wolrd</h1>
  );
}
function AddItem(props){
  const value=props.text;
  return(
    <form>
      <label>Type something: </label>
      <input type="text" value={value} name="blah" id="blah" />
    </form>
  );
}
function App() {
  return (
    
    <div className="App">
      <Head/>
      <AddItem text ="Bht"/>
      <AddItem/>
      <AddItem/>
      <AddItem/>


    </div>
  );
}

export default App;
