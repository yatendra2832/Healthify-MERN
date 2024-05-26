import React from "react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const LabTestBookingDetails = ({ labtest, index }) => (
  <div key={index} className="card mb-4 border-0 shadow-sm">
    <div className="card-header bg-success text-white">
      <h5 className="mb-0">
        Lab Test Booking <span className="badge bg-secondary">{index + 1}</span>
      </h5>
    </div>
    <div className="card-body">
      <div className="accordion" id={`accordion-labtest-${index}`}>
        <div className="accordion-item border-0">
          <h2 className="accordion-header" id={`heading-labtest-${index}`}>
            <button
              className={`accordion-button ${
                labtest.isCollapsed ? "" : "collapsed"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-labtest-${index}`}
              aria-expanded={labtest.isCollapsed ? "false" : "true"}
              aria-controls={`collapse-labtest-${index}`}
            >
              <strong className="text-primary">Lab Test Information</strong>
            </button>
          </h2>
          <div
            id={`collapse-labtest-${index}`}
            className={`accordion-collapse collapse ${
              labtest.isCollapsed ?"show": "" 
            }`}
            aria-labelledby={`heading-labtest-${index}`}
            data-bs-parent={`#accordion-labtest-${index}`}
          >
            <div className="accordion-body">
              <div className="row mb-3">
                <div className="col-md-6 mb-2">
                  <strong>Your Payment Id:</strong>{" "}
                  <span className="text-muted">{labtest.paymentId}</span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Patient Name:</strong>{" "}
                  <span className="text-muted">{labtest.name}</span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Phone Number:</strong>{" "}
                  <span className="text-muted">{labtest.contact}</span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Email:</strong>{" "}
                  <span className="text-muted">{labtest.email}</span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Gender:</strong>{" "}
                  <span className="text-muted">{labtest.gender}</span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Date of Birth:</strong>{" "}
                  <span className="text-muted">
                    {formatDate(labtest.dateOfBirth)}
                  </span>
                </div>
                <div className="col-md-12 mb-2">
                  <strong>Address:</strong>{" "}
                  <span className="text-muted">
                    {`${labtest.houseNo}, ${labtest.locality}, ${labtest.cityState}, ${labtest.pincode}`}
                  </span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Test Name:</strong>{" "}
                  <span className="text-muted">{labtest.testName}</span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Preferred Date:</strong>{" "}
                  <span className="text-muted">
                    {formatDate(labtest.appointmentDate)}
                  </span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Preferred Time:</strong>{" "}
                  <span className="text-muted">{labtest.appointmentTime}</span>
                </div>
                <div className="col-md-12 mb-2">
                  <strong>Instructions:</strong>{" "}
                  <span className="text-muted">{labtest.instructions}</span>
                </div>
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-labtest-${index}`}
                >
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

export default LabTestBookingDetails;
