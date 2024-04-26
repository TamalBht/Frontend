import { Link } from "react-router-dom";
import "./Login.css"



function Login(){
    return(
       <div className="login-wrapper">
        <h1>Login</h1>
        <form className="login">
            
           <div className='login-content'>
           <label htmlFor="maill">E-mail:</label>
            <input type="text"  name="maill" placeholder="Email Address" id="maill"/><br></br>
           </div>
           <div className="login-content">
           <label htmlFor="pwdd">Password:</label>
            <input type="password"  name="pwdd" id="pwdd"/><br></br>
           </div>
        </form>
        <button type="submit">Login</button>
        <Link to={"/Signup"}>New here?</Link>
       
       </div>
    );
}
export default Login;