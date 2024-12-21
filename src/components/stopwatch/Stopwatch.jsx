import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [timestamps, setTimestamps] = useState([]);
  const [accountId, setAccountId] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const buttonLabels = ["Start Cycle", "Needle Start", "Needle End", "Stop Cycle"];

  // Fetch account_id and device_id from API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("@/api/v1/getIDs/route");
        const data = await response.json();

        if (data.accounts && data.accounts.length > 0) {
          const firstAccount = data.accounts[0];
          setAccountId(firstAccount.account_id);
          setDeviceId(firstAccount.devices[0]?.device_id || "Unknown");
        } else {
          console.error("No accounts or devices found.");
        }
      } catch (error) {
        console.error("Error fetching account and device IDs:", error);
      }
    }
    fetchData();
  }, []);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  const recordTimestamp = () => {
    const timestamp = new Date().toISOString();
    setTimestamps((prev) => [...prev, { step: currentStep, timestamp, elapsed: time }]);
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
      setCurrentStep(null); // Switch to "Save/Reset" mode
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

  const saveTimestamps = async () => {
    const dataToInsert = {
      account_id: accountId,
      device_id: deviceId,
      stopwatch_cycle_start: timestamps[0]?.timestamp || null,
      stopwatch_sewing_start: timestamps[1]?.timestamp || null,
      stopwatch_sewing_stop: timestamps[2]?.timestamp || null,
      stopwatch_cycle_stop: timestamps[3]?.timestamp || null,
      notes: null, // Add notes if necessary
    };

    try {
      const { error } = await supabase
        .from("stopwatch_timestamps")
        .insert([dataToInsert]);

      if (error) {
        console.error("Error inserting data:", error);
        alert("Failed to save timestamps.");
      } else {
        alert("Timestamps saved successfully!");
        resetStopwatch();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred.");
    }
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

  const calculateElapsed = (index) => {
    if (index === 0) return null;
    return formatTime(timestamps[index].elapsed - timestamps[index - 1].elapsed);
  };

  const totalSewingTime = timestamps[2] ? timestamps[2].elapsed - timestamps[1].elapsed : 0;
  const totalCycleTime = timestamps[3] ? timestamps[3].elapsed - timestamps[0].elapsed : 0;

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
          ? "Time measurement complete."
          : ""}
      </p>
      <div className="flex space-x-4 mb-6 justify-center">
        {currentStep === 0 && (
          <button
            className="px-6 py-2 rounded font-bold text-white bg-[#0066ff]"
            onClick={handleButtonClick}
          >
            {buttonLabels[currentStep]}
          </button>
        )}
        {currentStep !== null && currentStep !== 0 && (
          <>
            <button
              className="px-6 py-2 rounded font-bold text-white bg-[#0066ff]"
              onClick={handleButtonClick}
            >
              {buttonLabels[currentStep]}
            </button>
            <button
              className="px-6 py-2 rounded text-white bg-gray-500"
              onClick={resetStopwatch}
            >
              Reset
            </button>
          </>
        )}
        {currentStep === null && (
          <>
            <button
              className="px-6 py-2 rounded font-bold text-white bg-green-500"
              onClick={saveTimestamps}
            >
              Save
            </button>
            <button
              className="px-6 py-2 rounded text-white bg-gray-500"
              onClick={resetStopwatch}
            >
              Reset
            </button>
          </>
        )}
      </div>
      <div className="w-full">
        <h2 className="text-lg font-bold mb-2">Timestamps</h2>
        <ul className="list-disc pl-5">
          {timestamps.map((ts, index) => (
            <li key={index} className="mb-2">
              <span className="font-bold">{buttonLabels[ts.step]}: </span>
              {new Date(ts.timestamp).toLocaleTimeString()}
              {index > 0 && (
                <span className="text-gray-600"> (+{calculateElapsed(index)})</span>
              )}
            </li>
          ))}
        </ul>
        {timestamps.length === 4 && (
          <div className="mt-4">
            <p className="font-bold">
              Total Sewing Time: {formatTime(totalSewingTime)}
            </p>
            <p className="font-bold">
              Total Cycle Time: {formatTime(totalCycleTime)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}