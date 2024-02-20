import React from "react";

const TestCarousel = ({ imageUrl, title, subtitle, price, description }) => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col ">
          <div className="card">
            <div className="card-body ">
              <img src={imageUrl} alt={title} className="w-100 rounded-4" />
              <h2 className="text-center fw-semibold ">{title}</h2>
              <p className="text-center text-primary fs-5">Starting @ ₹ {price}</p>
              <p className="text-center">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCarousel;
