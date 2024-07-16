import React from 'react';

const ModeSelectButton = ({ buttonLabel, duration, onClickSetState, onClickState, classNameModifier }) => {
  
  const handleClick = () => {
    onClickSetState(onClickState);
  };

  // Construct the modifier class if it exists
  const modifierClass = classNameModifier ? ` mode-select-button--${classNameModifier}` : "";

  return (
    <div className={`mode-select-button${modifierClass}`} onClick={handleClick}>
      <h2>{buttonLabel}</h2>
      <h2>{duration}</h2>
    </div>
  );
};

// Export the component
export default ModeSelectButton;
