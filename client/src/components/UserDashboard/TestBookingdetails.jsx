import React from "react";

const TestBookingDetails = ({ test, index }) => (
  <div key={index} className="card mb-3 border rounded-4 shadow-lg">
    <div className="card-body">
      <div className="accordion" id={`accordion-test-${index}`}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${test.isCollapsed ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#panelsStayOpen-collapse-test-${index}`}
              aria-expanded="true"
              aria-controls={`panelsStayOpen-collapse-test-${index}`}
            >
              <h3 className="card-title text-primary">
                <button type="button" className="btn btn-primary">
                  Test Booking{" "}
                  <span className="badge text-bg-secondary">
                    {index + 1}
                  </span>
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
              <h3 className="card-title text-primary border-bottom border-2">Test Information</h3>
              <p><strong>Patient Name:</strong> {test.patientName}</p>
              <p><strong>Phone Number:</strong> {test.phoneNumber}</p>
              <p><strong>Location:</strong> {test.location}</p>
              <p><strong>Test Type:</strong> {test.testType}</p>
              <p><strong>Preferred Date:</strong> {test.preferredDate}</p>
              <p><strong>Preferred Time:</strong> {test.preferredTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TestBookingDetails;
