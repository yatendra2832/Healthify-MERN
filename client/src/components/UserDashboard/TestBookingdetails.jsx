import React from "react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
const TestBookingDetails = ({ test, index }) => (
  <div key={index} className="card mb-3 border rounded-4 shadow-lg">
    <div className="card-body">
      <div className="accordion" id={`accordion-test-${index}`}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                test.isCollapsed ? "" : "collapsed"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#panelsStayOpen-collapse-test-${index}`}
              aria-expanded="true"
              aria-controls={`panelsStayOpen-collapse-test-${index}`}
            >
              <h3 className="card-title text-primary">
                <button type="button" className="btn btn-danger">
                  Test Booking{" "}
                  <span className="badge text-bg-secondary">{index + 1}</span>
                </button>
              </h3>
            </button>
          </h2>
          <div
            id={`panelsStayOpen-collapse-test-${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`accordion-test-${index}`}
            data-bs-parent={`#accordion-test-${index}`}
          >
            <div className="accordion-body">
              <h3 className="card-title text-primary border-bottom border-2 pb-2 mb-3">
                Test Information
              </h3>
              <div className="row">
              <div className="col-md-12 mb-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TestBookingDetails;
