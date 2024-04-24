import "./Signup.css"
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  useState } from "react";
import {auth} from "./firebase"
const Sign=()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSave =()=>{
          
          console.log({email});
          console.log({password});
          createUserWithEmailAndPassword(auth,email,password)
              .then((userCredential)=>{
                  console.log(userCredential)
              }).catch ((error)=>{
                  console.log(error);
              })
  
          
      }

    return(
        <div className="signup-wrapper">
        <h1>Signup</h1>
        <form className="signup"  onSubmit={ handleSave }>
        
           <div className='sign-content'>
           <label htmlFor="mail">E-mail:</label>
            <input type="text"  name="mail" placeholder="Email Address"id="mail" onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
           </div>
           <div className="sign-content">
           <label htmlFor="pwd">Password:</label>
            <input type="password"  name="pwd" id="pwd" onChange={(e)=>{setPassword(e.target.value)}}/><br></br>
           </div>
        </form>
        <button type="submit" onClick={()=>{
            console.log('success');
           
        }}>Signup</button>
        <Link to={"/Login"}>Already have an account?</Link>
        
       
       </div>
    );
}
export default Sign;