import React from "react";

const Answer = ({ text, color, onClick }) => {
  const colors = {
    red: "btn-danger",
    green: "btn-success",
    blue: "btn-info",
    yellow: "btn-warning",
  };

  return (
    <button type="button" className={"mb-2 flex-fill btn " + colors[color]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Answer;
