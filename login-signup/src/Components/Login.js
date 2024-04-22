import { Link,Route, Routes } from "react-router-dom";
import "./Login.css"
import Sign from "./Signup.js";

function Login(){
    return(
       <div className="login-wrapper">
        <h1>Login</h1>
        <form className="login">
            
           <div className='login-content'>
           <label for="mail">E-mail:</label>
            <input type="text"  name="mail" placeholder="Email Address"/><br></br>
           </div>
           <div className="login-content">
           <label for="pwd">Password:</label>
            <input type="password"  name="pwd" /><br></br>
           </div>
        </form>
        <button>Login</button>
        <Link to={"/Signup"}>New here?</Link>
       
       </div>
    );
}
export default Login;