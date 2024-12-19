"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Play, Pause, RotateCcw } from 'lucide-react';

const PastaStopwatch = ({ seambitId }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [timestamps, setTimestamps] = useState({
    cycleStart: null,
    needleStart: null,
    needleEnd: null,
    cycleEnd: null
  });
  const [elapsedTime, setElapsedTime] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10); // Update every 10ms for smoother display
    }
    return () => clearInterval(intervalId);
  }, [isRunning, startTime]);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsRunning(true);
    setStartTime(Date.now());
    setCurrentStep(1);
    setTimestamps({
      ...timestamps,
      cycleStart: Date.now()
    });
  };

  const handleStep = () => {
    if (!isRunning) return;

    switch (currentStep) {
      case 1:
        setTimestamps({
          ...timestamps,
          needleStart: Date.now()
        });
        setCurrentStep(2);
        break;
      case 2:
        setTimestamps({
          ...timestamps,
          needleEnd: Date.now()
        });
        setCurrentStep(3);
        break;
      case 3:
        const finalTimestamps = {
          ...timestamps,
          cycleEnd: Date.now()
        };
        setTimestamps(finalTimestamps);
        setIsRunning(false);
        handleSubmit(finalTimestamps);
        break;
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setStartTime(null);
    setTimestamps({
      cycleStart: null,
      needleStart: null,
      needleEnd: null,
      cycleEnd: null
    });
    setElapsedTime(0);
    setError(null);
  };

  const handleSubmit = async (finalTimestamps) => {
    try {
      const response = await fetch('/api/pasta-cycle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          seambitId,
          ...finalTimestamps
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save cycle data');
      }
    } catch (err) {
      setError('Failed to save cycle data. Please try again.');
    }
  };

  const getStepLabel = () => {
    switch (currentStep) {
      case 0:
        return 'Press Start to begin cycle';
      case 1:
        return 'Press when first needle movement starts';
      case 2:
        return 'Press when last needle movement ends';
      case 3:
        return 'Press when cycle ends (Aside complete)';
      default:
        return 'Cycle complete';
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">PASTA Cycle Stopwatch</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-6">
          <div className="text-4xl font-mono">
            {formatTime(elapsedTime)}
          </div>

          <div className="text-center text-lg font-medium">
            {getStepLabel()}
          </div>

          <div className="flex justify-center space-x-4">
            {currentStep === 0 ? (
              <Button 
                size="lg"
                onClick={handleStart}
                className="bg-green-600 hover:bg-green-700"
              >
                <Play className="mr-2" />
                Start
              </Button>
            ) : (
              <Button
                size="lg"
                onClick={handleStep}
                disabled={!isRunning}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Pause className="mr-2" />
                Mark Step
              </Button>
            )}

            <Button
              size="lg"
              onClick={handleReset}
              variant="outline"
              className="border-gray-300"
            >
              <RotateCcw className="mr-2" />
              Reset
            </Button>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {timestamps.cycleStart && (
            <div className="w-full space-y-2 text-sm">
              <div>Cycle Start: {new Date(timestamps.cycleStart).toISOString()}</div>
              {timestamps.needleStart && (
                <div>Needle Start: {new Date(timestamps.needleStart).toISOString()}</div>
              )}
              {timestamps.needleEnd && (
                <div>Needle End: {new Date(timestamps.needleEnd).toISOString()}</div>
              )}
              {timestamps.cycleEnd && (
                <div>Cycle End: {new Date(timestamps.cycleEnd).toISOString()}</div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PastaStopwatch;