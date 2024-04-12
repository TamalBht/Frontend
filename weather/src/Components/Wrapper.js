import "./Wrapper.css"
import DateTime from "./dateTime.js";
import SearchButton from "./SearchButton.js";
function Wrapper({children}){
    return(
        <div className='Wrapper'>
            <div className='subWrapper'>
                <DateTime/>
                <SearchButton/>
            </div>            
        </div>
    );
}
export default Wrapper;