import React from "react";

export default function FinishScreen({
  points,
  maxPoints,
  highccore,
  dispatch,
}) {
  const percentage = Math.ceil((points / maxPoints) * 100);
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        {emoji} Your scored <strong>{points}</strong> out of {maxPoints} (
        {percentage}%)
      </p>
      <p className="highscore">(Highscore: {highccore} points)</p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        restart
      </button>
    </>
  );
}
