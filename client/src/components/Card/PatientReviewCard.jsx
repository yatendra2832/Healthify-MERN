// PatientReviewCard.jsx

import React from "react";

const PatientReviewCard = ({ name, rating, date, review, imageSrc }) => {
  return (
    <div className="card mb-4  mx-2 border-0 shadow-lg">
      <div className="row g-0">
        <div className="col-md-6 d-flex align-items-center justify-content-center ">
          <img
            src={imageSrc}
            alt={`Patient ${name}`}
            className="img-fluid rounded-4 w-50 h-75 "
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title">Name: {name}</h3>
            <h4 className="card-subtitle mb-2 ">
              Rating: <span className="text-warning">{rating}</span>
            </h4>
            <p className="card-text mb-1 text-body-secondary">{date}</p>
            <p className="card-text">{review}</p>
            <a href="#" className="btn btn-primary">
              Continue reading
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientReviewCard;
