// It is for the xray page of the second navbar
import React from "react";

const TestsCard = ({
  title,
  content,
  buttonText,
  imgSrc,
  altText,
  linkHref,
}) => {
  return (
    <div class="card bg-primary text-white m-3 rounded-4 p-4 shadow">
      <div class="container">
        <h1 class="text-center my-4 fw-bold">
          The Excellence of <span className="text-warning">{title}</span>
        </h1>
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-4 mb-4">
            <a href={linkHref}>
              <img src={imgSrc} alt={altText} class="img-fluid rounded w-100" />
            </a>
          </div>
          <div class=" col-12 col-md-8 ">
            <p class="fw-semibold ">{content}</p>
            <button class="btn btn-danger mx-4 mb-2">{buttonText}</button>
            <button className="btn btn-warning mx-4 ">Book Test </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestsCard;
