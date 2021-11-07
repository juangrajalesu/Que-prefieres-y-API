import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="d-flex justify-content-center">404 - Not Found!</h1>
        <div className="d-flex justify-content-center">
          <Link to="/">
            <h1>Go home</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
