import React, { useState, useEffect } from 'react';

const getTimerLabel = (mode) => {
  switch (mode) {
    case 'focus-time':
      return 'Focus Timer';
    case 'short-break':
      return 'Short Break';
    case 'long-break':
      return 'Long Break';
    default:
      return '';
  }
};

const getCountDownTime = (mode) => {
  switch (mode) {
    case 'focus-time':
      return '25:00';
    case 'short-break':
      return '05:00';
    case 'long-break':
      return '15:00';
    default:
      return '';
  }
};

// Define a functional component
const CounterDisplay = ({ mode }) => {
  //const [displayTime, setDisplayTime] = useState(getCountDownTime(mode));
  const displayTime = getCountDownTime(mode);
  const timerLabel = getTimerLabel(mode);

  // useEffect(() => {
  //   console.log('CounterDisplay --Component rerendered');
  // });

  return (
    <div className="counter-display">
      <h2>{timerLabel}</h2>
      <h2>{displayTime}</h2>
    </div>
  );
};

// Export the component
export default CounterDisplay;
