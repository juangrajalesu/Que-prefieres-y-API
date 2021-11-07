import React from "react";

const Skip = ({ onClick }) => {
  return (
    <div className="d-flex justify-content-center ">
      <div
        className="btn skip"
        onClick={onClick}>
        <h1>▼</h1>
      </div>
    </div>
  );
};

export default Skip;
