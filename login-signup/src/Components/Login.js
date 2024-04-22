import "./Login.css"
function Login(){
    return(
        <form className="login">
            <label for="nname">Name:</label>
            <input type="text" id="nname" name="nname" placeholder="Enter your name"/><br></br>
            <label for="mail">E-mail:</label>
            <input type="text" id="mail" name="mail" placeholder="Email Address"/><br></br>
        </form>
    );
}
export default Login;