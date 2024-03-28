import Wrapper from './Components/wrapper.js';
import Box from"./Components/box.js";
import './App.css';

function App() {
  return (
    <Wrapper>
      <div className="board-row">
                <Box></Box>
                <Box></Box>
                <Box></Box>

            </div>
            <div className="board-row">
                <Box></Box>
                <Box></Box>
                <Box></Box>

            </div> 
            <div className="board-row">
                <Box></Box>
                <Box></Box>
                <Box></Box>

            </div>
    </Wrapper>
     
  );
}

export default App;
