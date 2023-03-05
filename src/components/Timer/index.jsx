import React, { useContext, useEffect, useState } from 'react';

import SapperContext from '../../context';

const Timer = () => {

  // context data
  let { isFirstClick, isGameEnded, timer } = useContext(SapperContext)

  // timer
  const [time, setTime] = useState(0)

  function incrementTimer() {
    setTime((prev) => prev + 1);
  }

  function startTimer() {
    timer.current = setInterval(incrementTimer, 1000);
  }

  function stopTimer() {
    clearInterval(timer.current)
  }

  useEffect(() => {
    // if game ended
    if (isGameEnded) {
      stopTimer()
    }

    // if first click is registered
    if (isFirstClick === true && !isGameEnded) {
      startTimer();
    }

    // if new game statred
    if (!isGameEnded && isFirstClick === null) {
      setTime(0)
    }
  }, [isFirstClick, isGameEnded])

  return (
    <div>
      {time}
    </div>
  );
}

export default Timer;