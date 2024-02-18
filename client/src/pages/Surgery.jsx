import React from "react";
const Surgery = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6 "
      data-bs-ride="carousel" 
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner ">
        <div className="carousel-item active  h-50">
          <img
            src="/images/Surgery/Healthifysurgery1.png"
            alt="surgery"
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/Surgery/Healthifysurgery2.png"
            alt=""
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/Surgery/Healthifysurgery3.png"
            alt=""
            className="d-block w-100"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
  );
};

export default Surgery;
