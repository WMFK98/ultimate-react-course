import React from "react";
import { useQuize } from "../contexts/QuizeContext";

export default function StartScreen() {
  const { numQues, dispatch } = useQuize();
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQues} question to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
