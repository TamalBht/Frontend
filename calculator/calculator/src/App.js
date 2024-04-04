import React,{ useState } from 'react';
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
  const numClickHandler=(e)=>{
    e.preventDefault();
    const value = e.target.innerHTML;

    if (calc.num.length<16){
      setCalc({
        ...calc,
        num:
        calc.num === 0 && value === "0"
        ? "0"
        : calc.num % 1 === 0
        ? Number(calc.num + value)
        : calc.num + value,
      res: !calc.sign ? 0 : calc.res,
      });
    }
  };
  const decimalHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };
  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };
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
                  btn==='C'?resetClickHandler: btn==='+-'?invertClickHandler: btn ==='%'?percentClickHandler: btn==='='?equalClickHandler: btn==='+' || btn==='-'|| btn==='*'|| btn==='/'? signClickHandler: btn==='.'?decimalHandler: numClickHandler
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
