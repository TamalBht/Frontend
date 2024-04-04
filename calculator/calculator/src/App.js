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
const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

function App() {
  let[calc,setCalc]=useState({
    sign: "",
    num: 0,
    res: 0,
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
  const equalClickHandler=()=>{
    if(calc.sign && calc.num){
      //this sensures that the button cannot be called multiple times with same sign and num
      const maths = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;
        setCalc({
          ...calc,
          res:
            calc.num==='0' && calc.sign==='/'?'Error': toLocaleString(
              maths(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sign
              )
            ),
            sign: "",
            num:0,
        });
      };
    };
  
const invertClickHandler = () => {
  setCalc({
    ...calc,
    num: calc.num ? calc.num * -1 : 0,//anything other than 0 will be cosidered true
    res: calc.res ? calc.res * -1 : 0,
    sign: "",
  });
};
const percentClickHandler = () => {
  let num = calc.num ? parseFloat(calc.num) : 0;
  let res = calc.res ? parseFloat(calc.res) : 0;

  setCalc({
    ...calc,
    num: (num /= Math.pow(100, 1)),
    res: (res /= Math.pow(100, 1)),
    sign: "",
  });
};
const resetClickHandler = () => {
  setCalc({
    ...calc,
    sign: "",
    num: 0,
    res: 0,
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
                  btn==='C'?
                  resetClickHandler : 
                  btn==='+-'?
                  invertClickHandler: 
                  btn ==='%'?
                  percentClickHandler: 
                  btn==='='?
                  equalClickHandler:
                   btn==='+' || btn==='-'|| btn==='*'|| btn==='/'? 
                   signClickHandler: btn==='.'?
                   decimalHandler: 
                   numClickHandler;
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
