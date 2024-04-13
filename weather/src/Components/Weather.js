import React, { useState, useEffect } from 'react';
import "./Weather.css";

import { Search,MapPin  } from 'lucide-react';
const SearchButton=({ location, onLocationChange,click })=>{
    
    return(
        <div className="search">
           <button onClick={click}><Search /></button>
           <input  type="text" value={location} onChange={onLocationChange}  placeholder="Search cities" ></input>

        </div>
    );
};

const Weather=()=>{
    
    const API_KEY = '7b0fd82d50289c4a650207ba28724c60';
    const DEFAULT_LOCATION = 'Kolkata';
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState(DEFAULT_LOCATION);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
          .then(response => response.json())
          .then(data => setWeatherData(data))
          .catch(error => console.error(error));
      }, []);
      const handleLocationChange = (event) => {
        setLocation(event.target.value);
      };
      const handleSearchClick = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
          .then(response => response.json())
          .then(data => setWeatherData(data))
          .catch(error => console.log(error));
          
      };
    
      console.log({weatherData});

    return(
        <div className='main-content'>
            <SearchButton location={location} onLocationChange={handleLocationChange} click={handleSearchClick}/>
            <div className='location'><MapPin/>{location}</div>
            <div className='tempp'>{weatherData.main.temp}</div>
            
           
        </div>
    );
};
export default Weather;