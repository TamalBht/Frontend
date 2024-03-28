import Wrapper from './Components/wrapper.js';
import Box from"./Components/box.js";
import './App.css';

function App() {
  return (
    <Wrapper>
      <div className="board-row">
      <Box className="square" idName="top-left-box"></Box>
      <Box className="square"></Box>
      <Box className="square" idName="top-right-box"></Box>
      </div>
      <div className="board-row">
      <Box className="square"></Box>
      <Box className="square"></Box>
      <Box className="square"></Box>
      </div>
      <div className="board-row">
      <Box className="square"></Box>
      <Box className="square"></Box>
      <Box className="square"></Box>
      </div>

    </Wrapper>
  );
}

export default App;
