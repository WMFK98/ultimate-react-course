import React from "react";
import { useQuize } from "../contexts/QuizeContext";

export default function Progress() {
  const { index, numQuestions, points, maxPoints, answer } = useQuize();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        Pointss <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}
