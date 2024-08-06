import React, { useEffect, useState } from "react";
import { useQuize } from "../contexts/QuizeContext";
export default function Timer() {
  const { dispatch, secondsRemaining } = useQuize();
  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => clearInterval(id);
  }, [dispatch, secondsRemaining]);

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}
