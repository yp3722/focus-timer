import React from 'react';
import styles from './CssModules/TimerControlButton.module.css'

const TimerControlButton = ({ buttonLabel, onClickSetState, onClickState, classNameModifier}) => {
  
  const handleClick = () => {
    onClickSetState(onClickState);
  };

  return (
    <div className={styles.button} onClick={handleClick}>
      <h2>{buttonLabel}</h2>
    </div>
  );
};

// Export the component
export default TimerControlButton;
