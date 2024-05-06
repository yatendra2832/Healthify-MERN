import React from "react";
import { Link } from "react-router-dom";
const DoctorConsultationCard = ({
  imgSrc,
  altText,
  experience,
  doctorName,
  qualifications,
  specialty,
  languagesSpoken,
  nextAvailability,
  consultationFees,
  id,
}) => {
  return (
    <div className="col-md-8 my-4 mx-4 border-primary shadow-lg mx-auto rounded-4">
      <div className="row g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative rounded-4">
        <div className="col-md-4 d-flex align-items-center  m-4 shadow-sm rounded-2 bg-white ">
          <img src={imgSrc} alt={altText} className="img-fluid rounded " />
        </div>
        <div className="col-md-7">
          <div className="p-4 d-flex flex-column h-100">
            <h3 className="mb-3">{doctorName}</h3>
            <p className="fw-bold text-primary mb-2">{qualifications}</p>
            <p className="mb-2">
              <span className="fw-bold ">Specialities:</span> {specialty}
            </p>
            <p className="mb-2">
              <span className="fw-bold ">Experience:</span> {experience}
            </p>
            <p className="mb-2">
              <span className="fw-bold">Languages known:</span>{" "}
              {languagesSpoken}
            </p>
            <p className="mb-2">
              <span className="fw-bold">Next available at:</span>{" "}
              {nextAvailability}
            </p>
            <p className="mb-2">
              <span className="fw-bold">Consultation Fees:</span> ₹
              {consultationFees}
            </p>
            <div className="mt-3">
              <Link to={`/doctorconsultation/${id}`}>
                <button className="btn btn-warning mx-2">View Profile</button>
              </Link>
              {/* Pass doctor data as state to the Appointment component */}
              <Link to={`/appointment/${id}`}>
                <button className="btn btn-primary">Book an Appointment</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorConsultationCard;
