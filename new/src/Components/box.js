import "./box.css";
function Box(props){
    const value=props.text;
    return(
        <button className="box">{value}</button>
    );
}
export default Box;
