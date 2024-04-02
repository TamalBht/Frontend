import {useState} from 'react';
function Theme(){
    const [initial,update]= useState(true);
    function change(){
       if(initial){
            console.log("hello");
       } 
    }
    return(
        <button>Click me</button>
    );
}
export default Theme;