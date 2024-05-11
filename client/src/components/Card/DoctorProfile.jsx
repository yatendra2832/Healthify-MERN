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
  AOS.init({
    delay: 400,
    duration: 500,
  });

  return (
    <div className="container mt-2 mb-5">
      <div className="card border shadow-lg">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img
              src={imgSrc}
              alt={altText}
              className="w-75 h-75 rounded-4 shadow"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title text-primary">{doctorName}</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Specialty:</strong> {specialty}
                </li>
                <li className="list-group-item">
                  <strong>Education:</strong> {education}
                </li>
                <li className="list-group-item">
                  <strong>Years of Experience:</strong> {experience}
                </li>
                <li className="list-group-item">
                  <strong>Contact:</strong>{" "}
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
                <li className="list-group-item">
                  <strong>Phone:</strong> {phone}
                </li>
                <li className="list-group-item">
                  <strong>Office Location:</strong> {officeLocation}
                </li>
                <li className="list-group-item">
                  <strong>Office Hours:</strong> {officeHours}
                </li>
                <li className="list-group-item">
                  <strong>Accepts Insurance:</strong>{" "}
                  {acceptsInsurance ? "Yes" : "No"}
                </li>
                <li className="list-group-item">
                  <strong>Payment Options:</strong> {paymentOptions}
                </li>
                <li className="list-group-item">
                  <strong>Languages Spoken:</strong> {languagesSpoken}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
