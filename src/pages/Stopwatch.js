import React, { useState } from "react";
import { Play, RotateCcw } from 'lucide-react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [timestamps, setTimestamps] = useState([]);
  const buttonLabels = ["Start", "Needle start", "Needle end", "Stop cycle"];

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
      setCurrentStep(0);
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

  React.useEffect(() => {
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
    <div className="flex min-h-screen bg-[#f1f1f1] p-4">
      <div className="m-auto bg-white rounded-[5px] p-8 w-[400px]">
        {/* Title */}
        <h1 className="text-[26px] mb-6 text-center">
          PASTA Cycle Stopwatch
        </h1>

        {/* Timer */}
        <div className="font-mono text-[64px] text-center mb-6 font-light tracking-[0.15em]">
          {formatTime(time)}
        </div>

        {/* Instructions */}
        <div className="text-[24px] text-center mb-8">
          Press Start to begin cycle
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleButtonClick}
            className={`flex items-center gap-2 px-8 py-3 rounded-md text-[18px]
              ${currentStep === 0 
                ? "bg-[#4CAF50] text-white hover:bg-[#45a049]" 
                : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
          >
            {currentStep === 0 && <Play size={20} />}
            {buttonLabels[currentStep]}
          </button>
          
          <button
            onClick={resetStopwatch}
            className="flex items-center gap-2 px-8 py-3 rounded-md border border-gray-200 
                     hover:bg-gray-50 text-[18px]"
          >
            <RotateCcw size={20} />
            Reset
          </button>
        </div>

        {/* Timestamps */}
        {timestamps.length > 0 && (
          <div className="mt-8">
            <h2 className="text-[20px] font-medium mb-3">Timestamps</h2>
            <ul className="list-disc pl-5 space-y-1">
              {timestamps.map((ts, index) => (
                <li key={index}>
                  <span className="font-medium">{ts.step}:</span>{' '}
                  {new Date(ts.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                  })}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}