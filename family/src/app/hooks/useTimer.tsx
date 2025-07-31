import { useState, useEffect, useRef, useCallback } from "react";

interface TimerProps {
  initTime: number;
  onTimerEnd?: () => void;
}

interface useTimerReturn {
  timeLeft: number;
  formattedTime: string;
  startTimer: () => void;
  resetTimer: () => void;
  stopTimer: () => void;
  isTimerRunning: boolean;
}

export const useTimer = ({
  initTime,
  onTimerEnd,
}: TimerProps): useTimerReturn => {
  const [timeLeft, setTimeLeft] = useState(initTime);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (timeLeft <= 0 || !isTimerRunning) {
      setTimeLeft(initTime);
    }
    setIsTimerRunning(true);
  }, [initTime, timeLeft, isTimerRunning]);

  const stopTimer = useCallback(() => {
    setIsTimerRunning(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const resetTimer = useCallback(() => {
    stopTimer();
    setTimeLeft(initTime);
  }, [initTime, stopTimer]);

  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            stopTimer();
            onTimerEnd?.();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [stopTimer, timeLeft, isTimerRunning, onTimerEnd]);

  const formattedTime = `${Math.floor(timeLeft / 60)
    .toString()
    .padStart(1, "0")}:${(timeLeft % 60).toString().padStart(2, "0")}`;

  return {
    startTimer,
    resetTimer,
    timeLeft,
    formattedTime,
    isTimerRunning,
    stopTimer,
  };
};
