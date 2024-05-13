import React, { useState } from "react";
import PropTypes from "prop-types";

const CancellationPolicy = ({ appointment, handleInput }) => {
  const [showCancellationPolicy, setShowCancellationPolicy] =
    React.useState(false);
  const handleReadMoreClick = () => {
    setShowCancellationPolicy(!showCancellationPolicy);
  };
  return (
    <div className="form-group my-4">
      <label htmlFor="cancellationPolicy" className="fw-bold">
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
            <li>Cancellations must be made at least 24 hours in advance.</li>
            <li>Same-day cancellations may incur a fee.</li>
            <li>
              Missed appointments without prior notice may result in additional
              charges.
            </li>
          </ul>
        </>
      )}

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          name="cancellationPolicy"
          checked={appointment.cancellationPolicy}
          onChange={handleInput}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          I agree to the terms and conditions
        </label>
      </div>
    </div>
  );
};

CancellationPolicy.propTypes = {
  appointment: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default CancellationPolicy;
