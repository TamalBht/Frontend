import {useState} from 'react';
function Theme(){
    const [inital,update]=useState(true);
    return(
        <button>Click me</button>
    );
}
export default Theme;