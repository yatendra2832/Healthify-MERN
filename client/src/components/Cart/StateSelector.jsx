import React, { useState } from "react";

const StateSelector = ({ selectedState, onStateChange }) => {
  const handleChange = (event) => {
    onStateChange(event.target.value);
  };

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
    "Ladakh",
    "Jammu and Kashmir",
  ];

  return (
    <div className="container ">
      <div className="row ">
        <div className="col-12">
          <label htmlFor="state-select" className="form-label">
            Choose your state:
          </label>
          <select
            id="state-select"
            className="form-select"
            value={selectedState}
            onChange={handleChange}
            required
          >
            <option value="">--Please choose an option--</option>
            {indianStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">Please provide a valid state.</div>
        </div>
      </div>
    </div>
  );
};

export default StateSelector;
