import "./wrapper.css";
import Box from "./box.js";
import { useState } from 'react';

function Wrapper(){
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill('‎')); // Filled with whitespace character

    function handleClick(i) {
        if (squares[i] !== '‎' || calculateWinner(squares)) { // Check for whitespace character
          return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
          nextSquares[i] = 'X';
        } 
        else {
          nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    }
    else if(!squares.includes('‎')){
            status='Draw';
    } 
    
    else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');

    }
      
    return(
        <>
            <div className="status">{status}</div>
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
        </>
    );
}

export default Wrapper;

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] !== '‎' && squares[a] === squares[b] && squares[a] === squares[c]) { // Check for whitespace character
        return squares[a];
      }
    }
    return null;
}
