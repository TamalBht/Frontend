import {useState} from 'react';

function Theme(){
    var [initial,update]=useState(true);
//true= dark flase=light
    function eventHandler(){
        if(initial){
            update( initial=false);
            return(<div style={{background:"black"}}></div>);
        }
        else{
            update(initial=true);
            return(<div style={{background:"white"}}></div>);

        }
    }
    return(
        <>
            <button onClick={eventHandler}></button>
        </>
    );
}
export default Theme;