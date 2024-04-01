import {useState} from 'react';

function Theme(){
    const [initial,update]=useState(true);
//true= dark flase=light
    function eventHandler(){
        if(initial){
            update(false);
        }
        else{
            update(true);
        }
    }
}