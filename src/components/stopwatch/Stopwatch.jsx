import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [timestamps, setTimestamps] = useState([]);
  const [seambits, setSeambits] = useState([]);
  const [selectedSeambit, setSelectedSeambit] = useState(null);
  const [isSeambitLocked, setIsSeambitLocked] = useState(false);

  const buttonLabels = ["Cycle START", "Sewing START", "Sewing STOP", "Cycle STOP"];

  // Fetch seambits from the API
  useEffect(() => {
    async function fetchSeambits() {
      try {
        const response = await fetch("/api/v1/getIDs");
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setSeambits(data);
        } else {
          console.error("Unexpected data format:", data);
          setSeambits([]); // Default to an empty array if the data format is wrong
        }
      } catch (error) {
        console.error("Error fetching seambits:", error);
        setSeambits([]); // Default to an empty array on error
      }
    }
    fetchSeambits();
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
      setIsSeambitLocked(true); // Lock the dropdown
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
    setIsSeambitLocked(false); // Unlock the dropdown
    setSelectedSeambit(null); // Reset dropdown selection
  };

  const saveTimestamps = async () => {
    const dataToInsert = {
      account_id: "example_account_id", // Placeholder for now
      device_id: selectedSeambit.device_id, // Use the device_id from the selected seambit
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

  return (
    <div className="p-6 border border-[#aaaaaa] rounded-[10px] bg-white">
      <div className="mb-4">
        <select
          id="seambit-select"
          className="w-full p-2 border border-[#aaaaaa] rounded-[5px]"
          value={selectedSeambit ? selectedSeambit.device_id : ""}
          onChange={(e) =>
            setSelectedSeambit(
              seambits.find((seambit) => seambit.device_id === e.target.value)
            )
          }
          disabled={isSeambitLocked}
        >
          <option value="" disabled>
            Select a seambit
          </option>
          {seambits.map((seambit) => (
            <option key={seambit.device_id} value={seambit.device_id}>
              Seambit label {seambit.label} {/* Show label */}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 text-4xl font-bold text-gray-800 bg-[#e8e9ed] border border-[#aaaaaa] p-4 rounded-[10px] flex items-center justify-center">
        {formatTime(time)}
      </div>
      <p className="mb-4 text-gray-600 text-center">
        {currentStep === 0
          ? "Press Start Cycle to begin"
          : currentStep === null
          ? "Time measurement complete."
          : "Follow steps"}
      </p>
      <div className="flex space-x-4 mb-6 justify-center">
        {currentStep === 0 && (
          <button
            className={`px-6 py-6 rounded-[10px] text-xl font-bold text-white ${
              !selectedSeambit ? "bg-[#a3caff]" : "bg-[#0066ff]"
            }`}
            onClick={handleButtonClick}
            disabled={!selectedSeambit} // Disable until a seambit is selected
          >
            {buttonLabels[currentStep]}
          </button>
        )}
        {currentStep !== null && currentStep !== 0 && (
          <>
            <button
              className="px-6 py-6 rounded-[10px] text-xl font-bold text-white bg-[#0066ff]"
              onClick={handleButtonClick}
            >
              {buttonLabels[currentStep]}
            </button>
            <button
              className="px-6 py-6 rounded-[10px] text-xl text-gray-500 bg-[#e8e9ed]"
              onClick={resetStopwatch}
            >
              Reset
            </button>
          </>
        )}
        {currentStep === null && (
          <>
            <button
              className="px-6 py-6 rounded-[10px] text-xl font-bold text-white bg-[#0066ff]"
              onClick={saveTimestamps}
            >
              Save
            </button>
            <button
              className="px-6 py-6 rounded-[10px] text-xl text-gray-500 bg-[#e8e9ed]"
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}