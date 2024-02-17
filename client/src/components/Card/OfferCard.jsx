import React from "react";

const OfferCard = ({ imgSrc, title, description }) => {
  return (
    <div className="col-md-6 my-4">
      <div className="card">
        <img src={imgSrc} alt="" />
        <div className="card-body">
          <h3 className="card-title text-primary fw-bold">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
