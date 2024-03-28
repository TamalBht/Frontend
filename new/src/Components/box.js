import "./box.css";
import { useState } from 'react';

function Box(){
    function handleClick(){
        setValue('X');

    }
    const [value,setValue]=useState('‎');
    return(
        <button className="box" onClick={handleClick}>{value}</button>
    );
}
export default Box;
