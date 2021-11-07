import React from "react";

const ShowVotes = ({ nfirstAnswer, nSecondAnswer }) => {
  const totalVotes = nfirstAnswer + nSecondAnswer;
  const firstAnswerVotes = nfirstAnswer;
  const secondAnswerVotes = nSecondAnswer;
  const firstAnswerPercentage = Math.round(
    (firstAnswerVotes / totalVotes) * 100
  );
  const secondAnswerPercentage = Math.round(
    (secondAnswerVotes / totalVotes) * 100
  );

  return (
    <div className="progress">
      <div
        className="progress-bar bg-success"
        style={{ width: `${firstAnswerPercentage}%` }}
        role="progressbar"
        aria-valuenow={firstAnswerPercentage}
        aria-valuemin="0"
        aria-valuemax="100">{`${firstAnswerPercentage}%`}</div>
      <div
        className="progress-bar bg-danger"
        style={{ width: `${secondAnswerPercentage}%` }}
        role="progressbar"
        aria-valuenow={secondAnswerPercentage}
        aria-valuemin="0"
        aria-valuemax="100">{`${secondAnswerPercentage}%`}</div>
    </div>
  );
};

export default ShowVotes;
