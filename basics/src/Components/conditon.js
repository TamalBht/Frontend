function User(props){
    return(props.isLoggedIn ? <h2>Welcome back</h2>:<h2>Login in nigga</h2>);
}
export default User;