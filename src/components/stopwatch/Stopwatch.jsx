import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [timestamps, setTimestamps] = useState([]);
  const buttonLabels = ["Start Cycle", "Needle Start", "Needle End", "Stop Cycle"];

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  const recordTimestamp = () => {
    const timestamp = new Date().toISOString();
    setTimestamps((prev) => [...prev, { step: buttonLabels[currentStep], timestamp }]);
  };

  const handleButtonClick = () => {
    if (currentStep === 0) {
      setIsRunning(true);
      setTime(0);
      recordTimestamp();
      setCurrentStep(1);
    } else if (currentStep === 3) {
      setIsRunning(false);
      recordTimestamp();
      setCurrentStep(null); // Switch to "Reset Only" mode
    } else {
      recordTimestamp();
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
    setCurrentStep(0);
    setTimestamps([]);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="p-6 border border-[#aaaaaa] rounded-[5px] bg-transparent">
      <h1 className="text-xl font-bold mb-4">PASTA Cycle Stopwatch</h1>
      <div className="mb-4 text-4xl font-bold text-gray-800 bg-[#e8e9ed] p-4 rounded-[5px] flex items-center justify-center">
        {formatTime(time)}
      </div>
      <p className="mb-4 text-gray-600 text-center">
        {currentStep === 0
          ? "Press Start Cycle to begin"
          : currentStep === null
          ? "Cycle complete. Press Reset to restart."
          : `Current Step: ${buttonLabels[currentStep]}`}
      </p>
      <div className="flex flex-col items-center space-y-4 mb-6">
        {currentStep !== null && currentStep !== null && (
          <button
            className="px-6 py-2 rounded text-white bg-[#0066ff]"
            onClick={handleButtonClick}
          >
            {buttonLabels[currentStep]}
          </button>
        )}
        {currentStep === null && (
          <button
            className="px-6 py-2 rounded text-white bg-gray-500"
            onClick={resetStopwatch}
          >
            Reset
          </button>
        )}
      </div>
      <div className="w-full">
        <h2 className="text-lg font-bold mb-2">Timestamps</h2>
        <ul className="list-disc pl-5">
          {timestamps.map((ts, index) => (
            <li key={index} className="mb-2">
              <span className="font-bold">{ts.step}: </span>
              {new Date(ts.timestamp).toLocaleTimeString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}