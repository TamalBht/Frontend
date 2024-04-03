import {useState} from 'react';
import './button.css'

function Theme(){
    const [initial,update]= useState();
    const color1="black";
    const color2="beige";
    document.body.style.background=color2;
    document.body.style.color=color1;


    function change(){
       if(initial){
          document.body.style.background=color1;
          document.body.style.color=color2;
          update(false);
          


       }
       else{
        document.body.style.background=color2;
        document.body.style.color=color1;  
        
        update(true);

       } 
    }
    return(
        <button onClick={change} className='changee'>Click me</button>
    );
}
export default Theme;