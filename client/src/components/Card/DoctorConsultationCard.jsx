import React from "react";

const DoctorConsultationCard = ({
  imgSrc,
  altText,
  experience,
  name,
  qualifications,
  specialities,
  languages,
  nextAvailability,
  consultationFees,
}) => {
  return (
    <div className="col-md-8 my-4 mx-4 border-primary shadow-lg mx-auto rounded-4">
      <div className="row g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative rounded-4">
        <div className="col-md-4 d-flex align-items-center p-4 m-4 shadow-sm rounded-2 bg-white ">
          <img src={imgSrc} alt={altText} className="img-fluid rounded " />
        </div>
        <div className="col-md-7">
          <div className="p-4 d-flex flex-column h-100">
            <h3 className="mb-3">{name}</h3>
            <p className="fw-bold text-primary mb-2">{qualifications}</p>
            <p className="mb-2">
              <span className="fw-bold ">Specialities:</span> {specialities}
            </p>
            <p className="mb-2">
              <span className="fw-bold">Languages known:</span> {languages}
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
              <button className="btn btn-warning me-2" type="button">
                View Profile
              </button>
              <button className="btn btn-primary" type="button">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorConsultationCard;
