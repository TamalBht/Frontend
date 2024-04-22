import { Link,Route } from "react-router-dom";
import "./Login.css"
import ""
function Login(){
    return(
       <div className="login-wrapper">
        <h1>Login</h1>
        <form className="login">
            <label for="nname">Name:</label>
            <input type="text" id="nname" name="nname" placeholder="Enter your name"/><br></br>
            <label for="mail">E-mail:</label>
            <input type="text" id="mail" name="mail" placeholder="Email Address"/><br></br>
            <label for="pwd">Password:</label>
            <input type="password" id="pwd" name="pwd" /><br></br>
        </form>
        <button>Login</button>
        <Link to={"/Signup"}>New here?</Link>
        <Route path='/Signup' element={<Login/>}/>
       </div>
    );
}
export default Login;