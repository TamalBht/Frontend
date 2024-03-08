import "./wrapper.css";
function Wrapper({children}){
    return(
        <div className="wrapper">{children}</div>
    );
}
export default Wrapper;
/*children is used to render the components present in wrapper div*/ 