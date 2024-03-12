
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
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        
        <Button
          className=""
          value="0"
          onClick={() => {
            console.log("Button clicked!");
          }}
        />
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
