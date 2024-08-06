import React from "react";
import { useQuize } from "../contexts/QuizeContext";
export default function NextButton() {
  const { dispatch, answer, numQuestions, index } = useQuize();
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        NextButton
      </button>
    );
  return (
    <button onClick={() => dispatch({ type: "finish" })} className="btn btn-ui">
      Finish
    </button>
  );
}
