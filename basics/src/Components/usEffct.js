import { useState,useEffect } from "react";
function Width(){
    const[width,changeWidth]=useState(window.innerWidth);
    function handle(){
        changeWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',handle);
    },[])
    return(<div>Inner width ={width}</div>);
}
export default Width;