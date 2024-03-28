import "./wrapper.css";
import Box from "./box.js";

function Wrapper(){
    return(
        <div className="wrapper">
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
        </div>
    );
}

export default Wrapper;
//basically the main box 