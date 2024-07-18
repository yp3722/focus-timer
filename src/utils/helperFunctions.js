export const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  
export const getTimerLabel = (modeLabel) => {
      switch (modeLabel) {
        case 'focus-time':
          return 'Focus Time';
        case 'short-break':
          return 'Short Break';
        case 'long-break':
          return 'Long Break';
        default:
          return '';
      }
    };
  