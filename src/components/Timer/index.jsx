import React, { useEffect, useRef, useState } from 'react';
import css from './index.module.css';

const Timer = () => {

  // timer
  const timer = useRef({})
  const [time, setTime] = useState(0)

  function incrementTimer() {
    setTime((prev) => prev + 1);
  }

  function startTimer() {
    timer.current = setInterval(incrementTimer, 1000);
  }

  useEffect(() => {
    startTimer();
  }, [])

  return (
    <div>
      {time}
    </div>
  );
}

export default Timer;