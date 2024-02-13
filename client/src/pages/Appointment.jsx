import React from "react";
import { useState } from "react";
const Appointment = () => {
  const [showCancellationPolicy, setShowCancellationPolicy] = useState(false);

  const handleReadMoreClick = () => {
    setShowCancellationPolicy(!showCancellationPolicy);
  };
  return (
    <>
      <h2 className="mt-4 text-primary fw-bold text-center">
        Medical Appointment Form
      </h2>
      <div className="container w-100">
        <form>
          {/* Personal Information */}
          <h3 className="text-primary my-4">Personal Information</h3>
          <div className="row ">
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="dob">Date of Birth*</label>
              <input type="date" className="form-control" id="dob" required />
            </div>
            <div className="form-group col-md-8 col-lg-6">
              <label htmlFor="gender">Gender*</label>
              <select className="form-control" id="gender" required>
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Contact Information */}
          <h3 className="text-primary my-4">Contact Information</h3>
          <div className="row">
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="contactNumber">Contact Number*</label>
              <input
                type="tel"
                className="form-control"
                id="contactNumber"
                placeholder="123-456-7890"
                required
              />
            </div>
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="address">Home Address*</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="123 Main St, City, Country"
                required
              />
            </div>
          </div>

          {/* Appointment Details */}
          <h3 className="text-primary my-4">Appointment Details</h3>
          <div className="row">
            {/* Reason for Appointment */}
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="reasonForAppointment">
                Reason for Appointment*
              </label>
              <select
                className="form-control"
                id="reasonForAppointment"
                required
              >
                <option value="" disabled selected>
                  Select Reason
                </option>
                <option value="routineCheckup">Routine Check-up</option>
                <option value="followUp">Follow-up</option>
                <option value="specificConcern">Specific Concern</option>
              </select>
            </div>

            {/* Preferred Date and Time */}
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="preferredDate">Preferred Date*</label>
              <input
                type="date"
                className="form-control"
                id="preferredDate"
                required
              />
            </div>

            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="preferredTime">Preferred Time*</label>
              <input
                type="time"
                className="form-control"
                id="preferredTime"
                required
              />
            </div>

            {/* Type of Appointment */}
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="appointmentType">Type of Appointment*</label>
              <select className="form-control" id="appointmentType" required>
                <option value="" disabled selected>
                  Select Appointment Type
                </option>
                <option value="inPerson">In-Person</option>
                <option value="telehealth">Telehealth</option>
              </select>
            </div>

            {/* Preferred Healthcare Provider */}
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="preferredProvider">
                Preferred Healthcare Provider
              </label>
              <input
                type="text"
                className="form-control"
                id="preferredProvider"
                placeholder="Enter preferred provider's name"
              />
            </div>
          </div>

          {/* Insurance Details */}
          <h3 className="text-primary my-4">Insurance Details</h3>
          <div className="row">
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="insuranceProvider">Insurance Provider</label>
              <input
                type="text"
                className="form-control"
                id="insuranceProvider"
                placeholder="XYZ Insurance"
              />
            </div>
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="policyNumber">Policy Number</label>
              <input
                type="text"
                className="form-control"
                id="policyNumber"
                placeholder="123456789"
              />
            </div>
          </div>

          {/* Medical History */}
          <h3 className="text-primary my-4">Medical History</h3>
          <div className="row">
            {/* Current Medications */}
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="medications">Current Medications</label>
              <input
                type="text"
                className="form-control"
                id="medications"
                placeholder="List any current medications"
              />
            </div>

            {/* Allergies */}
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="allergies">Allergies</label>
              <input
                type="text"
                className="form-control"
                id="allergies"
                placeholder="List any allergies"
              />
            </div>

            {/* Chronic Conditions */}
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="chronicConditions">Chronic Conditions</label>
              <input
                type="text"
                className="form-control"
                id="chronicConditions"
                placeholder="List any chronic conditions"
              />
            </div>

            {/* Past Surgeries or Hospitalizations */}
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="pastSurgeries">
                Past Surgeries or Hospitalizations
              </label>
              <input
                type="text"
                className="form-control"
                id="pastSurgeries"
                placeholder="List any past surgeries or hospitalizations"
              />
            </div>

            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="medicalHistory">Medical History</label>
              <textarea
                className="form-control"
                id="medicalHistory"
                rows="3"
                placeholder="Briefly describe your medical history"
              ></textarea>
            </div>
          </div>

          {/* Emergency Contact */}
          <h3 className="text-primary my-4">Emergency Contact</h3>
          <div className="row">
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="emergencyContactName">
                Emergency Contact Name
              </label>
              <input
                type="text"
                className="form-control"
                id="emergencyContactName"
                placeholder="Emergency Contact Name"
              />
            </div>
            <div className="form-group col-md-8 col-lg-6 mb-2">
              <label htmlFor="relationship">Relationship to Patient</label>
              <input
                type="text"
                className="form-control"
                id="relationship"
                placeholder="Relationship"
              />
            </div>
          </div>

          {/* Emergency Contact Phone Number */}
          <div className="form-group  col-md-8 col-lg-6 mb-2">
            <label htmlFor="emergencyContactPhone">
              Emergency Contact Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="emergencyContactPhone"
              placeholder="123-456-7890"
            />
          </div>

          {/* Cancellation Policy */}
          <div className="form-group my-4">
            <label htmlFor="cancellationPolicy" className=" fw-bold">
              Cancellation Policy{" "}
              <a href="#readmore" onClick={handleReadMoreClick}>
                {showCancellationPolicy ? "Hide" : "Read"}
              </a>
            </label>
            {showCancellationPolicy && (
              <>
                <p>
                  Please review our cancellation policy before submitting your
                  appointment request:
                </p>
                <ul>
                  <li>
                    Cancellations must be made at least 24 hours in advance.
                  </li>
                  <li>Same-day cancellations may incur a fee.</li>
                  <li>
                    Missed appointments without prior notice may result in
                    additional charges.
                  </li>
                </ul>
              </>
            )}

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I agree to the terms and conditions
              </label>
            </div>
          </div>

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
