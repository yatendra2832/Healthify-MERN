import React from "react";
import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import CancellationPolicy from "../components/AppointmentForm/CancellationPolicy";

import InputField from "../components/AppointmentForm/InputField";

const Appointment = () => {
  const [showCancellationPolicy, setShowCancellationPolicy] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const { user } = useAuth();

  const params = useParams();

  // Fetch doctor's data by IDconst
  const fetchDoctor = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/doctor/doctorsdata/${params.id}`
      );
      if (response.ok) {
        const data = await response.json();
        setSelectedDoctor(data);
        setAppointment((prevState) => ({
          ...prevState,
          preferredProvider: data.doctorName,
        }));
      }
    } catch (error) {
      console.log("Error fetching doctor's data:", error);
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id) {
      fetchDoctor();
    } else {
      setSelectedDoctor(null);
    }
  }, [params.id]);

  // Handling the appointment form submission
  const [appointment, setAppointment] = useState({
    userId: "",
    fullName: "",
    dob: "",
    gender: "", // You can set a default value

    // contactInformation
    contactNumber: "",
    email: "",
    address: "",

    // appointmentDetails
    reasonForAppointment: "",
    preferredDate: "",
    preferredTime: "",
    appointmentType: "", // You can set a default value
    preferredProvider: "",

    // insuranceDetails
    insuranceProvider: "",
    policyNumber: "",

    medicalHistory: "",
    currentMedications: "",
    allergies: "",
    chronicConditions: "",
    pastSurgeries: "",

    // emergencyContact
    name: "",
    relationship: "",
    phone: "",

    cancellationPolicy: "",
  });
  // const handleInput = (event) => {
  //   const { name, value, type, checked } = event.target;
  //   const newValue = type === "checkbox" ? checked : value;
  //   setAppointment((prevState) => ({
  //     ...prevState,
  //     [name]: newValue,
  //   }));
  // };
  const handleInput = useCallback((event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setAppointment((prevState) => ({ ...prevState, [name]: newValue }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = user._id;
    try {
      const response = await fetch(
        "http://localhost:5000/api/form/appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...appointment,
            userId: userId, // Include the user ID in the request body
          }),
        }
      );

      if (response.ok) {
        toast.success("Appointment Form Submitted successfully");
        setAppointment({
          fullName: "",
          dob: "",
          gender: "", // You can set a default value

          // contactInformation
          contactNumber: "",
          email: "",
          address: "",

          // appointmentDetails
          reasonForAppointment: "",
          preferredDate: "",
          preferredTime: "",
          appointmentType: "", // You can set a default value
          preferredProvider: "",

          // insuranceDetails
          insuranceProvider: "",
          policyNumber: "",

          medicalHistory: "",
          currentMedications: "",
          allergies: "",
          chronicConditions: "",
          pastSurgeries: "",

          // emergencyContact
          name: "",
          relationship: "",
          phone: "",

          cancellationPolicy: false,
        });
      }
      console.log(response);
    } catch (error) {
      toast.error("Error from the appointment form", error);
    }
  };

  const handleReadMoreClick = () => {
    setShowCancellationPolicy(!showCancellationPolicy);
  };
  return (
    <>
      <h2 className="mt-4 text-primary fw-bold text-center">
        Medical Appointment Form
      </h2>
      {/* <h2>{selectedDoctor.consultationFees}</h2> */}
      <div className="container w-100">
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
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

          {/* Contact Information */}
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

          {/* Appointment Details */}
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
              options={[
                "",
                "Routine Check-up",
                "Follow-up",
                "Specific Concern",
              ]}
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

          {/* Insurance Details */}
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

          {/* Medical History */}
          <h3 className="text-primary my-4">Medical History</h3>
          <div className="row">
            <InputField
              label="Current Medications"
              name="currentMedications"
              type="text"
              placeholder="List any current medications"
              value={appointment.currentMedications}
              onChange={handleInput}
            />
            <InputField
              label="Allergies"
              name="allergies"
              type="text"
              placeholder="List any allergies"
              value={appointment.allergies}
              onChange={handleInput}
            />
            <InputField
              label="Chronic Conditions"
              name="chronicConditions"
              type="text"
              placeholder="List any chronic conditions"
              value={appointment.chronicConditions}
              onChange={handleInput}
            />
            <InputField
              label="Past Surgeries or Hospitalizations"
              name="pastSurgeries"
              type="text"
              placeholder="List any past surgeries or hospitalizations"
              value={appointment.pastSurgeries}
              onChange={handleInput}
            />
            <InputField
              label="Brief Medical History"
              name="medicalHistory"
              type="textarea"
              rows={3}
              placeholder="Briefly describe your medical history"
              value={appointment.medicalHistory}
              onChange={handleInput}
            />
          </div>

          {/* Emergency Contact */}
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

          {/* Cancellation Policy */}
          <CancellationPolicy
            showCancellationPolicy={showCancellationPolicy}
            handleReadMoreClick={handleReadMoreClick}
            appointment={appointment}
            handleInputChange={handleInput}
          />

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary mb-4">
            Submit Appointment
          </button>
        </form>
      </div>
    </>
  );
};

export default Appointment;
