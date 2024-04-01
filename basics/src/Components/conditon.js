import Counter from "./useStte";
function User(props){
    return(props.isLoggedIn ? <Counter></Counter>:<h2>Login in nigga</h2>);
}
export default User;