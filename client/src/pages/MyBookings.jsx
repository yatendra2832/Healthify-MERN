import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
const MyBookings = () => {
  const { AuthorizationToken } = useAuth();
  const [myappointment, setMyappointments] = useState([]);
  const getAppointmentData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/form/appointment",
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setMyappointments(data);
        // console.log(data);
      }
    } catch (error) {
      console.log("Error at MyBookings : ", error.message);
    }
  };

  useEffect(() => {
    getAppointmentData();
  }, []);

  return (
    <>
      <div className="container mt-4 ">
        {myappointment.length > 0 ? (
          <h2 className="text-primary fw-bold text-center mb-4">
            Your Upcoming Appointments and Tests
          </h2>
        ) : (
          <div className="text-center">
            <h2 className="text-primary fw-bold mb-2">No Bookings Yet</h2>
            <p className="lead mb-4">
              You haven't scheduled any appointments or tests with us.
            </p>
            <p className="mb-4">
              Ready to take the next step in your healthcare journey?
            </p>
            <Link to={"/doctorconsultation"}>
              {" "}
              <a href="#" className="btn btn-primary ">
                Schedule Now
              </a>
            </Link>
          </div>
        )}

        {myappointment.map((appointment, index) => (
          <div key={index} className="card mb-3 border rounded-4 shadow-lg ">
            <div className="card-body ">
              <div className="accordion" id={`accordion-${index}`}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        appointment.isCollapsed ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#panelsStayOpen-collapse-${index}`}
                      aria-expanded="true"
                      aria-controls={`panelsStayOpen-collapse-${index}`}
                    >
                      <h3 className="card-title text-primary">
                        <button type="button" class="btn btn-primary">
                          Appointment{" "}
                          <span class="badge text-bg-secondary">
                            {index + 1}
                          </span>
                        </button>
                      </h3>
                    </button>
                  </h2>
                  <div
                    id={`panelsStayOpen-collapse-${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`accordion-${index}`}
                    data-bs-parent={`#accordion-${index}`}
                  >
                    <div className="accordion-body">
                      <h3 className="card-title text-primary  border-bottom border-2">
                        Personal Information
                      </h3>
                      <p>
                        <strong>Date of Birth:</strong> {appointment.dob}
                      </p>
                      <p>
                        <strong>Full Name:</strong>
                        {appointment.fullName}
                      </p>
                      <p>
                        <strong>Gender:</strong> {appointment.gender}
                      </p>
                      <h3 className="card-title mt-4 text-primary border-bottom border-2">
                        Contact Information
                      </h3>
                      <p>
                        <strong>Contact Number:</strong>{" "}
                        {appointment.contactNumber}
                      </p>
                      <p>
                        <strong>Email Address:</strong> {appointment.email}
                      </p>
                      <p>
                        <strong>Home Address:</strong> {appointment.address}
                      </p>
                      <h3 className="card-title mt-4 text-primary border-bottom border-2">
                        Appointment Details
                      </h3>
                      <p>
                        <strong>Reason for Appointment:</strong>{" "}
                        {appointment.reasonForAppointment}
                      </p>
                      <p>
                        <strong>Preferred Date:</strong>{" "}
                        {appointment.preferredDate}
                      </p>
                      <p>
                        <strong>Preferred Time:</strong>{" "}
                        {appointment.preferredTime}
                      </p>
                      <p>
                        <strong>Appointment Type:</strong>{" "}
                        {appointment.appointmentType}
                      </p>
                      <p>
                        <strong>Preferred Healthcare Provider:</strong>{" "}
                        {appointment.preferredProvider}
                      </p>
                      <h3 className="card-title mt-4 text-primary border-bottom border-2">
                        Insurance Details
                      </h3>
                      <p>
                        <strong>Insurance Provider:</strong>{" "}
                        {appointment.insuranceProvider}
                      </p>
                      <p>
                        <strong>Policy Number:</strong>{" "}
                        {appointment.policyNumber}
                      </p>
                      <h3 className="card-title mt-4 text-primary border-bottom border-2">
                        Medical History
                      </h3>
                      <p>
                        <strong>Current Medications:</strong>{" "}
                        {appointment.currentMedications}
                      </p>
                      <p>
                        <strong>Allergies:</strong> {appointment.allergies}
                      </p>
                      <p>
                        <strong>Chronic Conditions:</strong>{" "}
                        {appointment.chronicConditions}
                      </p>
                      <p>
                        <strong>Past Surgeries or Hospitalizations:</strong>{" "}
                        {appointment.pastSurgeries}
                      </p>
                      <p>
                        <strong>Medical History:</strong>{" "}
                        {appointment.medicalHistory}
                      </p>
                      <h3 className="card-title mt-4 text-primary border-bottom border-2">
                        Emergency Contact
                      </h3>
                      <p>
                        <strong>Emergency Contact Name:</strong>{" "}
                        {appointment.name}
                      </p>
                      <p>
                        <strong>Relationship to Patient:</strong>{" "}
                        {appointment.relationship}
                      </p>
                      <p>
                        <strong>Emergency Contact Phone Number:</strong>{" "}
                        {appointment.phone}
                      </p>
                      <h3 className="card-title mt-4 text-primary border-bottom border-2">
                        Cancellation Policy
                      </h3>
                      <p>
                        <strong>Read & Agreed to Cancellation Policy:</strong>{" "}
                        {appointment.cancellationPolicy ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TODO */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyBookings;
