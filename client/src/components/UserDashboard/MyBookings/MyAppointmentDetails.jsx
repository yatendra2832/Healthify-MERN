import React from "react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const MyAppointmentDetails = ({ appointment, index }) => {
  return (
    <div key={index} className="card mb-4 border-0 shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">
          Appointment <span className="badge bg-secondary">{index + 1}</span>
        </h5>
      </div>
      <div className="card-body">
        <div className="accordion" id={`accordion-${index}`}>
          <div className="accordion-item border-0">
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded="false"
                aria-controls={`collapse-${index}`}
              >
                <strong className="text-primary">Personal Information</strong>
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading-${index}`}
              data-bs-parent={`#accordion-${index}`}
            >
              <div className="accordion-body">
                <h3 className="card-title text-primary border-bottom border-2 pb-2 mb-3">
                  Personal Information
                </h3>
                <div className="row mb-3">
                  <div className="col-md-6 mb-2">
                    <strong>Date of Birth:</strong>{" "}
                    <span className="text-muted">{formatDate(appointment.dob)}</span>
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Full Name:</strong>{" "}
                    <span className="text-muted">{appointment.fullName}</span>
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Gender:</strong>{" "}
                    <span className="text-muted">{appointment.gender}</span>
                  </div>
                </div>

                <h3 className="card-title mt-4 text-primary border-bottom border-2 pb-2 mb-3">
                  Contact Information
                </h3>
                <div className="row mb-3">
                  <div className="col-md-6 mb-2">
                    <strong>Contact Number:</strong>{" "}
                    <span className="text-muted">{appointment.contactNumber}</span>
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Email Address:</strong>{" "}
                    <span className="text-muted">{appointment.email}</span>
                  </div>
                  <div className="col-md-12 mb-2">
                    <strong>Home Address:</strong>{" "}
                    <span className="text-muted">{appointment.address}</span>
                  </div>
                </div>

                <h3 className="card-title mt-4 text-primary border-bottom border-2 pb-2 mb-3">
                  Appointment Details
                </h3>
                <div className="row mb-3">
                  <div className="col-md-6 mb-2">
                    <strong>Reason for Appointment:</strong>{" "}
                    <span className="text-muted">{appointment.reasonForAppointment}</span>
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Preferred Date:</strong>{" "}
                    <span className="text-muted">{formatDate(appointment.preferredDate)}</span>
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Preferred Time:</strong>{" "}
                    <span className="text-muted">{appointment.preferredTime}</span>
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Appointment Type:</strong>{" "}
                    <span className="text-muted">{appointment.appointmentType}</span>
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Preferred Healthcare Provider:</strong>{" "}
                    <span className="text-muted">{appointment.preferredProvider}</span>
                  </div>
                </div>

                <h3 className="card-title mt-4 text-primary border-bottom border-2 pb-2 mb-3">
                  Insurance Details
                </h3>
                <div className="row mb-3">
                  <div className="col-md-6 mb-2">
                    <strong>Insurance Provider:</strong>{" "}
                    <span className="text-muted">{appointment.insuranceProvider}</span>
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Policy Number:</strong>{" "}
                    <span className="text-muted">{appointment.policyNumber}</span>
                  </div>
                </div>

                <h3 className="card-title mt-4 text-primary border-bottom border-2 pb-2 mb-3">
                  Medical History
                </h3>
                <div className="row mb-3">
                  <div className="col-md-6 mb-2">
                    <strong>Current Medications:</strong>{" "}
                    <span className="text-muted">{appointment.currentMedications}</span>
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Allergies:</strong>{" "}
                    <span className="text-muted">{appointment.allergies}</span>
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Chronic Conditions:</strong>{" "}
                    <span className="text-muted">{appointment.chronicConditions}</span>
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Past Surgeries or Hospitalizations:</strong>{" "}
                    <span className="text-muted">{appointment.pastSurgeries}</span>
                  </div>
                  <div className="col-md-12 mb-2">
                    <strong>Medical History:</strong>{" "}
                    <span className="text-muted">{appointment.medicalHistory}</span>
                  </div>
                </div>

                <h3 className="card-title mt-4 text-primary border-bottom border-2 pb-2 mb-3">
                  Emergency Contact
                </h3>
                <div className="row mb-3">
                  <div className="col-md-6 mb-2">
                    <strong>Emergency Contact Name:</strong>{" "}
                    <span className="text-muted">{appointment.name}</span>
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Relationship to Patient:</strong>{" "}
                    <span className="text-muted">{appointment.relationship}</span>
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Emergency Contact Phone Number:</strong>{" "}
                    <span className="text-muted">{appointment.phone}</span>
                  </div>
                </div>

                <h3 className="card-title mt-4 text-primary border-bottom border-2 pb-2 mb-3">
                  Cancellation Policy
                </h3>
                <div className="row mb-3">
                  <div className="col-md-12 mb-2">
                    <strong>Read & Agreed to Cancellation Policy:</strong>{" "}
                    <span className="text-muted">{appointment.cancellationPolicy ? "Yes" : "No"}</span>
                  </div>
                </div>

                <div className="d-grid">
                  <button className="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`}>
                    Toggle Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppointmentDetails;
