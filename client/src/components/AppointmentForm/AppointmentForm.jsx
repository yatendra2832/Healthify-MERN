// AppointmentForm.js
import React from "react";
import PersonalInformation from "./PersonalInformation";
import ContactInformation from "./ContactInformation";
import AppointmentDetails from "./AppointmentDetails";
import InsuranceDetails from "./InsuranceDetails";
import MedicalHistory from "./MedicalHistory";
import EmergencyContact from "./EmergencyContact";
import CancellationPolicy from "./CancellationPolicy";

const AppointmentForm = ({
  appointment,
  handleInput,
  handleSubmit,
  selectedDoctor,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* Personal Information */}
      <PersonalInformation
        appointment={appointment}
        handleInput={handleInput}
      />
      {/* Contact Information */}
      <ContactInformation appointment={appointment} handleInput={handleInput} />
      {/* Appointment Details */}
      <AppointmentDetails
        appointment={appointment}
        handleInput={handleInput}
        selectedDoctor={selectedDoctor}
      />
      {/* Insurance Details */}
      <InsuranceDetails appointment={appointment} handleInput={handleInput} />
      {/* Medical History */}
      <MedicalHistory appointment={appointment} handleInput={handleInput} />
      {/* Emergency Contact */}
      <EmergencyContact appointment={appointment} handleInput={handleInput} />
      <CancellationPolicy appointment={appointment} handleInput={handleInput} />
      {/* Submit Button */}
      <button type="submit" className="btn btn-primary mb-4">
        Submit Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
