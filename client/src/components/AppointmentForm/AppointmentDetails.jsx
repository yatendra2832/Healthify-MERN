// AppointmentDetails.js
import React from "react";
import InputField from "./InputField";

const AppointmentDetails = ({ appointment, handleInput, selectedDoctor }) => {
  return (
    <>
      <h3 className="text-primary my-2">Appointment Details</h3>
      <div className="row">
        <p className="text-danger fw-bold">
          {selectedDoctor && selectedDoctor.nextAvailability
            ? `Next Availability: ${selectedDoctor.nextAvailability}`
            : ""}
        </p>

        <InputField
          label="Reason for Appointment"
          name="reasonForAppointment"
          type="select"
          options={["", "Routine Check-up", "Follow-up", "Specific Concern"]}
          value={appointment.reasonForAppointment}
          onChange={handleInput}
          required
        />
        <InputField
          label="Preferred Date"
          name="preferredDate"
          type="date"
          value={appointment.preferredDate}
          onChange={handleInput}
          required
        />
        <InputField
          label="Preferred Time"
          name="preferredTime"
          type="time"
          value={appointment.preferredTime}
          onChange={handleInput}
          required
        />
        <InputField
          label="Type of Appointment"
          name="appointmentType"
          type="select"
          options={["", "In-Person", "Telehealth"]}
          value={appointment.appointmentType}
          onChange={handleInput}
          required
        />
        <InputField
          label="Preferred Healthcare Provider"
          name="preferredProvider"
          type="text"
          placeholder="Enter preferred provider's name"
          value={appointment.preferredProvider}
          onChange={handleInput}
        />
      </div>
    </>
  );
};

export default AppointmentDetails;
