import React, { useState, useEffect } from 'react';
import "./Weather.css";

import { Search,MapPin,Sun,ThermometerSun,Waves,Droplet,Cloud      } from 'lucide-react';
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
    const [location, setLocation] = useState(DEFAULT_LOCATION);
    const [weatherData, setWeatherData] = useState(null);


    const fetchWeatherData = (location) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
          .then(response => response.json())
          .then(data => setWeatherData(data))
          .catch(error => console.error(error));
    };
    useEffect(() => {
        fetchWeatherData(DEFAULT_LOCATION);

      }, []);
      
      const handleLocationChange = (event) => {
        setLocation(event.target.value);
      };
      const handleSearchClick = () => {
        fetchWeatherData(location);
          
      };
    
      console.log({weatherData});

    return(
        <div className='main-content'>
            <SearchButton location={location} onLocationChange={handleLocationChange} click={handleSearchClick}/>
            <div className='location'><MapPin/>{location}</div>
            <div className='tempp-details'>
                {weatherData&&(
                    <>
                        <div className='Weather-type'><Cloud/> Weather: {weatherData.weather[0].main}</div>
                        <p className='temp'><Sun/>Temperature: {weatherData.main.temp}°C</p>
                        <p className='temp'><ThermometerSun />Feels Like: {weatherData.main.feels_like}°C</p>
                        <p className='temp'><Waves/>Wind Speed: {weatherData.wind.speed} kmph</p>
                        <p className='temp'><Droplet/> Humidity: {weatherData.main.humidity}gm/cc</p>
                    </>
                
                
                )}
               
            </div>
            
           
        </div>
    );
};
export default Weather;