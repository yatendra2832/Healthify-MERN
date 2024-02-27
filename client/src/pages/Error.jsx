import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
const Error = () => {
  
  return (
    <>
      <div className="my-4 mx-1 p-4 rounded-5 shadow-lg text-center bg-light">
        <div className="error-page p-4 my-4">
          <h1 className="fs-1 my-4">
            <span>Oops! Something went wrong.</span> <br />
          </h1>
          <p className="my-2 fs-3 fw-semibold"> 404 Page Not Found</p>
          <p className="my-2 fs-4">We apologize for the inconvenience.</p>
         <Link to={"/"}> <button className="btn  btn-primary">Go To Homepage</button></Link>
        </div>
      </div>
    </>
  );
};

export default Error;
