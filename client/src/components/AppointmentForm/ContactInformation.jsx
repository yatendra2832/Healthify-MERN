import React from "react";
import InputField from "./InputField";

const ContactInformation = ({appointment,handleInput}) => {
  return (
    <>
      <h3 className="text-primary my-4">Contact Information</h3>
      <div className="row">
        <InputField
          label="Contact Number"
          name="contactNumber"
          type="tel"
          placeholder="123-456-7890"
          value={appointment.contactNumber}
          onChange={handleInput}
          required
        />
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="john.doe@example.com"
          value={appointment.email}
          onChange={handleInput}
          required
        />
        <InputField
          label="Home Address"
          name="address"
          type="text"
          placeholder="123 Main St, City, Country"
          value={appointment.address}
          onChange={handleInput}
          required
        />
      </div>
    </>
  );
};

export default ContactInformation;
