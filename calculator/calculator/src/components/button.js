import "./button.css"
function Button({className,value,onClick}){
    return(
        <button className={className} onClick={onClick}>{value}</button>
    );
}
export default Button;
//in this on clicking a specific button the function corresponding to it will be trigered