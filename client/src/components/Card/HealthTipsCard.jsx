// CardComponent.jsx
import React from "react";
import "./HealthCard.css"
const HealthTipsCard = ({ imageUrl, heading, content }) => {
  return (
    <div className="col-lg-4 col-md-6  col-12 mb-4 ">
      <div className="card p-4 my-4 shadow rounded-4 healthCard">
        <div className="d-flex justify-content-center">
          <img
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src={imageUrl}
            alt="Placeholder"
          />
        </div>

        <h3 className="fw-semibold text-center my-2">{heading}</h3>
        <p>{content}</p>
        <div className="d-flex justify-content-center">
          <a className="btn btn-warning" href="#">
            Know More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HealthTipsCard;
