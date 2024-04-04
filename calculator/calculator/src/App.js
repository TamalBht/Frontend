import { useState } from 'react';
import './App.css';
import Wrapper from "./components/wrapper";
import Screen from "./components/screen";
import ButtonBox from "./components/buttobBox.js";
import Button from "./components/button";
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  let[calc,setCalc]=useState(()=>{
    sign: "";
    num: 0;
    res: 0;
  });
  return (
    <Wrapper>
      <Screen value= {calc.num?calc.num:calc.res} />
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  btn==='C'?resetClickHandler: btn==='+-'?invertClickHandler: btn ==='%'?percentClickHandler: btn==='='?equalClickHandler: btn==='+' || btn==='-'|| btn==='*'|| btn==='/'? signHandler: btn==='.'?decimalHandler: numHandler
                }}
                
              />
            );
          })
        }
        
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
