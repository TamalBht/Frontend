import "./Signup.css"
function Sign(){
    return(
        <div className="signup-wrapper">
        <h1>Signup</h1>
        <form className="signup">
        <div className='sign-content'>
           <label for="name">Name:</label>
            <input type="text"  name="Name" placeholder="Name"/><br></br>
           </div> 
           <div className='sign-content'>
           <label for="mail">E-mail:</label>
            <input type="text"  name="mail" placeholder="Email Address"/><br></br>
           </div>
           <div className="signcontent-content">
           <label for="pwd">Password:</label>
            <input type="password"  name="pwd" /><br></br>
           </div>
        </form>
        <button>Signup</button>
        
       
       </div>
    );
}
export default Sign;