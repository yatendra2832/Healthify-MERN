// DoctorProfile.jsx

import React from "react";

const DoctorProfile = ({
  imgSrc,
  altText,
  doctorName,
  specialty,
  education,
  experience,
  email,
  phone,
  officeLocation,
  officeHours,
  acceptsInsurance,
  paymentOptions,
  languagesSpoken,
}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="card border shadow-lg">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img src={imgSrc} alt={altText} className="w-75 h-75 rounded-4 shadow" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title text-primary">{doctorName}</h2>
              <p className="card-text">
                <strong>Specialty:</strong> {specialty}
              </p>
              <p className="card-text">
                <strong>Education:</strong> {education}
              </p>
              <p className="card-text">
                <strong>Years of Experience:</strong> {experience}
              </p>
              <p className="card-text">
                <strong>Contact:</strong>{" "}
                <a href={`mailto:${email}`}>{email}</a>
              </p>
              <p className="card-text">
                <strong>Phone:</strong> {phone}
              </p>
              <p className="card-text">
                <strong>Office Location:</strong> {officeLocation}
              </p>
              <p className="card-text">
                <strong>Office Hours:</strong> {officeHours}
              </p>
              <p className="card-text">
                <strong>Accepts Insurance:</strong>{" "}
                {acceptsInsurance ? "Yes" : "No"}
              </p>
              <p className="card-text">
                <strong>Payment Options:</strong> {paymentOptions}
              </p>
              <p className="card-text">
                <strong>Languages Spoken:</strong> {languagesSpoken}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
