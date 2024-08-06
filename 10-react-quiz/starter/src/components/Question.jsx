import React from "react";
import Options from "./Options";
import { useQuize } from "../contexts/QuizeContext";
export default function Question() {
  const { questions, index, dispatch, answer } = useQuize();
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options
        question={questions[index]}
        answer={answer}
        dispatch={dispatch}
      />
    </div>
  );
}
