import React from "react";
import { MdPhoneCallback } from "react-icons/md";
const BottomNavbar = () => {
  return (
    <nav className="navbar fixed-bottom bg-primary">
      <div className="container d-flex justify-content-center">
        <h3 className="text-white my-1">
          Get a free call now <MdPhoneCallback />
        </h3>
      </div>
      <div className="container d-flex justify-content-center align-items-center ">
        <div className="input-group w-50  ">
          <input
            type="tel"
            className="form-control"
            placeholder="Enter your 10-digit mobile number"
          />
          <button type="button" className="btn btn-danger ">
            Get a Free Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
