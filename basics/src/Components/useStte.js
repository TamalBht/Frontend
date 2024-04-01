import {useState} from 'react';

function Counter(){
    const [current,update]=useState(0);
    function decrease(){
        update(current-1);
    }
    function increase(){
        update(current+1);
    }
    return(
        <>
            <button onClick={decrease}>-</button>
            <span>{current}</span>
            <button onClick={increase}>+</button>
        </>
    );
}
export default Counter;