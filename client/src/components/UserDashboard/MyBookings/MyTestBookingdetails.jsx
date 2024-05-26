import React from "react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const MyTestBookingDetails = ({ test, index }) => (
  <div key={index} className="card mb-4 border-0 shadow-sm">
    <div className="card-header bg-danger text-white">
      <h5 className="mb-0">
        Test Booking <span className="badge bg-secondary">{index + 1}</span>
      </h5>
    </div>
    <div className="card-body">
      <div className="accordion" id={`accordion-test-${index}`}>
        <div className="accordion-item border-0">
          <h2 className="accordion-header" id={`heading-test-${index}`}>
            <button
              className={`accordion-button ${
                test.isCollapsed ? "" : "collapsed"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-test-${index}`}
              aria-expanded={test.isCollapsed ? "false" : "true"}
              aria-controls={`collapse-test-${index}`}
            >
              <strong className="text-primary">Test Information</strong>
            </button>
          </h2>
          <div
            id={`collapse-test-${index}`}
            className={`accordion-collapse collapse ${
              test.isCollapsed ? "show" : ""
            }`}
            aria-labelledby={`heading-test-${index}`}
            data-bs-parent={`#accordion-test-${index}`}
          >
            <div className="accordion-body">
              <h3 className="card-title text-primary border-bottom border-2 pb-2 mb-3">
                Personal Information
              </h3>
              <div className="row mb-3">
                <div className="col-md-6 mb-2">
                  <strong>Your Payment Id:</strong>{" "}
                  <span className="text-muted">{test.paymentId}</span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Patient Name:</strong>{" "}
                  <span className="text-muted">{test.patientName}</span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Phone Number:</strong>{" "}
                  <span className="text-muted">{test.phoneNumber}</span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Location:</strong>{" "}
                  <span className="text-muted">{test.location}</span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Test Type:</strong>{" "}
                  <span className="text-muted">{test.testType}</span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Preferred Date:</strong>{" "}
                  <span className="text-muted">{formatDate(test.date)}</span>
                </div>
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-test-${index}`}
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

export default MyTestBookingDetails;
