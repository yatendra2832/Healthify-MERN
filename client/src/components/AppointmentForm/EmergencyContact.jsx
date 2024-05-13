// EmergencyContact.js
import React from "react";
import InputField from "./InputField";

const EmergencyContact = ({ appointment, handleInput }) => {
  return (
    <>
      <h3 className="text-primary my-4">Emergency Contact</h3>
      <div className="row">
        <InputField
          label="Emergency Contact Name"
          name="name"
          type="text"
          placeholder="Emergency Contact Name"
          value={appointment.name}
          onChange={handleInput}
        />
        <InputField
          label="Relationship to Patient"
          name="relationship"
          type="text"
          placeholder="Relationship"
          value={appointment.relationship}
          onChange={handleInput}
        />
        <InputField
          label="Emergency Contact Phone Number"
          name="phone"
          type="tel"
          placeholder="123-456-7890"
          value={appointment.phone}
          onChange={handleInput}
        />
      </div>
    </>
  );
};

export default EmergencyContact;
