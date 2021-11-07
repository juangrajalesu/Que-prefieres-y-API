import React from "react";
import { Link } from "react-router-dom";

const QuestionNotFound = () => {
  return (
    <div className="d-flex justify-content-center  row">
      <h1 className="col-12  d-flex justify-content-center  mb-2">
        No hay preguntas en este momento{" "}
      </h1>
      <Link to="/new-question">
        <h1 className="d-flex justify-content-center">HAZ LA TUYA</h1>
      </Link>
    </div>
  );
};

export default QuestionNotFound;
