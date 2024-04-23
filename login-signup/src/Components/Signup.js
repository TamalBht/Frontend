import "./Signup.css"
import { Link } from "react-router-dom";
import { useRef, useState} from "react";
import { auth } from "./firebase";
function Sign(){
    const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const handleSave =async(e)=>{
        e.preventDefault();
        console.log({name} ,{email},{password});
    }
    return(
        <div className="signup-wrapper">
        <h1>Signup</h1>
        <form className="signup" >
        <div className='sign-content'>
           <label for="name">Name:</label>
            <input type="text"  name="Name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/><br></br>
           </div> 
           <div className='sign-content'>
           <label for="mail">E-mail:</label>
            <input type="text"  name="mail" placeholder="Email Address" onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
           </div>
           <div className="sign-content">
           <label for="pwd">Password:</label>
            <input type="password"  name="pwd" onChange={(e)=>{setPassword(e.target.value)}}/><br></br>
           </div>
        </form>
        <button type="submit" >Signup</button>
        <Link to={"/Login"}>Already have an account?</Link>
        
       
       </div>
    );
}
export default Sign;