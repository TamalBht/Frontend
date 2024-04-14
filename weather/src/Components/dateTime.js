import React, { useState, useEffect } from 'react';
import "./dateTime.css"

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const dayOfWeek = dateTime.toLocaleDateString(undefined, { weekday: 'long' });
  const time = dateTime.toLocaleTimeString();

  return (
    <div className='dateTime'>
      <div className="day">{dayOfWeek}</div>
      
      <div className="time">{time}</div>
      

    </div>
  );
}

export default DateTime;