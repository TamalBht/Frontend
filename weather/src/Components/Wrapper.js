import "./Wrapper.css"
import Vid from "./vid.js";
function Wrapper({children}){
    return(
        <div className='Wrapper'>
            {children}
            <Vid></Vid>
        </div>
    );
}
export default Wrapper;