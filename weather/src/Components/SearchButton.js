import "./SearchButton.css"
import { Search } from 'lucide-react';


const SearchButton=({value})=>{
    const eventHandler=value;
    return(
        <div className="search">
           <button onClick={eventHandler}><Search /></button>
           <input type="text" placeholder="Search cities"></input>

        </div>
    );
};
 export default SearchButton;