import React, { useState, useEffect } from 'react';
import ModeSelectButton from './ModeSelectButton';
import TimerControlButton from './TimerControlButton';
import styles from "./CssModules/MainTimer.module.css"
import { formatTime, getTimerLabel } from '../../utils/helperFunctions';

  const MainTimer = () => {
    const [clockModeParams, setClockModeParams] = useState(['focus-time',1500]);    // [mode, duration]....modes : focus-time, short-break, long-break 
    const [timerState, setTimerState] = useState('ready');   // ready, started, paused, finished
    const [timerParams, setTimerParams] = useState([0,null]); // [current_count, intervalID]
    const timerLabel = getTimerLabel(clockModeParams[0]);
    
    useEffect(() => {
        console.log('MainTimer  --Component rerendered');
    });

    useEffect(() => {
        console.log(`timerState changed to: ${timerState}`);
        switch (timerState) {
          
          case 'started':
            let count = timerParams[0];
            const intervalId = setInterval(()=>{
              count++;
              setTimerParams([count, intervalId])
            },1000);
            break;
          
          case 'paused':
            clearInterval(timerParams[1]);
            break;

          default:
            setTimerParams([0,null]);
        }
    }, [timerState]);

    useEffect(() => {
      console.log(`timer params: ${timerParams}`);
      // timer finished update checkpoints
      if(timerParams[0] === clockModeParams[1]){
        setTimerState('ready')
      }
    }, [timerParams]);

    return (
    <div className={styles.parentContainer}>
        
       <div className={styles.counterContainer}>
           <h2 className={styles.counterLabel}>{timerLabel}</h2>
           <h2 className={styles.counter}>{formatTime(clockModeParams[1]-timerParams[0])}</h2>
       </div>  

       <div className={styles.controlPanel} >

          <div className={styles.timerControlsContainer}>
          {timerState === 'ready' ? (
              <TimerControlButton 
                  buttonLabel="Start" 
                  onClickSetState={setTimerState} 
                  onClickState='started' 
              />
          ) : null}    
          {timerState === 'started' ? (
              <TimerControlButton 
                  buttonLabel="Pause" 
                  onClickSetState={setTimerState} 
                  onClickState='paused' 
              />
          ) : null}    
          {timerState === 'paused' ? (
              <TimerControlButton 
                  buttonLabel="Resume" 
                  onClickSetState={setTimerState} 
                  onClickState='started' 
              />
          ) : null}    
          {timerState === 'paused' ? (
              <TimerControlButton 
                  buttonLabel="Reset" 
                  onClickSetState={setTimerState} 
                  onClickState='ready' 
              />
          ) : null}
          </div>   

          <div className={styles.modeSelectionContainer}>
            <ModeSelectButton buttonLabel="Focus Time" duration="25 min"  timerState={timerState} clockModeParams={clockModeParams} onClickSetState={setClockModeParams} onClickState={['focus-time',1500]} />
            <ModeSelectButton buttonLabel="Short Break" duration="5 min"  timerState={timerState} clockModeParams={clockModeParams} onClickSetState={setClockModeParams} onClickState={['short-break',300]}   />
            <ModeSelectButton buttonLabel="Long Break" duration="15 min"  timerState={timerState} clockModeParams={clockModeParams} onClickSetState={setClockModeParams} onClickState={['long-break',900]}   />
          </div>
        
        
       </div> 

    </div>
  );
};

// Export the component
export default MainTimer;