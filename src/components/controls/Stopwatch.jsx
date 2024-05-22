import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import Cronometro from "/public/cronometro.png";
import { useCarContext } from '../../context/CarControlsContext';

const Stopwatch = forwardRef((props, ref) => {
  const { startToEnd } = useCarContext();


  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (startToEnd) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!startToEnd && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startToEnd, time]);

  

  const stopStopwatch = () => {
    setIsActive(false);
  };

  const resetStopwatch = () => {
    setIsActive(false);
    setTime(0);
  };

  const getCurrentTime = () => {
    alert(`Current time: ${new Date(time * 1000).toISOString().substr(11, 8)}`);
  };

  useImperativeHandle(ref, () => ({
    getTime: () => time,
  }));

  return (
    <div className='Stopwatch'>

        <img src={Cronometro} alt="Cronometro" />
        <h1>{new Date(time * 1000).toISOString().substr(11, 8)}</h1>
        <div className="funcionalidades d-none">
            <button onClick={stopStopwatch}>Stop</button>
            <button onClick={resetStopwatch}>Reset</button>
            <button onClick={getCurrentTime}>Get Current Time</button>
        </div>
    </div>
  );
});

export default Stopwatch;
