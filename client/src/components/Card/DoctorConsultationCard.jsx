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
    <>
      <div className="col-lg-8 col-md-10 col-sm-12 my-4 mx-auto">
  <div className="card border-primary shadow-lg rounded-4">
    <div className="row g-0">
      <div className="col-lg-4 col-md-5 col-sm-12 d-flex align-items-center justify-content-center p-4">
        <img src={imgSrc} alt={altText} className="img-fluid rounded-4" style={{ maxWidth: "100%", height: "auto" }} />
      </div>
      <div className="col-lg-8 col-md-7 col-sm-12">
        <div className="card-body">
          <h3 className="card-title">{doctorName}</h3>
          <p className="card-text text-primary fw-bold mb-1">{qualifications}</p>
          <p className="card-text mb-1"><span className="fw-bold">Specialties:</span> {specialty}</p>
          <p className="card-text mb-1"><span className="fw-bold">Experience:</span> {experience}</p>
          <p className="card-text mb-1"><span className="fw-bold">Languages known:</span> {languagesSpoken}</p>
          <p className="card-text mb-1"><span className="fw-bold">Next available at:</span> {nextAvailability}</p>
          <p className="card-text mb-1"><span className="fw-bold">Consultation Fees:</span> ₹{consultationFees}</p>
          <div className="mt-3">
            <Link to={`/doctorconsultation/${id}`} className="btn btn-warning mx-2">View Profile</Link>
            <Link to={`/appointment/${id}`} className="btn btn-primary">Book an Appointment</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default DoctorConsultationCard;
