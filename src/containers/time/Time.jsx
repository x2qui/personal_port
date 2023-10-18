import React, { useState, useEffect } from 'react';
import './time.css';

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    

    return (
        <div className='x2q__time'>
          <div className="time-component">{formattedHours}  </div>
          <div className="time-component">{formattedMinutes} </div>
          
        </div>
      );
    };

  return (
    <div className='clockbg'>
      
      <h1 className='x2q__tp'>{formatTime(time)}</h1>
    </div>
  );
}

export default Time;
