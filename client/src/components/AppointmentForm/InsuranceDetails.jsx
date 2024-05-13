import React from "react";
import InputField from "./InputField";

const InsuranceDetails = ({ appointment, handleInput }) => {
  return (
    <>
      <h3 className="text-primary my-4">Insurance Details</h3>
      <div className="row">
        <InputField
          label="Insurance Provider"
          name="insuranceProvider"
          type="text"
          placeholder="XYZ Insurance"
          value={appointment.insuranceProvider}
          onChange={handleInput}
        />
        <InputField
          label="Policy Number"
          name="policyNumber"
          type="text"
          placeholder="123456789"
          value={appointment.policyNumber}
          onChange={handleInput}
        />
      </div>
    </>
  );
};

export default InsuranceDetails;
