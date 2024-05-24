import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import Cronometro from "/public/cronometro.png";
import { useCarContext } from '../../context/CarControlsContext';

const Stopwatch = forwardRef((props, ref) => {
  const { startToEnd, setTimeLevel, timeLevel } = useCarContext();


  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (startToEnd) {
      interval = setInterval(() => {
        setTimeLevel(prevTime => prevTime + 1);
      }, 1000);
    } else if (!startToEnd && timeLevel !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startToEnd]);

  

  const stopStopwatch = () => {
    setIsActive(false);
  };

  // const resetStopwatch = () => {
  //   setIsActive(false);
  //   setTimeLevel(0);
  // };

  const getCurrentTime = () => {
    alert(`Current time: ${new Date(timeLevel * 1000).toISOString().substr(11, 8)}`);
  };

  useImperativeHandle(ref, () => ({
    getTime: () => timeLevel,
  }));

  return (
    <div className='Stopwatch'>

        <img src={Cronometro} alt="Cronometro" />
        <h1>{new Date(timeLevel * 1000).toISOString().substr(11, 8)}</h1>
        <div className="funcionalidades d-none">
            {/* <button onClick={stopStopwatch}>Stop</button>
            <button onClick={resetStopwatch}>Reset</button>
            <button onClick={getCurrentTime}>Get Current Time</button> */}
        </div>
    </div>
  );
});

export default Stopwatch;
