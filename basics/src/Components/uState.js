import {useState} from 'react';
import './button.css'

function Theme(){
    const [initial,update]= useState();
    const color1="black";
    const color2="beige";
    function change(){
       if(initial){
          document.body.style.background=color1; 
          update(false);
 
       }
       else{
        document.body.style.background=color2;  
        update(true);

       } 
    }
    return(
        <button onClick={change} className='changee'>Click me</button>
    );
}
export default Theme;