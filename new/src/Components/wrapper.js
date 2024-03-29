import "./wrapper.css";
import Box from "./box.js";
import { useState } from 'react';


function Wrapper(){
    const [xIsNext, setXIsNext] = useState(true);//in this X is defined as the default first player
    const [squares, setSquares] = useState(Array(9).fill('‎'));//initially all the boxes are set to null and we are doin this in the parent element rather than the child element
    //the parent element is used to record so that we can keep track odf the states of all the boxes without using them
    function handleClick(i) {
        if (squares[i]!=='‎' || calculateWinner(squares)) {//used to check if the square is already used or not
          return;
        }
        const nextSquares = squares.slice();//the entire thing is sliced into an array
        if (xIsNext) {
          nextSquares[i] = 'X';//if condition is satisfied then X is written on ith element i.e ith box
        } else {
          nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
      }
      const winner = calculateWinner(squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
      }
      
      //next onSquareClick is a prop function that is passed after clicking on the button
      //now the value of the squareClick is decided by handleclick(i)
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
//now we write a code to declare the winner
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
    ];//all the possibilities of winning the game
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }