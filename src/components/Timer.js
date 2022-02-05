import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
      setIsActive(true);
  }, [])

  useEffect(() => {
    if(props.wilmaWasClicked && props.wallyWasClicked && props.wizardWasClicked) {
        setIsActive(false);
    }
  }, [props.wilmaWasClicked, props.wallyWasClicked, props.wizardWasClicked])

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        Time: {seconds}s
      </div>
    </div>
  );
};

export default Timer;