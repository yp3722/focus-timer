import React, { useState, useEffect } from 'react';
import CounterDisplay from './CounterDisplay';
import ModeSelectButton from './ModeSelectButton';
import TimerControlButton from './TimerControlButton';

// Define a functional component
const MainTimer = () => {
    const [mode, setMode] = useState('focus-time');    // focus-time, short-break, long-break 
    const [timerState, setTimerState] = useState('ready');   // ready, running, paused, finished
    // const [timerLabel, setTimerLabel] = useState('Focus Time')
    //  (1)start -> (2)pause -> (3)resume + reset                (4)finished

    //  in timerState (1)start : user can select mode ; and start timer countdown 
    //  in timerState (2)pause : user can pause timer;
    //  in timerState (3) : user can unpause timer or send timerState to start by clicking reset
    //  when timerState(4) is triggered : we update the counter for progress list and then reset
   
    // let classNameModifiersFocus = "focus-time"
    // let classNameModifiersShortBreak = "short-break"
    // let classNameModifiersLongBreak = "long-break"
    useEffect(() => {
        console.log('MainTimer  --Component rerendered');
      });

    useEffect(()=>{
        console.log('MainTimer --init');
        // classNameModifiersFocus = "focus-time"
        // classNameModifiersShortBreak = "short-break"
        // classNameModifiersLongBreak = "long-break"
    },[]);
    
    // useEffect(() => {
    //     console.log(`Mode changed to: ${mode}`);
        
    //   }, [mode]);

    return (
    <div className="main-timer">
        <CounterDisplay mode={mode} />
        

        <TimerControlButton buttonLabel="Start" />  
        
        <TimerControlButton buttonLabel="Pause" />
        
        <TimerControlButton buttonLabel="Resume" />  
        <TimerControlButton buttonLabel="Reset" />
          
      <div className="mode-selection">
        <ModeSelectButton buttonLabel="Focus" duration="25 Min"   onClickSetState={setMode} onClickState="focus-time"   classNameModifier="focus" />
        <ModeSelectButton buttonLabel="Short Break" duration="5 Min" onClickSetState={setMode} onClickState="short-break"  classNameModifier="short-break" />
        <ModeSelectButton buttonLabel="Long Break" duration="30 Min" onClickSetState={setMode} onClickState="long-break"  classNameModifier="long-break" />
      </div>
    </div>
  );
};

// Export the component
export default MainTimer;