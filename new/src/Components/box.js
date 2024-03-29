import "./box.css";
import { useState } from 'react';

function Box({value,onSquareClick}){
    
    return(
        <button className="box" onClick={onSquareClick}>{value}</button>
    );
}
export default Box;
