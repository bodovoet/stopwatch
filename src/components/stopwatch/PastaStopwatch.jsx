import React, { useState } from "react";

export default function PastaStopwatch({ seambitId }) {
  // Stopwatch states
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const startStopwatch = () => {
    setIsRunning(true);
    // Logic to start tracking time would go here
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    // Logic to stop tracking time and save elapsedTime would go here
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch for Seambit: {seambitId}</h1>
      <div className="timer-display">{elapsedTime}s</div>
      <div className="controls">
        {!isRunning ? (
          <button onClick={startStopwatch} className="btn start">
            Start
          </button>
        ) : (
          <button onClick={stopStopwatch} className="btn stop">
            Stop
          </button>
        )}
        <button onClick={resetStopwatch} className="btn reset">
          Reset
        </button>
      </div>
    </div>
  );
}