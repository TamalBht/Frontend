import "./SearchButton.css"
import { Search } from 'lucide-react';


const SearchButton=()=>{
    
    return(
        <div className="search">
           <button ><Search /></button>
           <input type="text" placeholder="Search cities"></input>

        </div>
    );
};
 export default SearchButton;