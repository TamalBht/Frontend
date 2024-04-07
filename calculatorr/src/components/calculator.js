import React, { useState } from 'react';
import Wrapper from './wrapper';
import Screen from './screen';
import ButtonBox from './buttobBox';
import Button from './button'
function Calculator(){
    const[value,setValue]=useState('0');
    function handleClick(buttonValue){
        if(buttonValue ==='C'){
            setValue('0');
        }
        else if(buttonValue==='<-'){
            setValue(value.slice(0,-1));
        }
        else if(buttonValue==='='){
            setValue(eval(value).toString());
        }
        else{
            setValue(value === '0'? buttonValue : value + buttonValue);

        }
    }
    return(
        <Wrapper>
            <Screen value={value}></Screen>
            <ButtonBox>
        <Button value="C" onclick={()=>{handleClick('C')}}/>
        <Button value="←" onClick={() => handleClick('<-')} />
        <Button value="/" onClick={() => handleClick('/')} />
        <Button value="." onClick={() => handleClick('.')} />
        <Button value="7" onClick={() => handleClick('7')} />
        <Button value="8" onClick={() => handleClick('8')} />
        <Button value="9" onClick={() => handleClick('9')} />
        <Button value="*" onClick={() => handleClick('*')} />
        <Button value="4" onClick={() => handleClick('4')} />
        <Button value="5" onClick={() => handleClick('5')} />
        <Button value="6" onClick={() => handleClick('6')} />
        <Button value="-"onClick={()=> handleClick('-')}/>
        <Button value="1" onClick={() => handleClick('1')} />
        <Button value="2" onClick={() => handleClick('2')} />
        <Button value="3" onClick={() => handleClick('3')} />
        <Button value="+"onClick={()=> handleClick('+')}/>
        <Button value="0" onClick={() => handleClick('0')} />
        <Button className="equalss" value="=" onClick={() => handleClick('=')} />
            </ButtonBox>
        </Wrapper>
    );
}
export default Calculator