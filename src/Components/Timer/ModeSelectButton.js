import React from 'react';
import styles from './CssModules/ModeSelectButton.module.css'
import { getTimerLabel } from '../../utils/helperFunctions';

const ModeSelectButton = ({ buttonLabel, duration, timerState, clockModeParams, onClickSetState, onClickState }) => {
  
  const cssStyle = getTimerLabel(clockModeParams[0]) === buttonLabel ? styles.buttonSelected : (timerState === 'ready' ? styles.button : styles.buttonDisabled);
  
  const handleClick = () => {
    if (timerState === 'ready')  
    onClickSetState(onClickState);
  };


  return (
    <div className={cssStyle} onClick={handleClick}>
      <h2>{buttonLabel}</h2>
      <h2>{duration}</h2>
    </div>
  );
};

// Export the component
export default ModeSelectButton;
