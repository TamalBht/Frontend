import "./wrapper.css";
import Box from "./box.js";
import { useState } from 'react';


function Wrapper(){
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(''));
    function handleClick(i) {
        if (squares[i]) {
          return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
          nextSquares[i] = 'X';
        } else {
          nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
      }
    return(
        <div className="wrapper">
            <div className="board-row">
                <Box value={squares[0]} onSquareClick={() => handleClick(0)}></Box>
                <Box value={squares[1]} onSquareClick={() => handleClick(1)}></Box>
                <Box value={squares[2]} onSquareClick={() => handleClick(2)}></Box>

            </div>
            <div className="board-row">
                <Box value={squares[3]} onSquareClick={() => handleClick(3)}></Box>
                <Box value={squares[4]} onSquareClick={() => handleClick(4)}></Box>
                <Box value={squares[5]} onSquareClick={() => handleClick(5)}></Box>

            </div> 
            <div className="board-row">
                <Box value={squares[6]} onSquareClick={() => handleClick(6)}></Box>
                <Box value={squares[7]} onSquareClick={() => handleClick(7)}></Box>
                <Box value={squares[8]} onSquareClick={() => handleClick(8)}></Box>

            </div>
        </div>
    );
}

export default Wrapper;
//basically the main box 