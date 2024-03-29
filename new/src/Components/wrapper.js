import "./wrapper.css";
import Box from "./box.js";
import { useState } from 'react';


function Wrapper(){
    const [squares, setSquares] = useState(Array(9).fill('‎'));

    return(
        <div className="wrapper">
            <div className="board-row">
                <Box value={squares[0]}></Box>
                <Box value={squares[1]}></Box>
                <Box value={squares[2]}></Box>

            </div>
            <div className="board-row">
                <Box value={squares[3]}></Box>
                <Box value={squares[4]}></Box>
                <Box value={squares[5]}></Box>

            </div> 
            <div className="board-row">
                <Box value={squares[6]}></Box>
                <Box value={squares[7]}></Box>
                <Box value={squares[8]}></Box>

            </div>
        </div>
    );
}

export default Wrapper;
//basically the main box 