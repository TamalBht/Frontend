import "./Wrapper.css"
import DateTime from "./dateTime.js";
import SearchButton from "./SearchButton.js";
import Weather from "./Weather.js";
function Wrapper({children}){
    return(
        <div className='Wrapper'>
            <div className='subWrapper'>
                <DateTime/>
                <Weather/>
            </div>            
        </div>
    );
}
export default Wrapper;