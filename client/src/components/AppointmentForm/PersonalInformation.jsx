import React from "react";
import InputField from "./InputField";

const PersonalInformation = ({ appointment, handleInput }) => {
  return (
    <>
      <h3 className="text-primary my-4">Personal Information</h3>
      <div className="row">
        <InputField
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="John Doe"
          value={appointment.fullName}
          onChange={handleInput}
          required
        />
        <InputField
          label="Date of Birth"
          name="dob"
          type="date"
          value={appointment.dob}
          onChange={handleInput}
          required
        />
        <InputField
          label="Gender"
          name="gender"
          type="select"
          options={["", "male", "female", "other"]}
          value={appointment.gender}
          onChange={handleInput}
          required
        />
      </div>
    </>
  );
};

export default PersonalInformation;
