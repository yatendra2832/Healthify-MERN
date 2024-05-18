import React from "react";
import { Link } from "react-router-dom";

const CardImage = ({ imgSrc, altText, linkHref }) => (
  <a href={linkHref}>
    <img
      src={imgSrc}
      alt={altText}
      className="card-img img-fluid rounded-4 h-100 p-2"
    />
  </a>
);

const CardContent = ({ title, content, id }) => (
  <div className="card-body">
    <h1 className="card-title text-center mb-4 fw-bold">
      The Excellence of <span className="text-warning ">{title}</span>
    </h1>
    <p className="card-text  mb-4 fs-5 fst-italic">{content}</p>
    <div className="d-flex justify-content-center">
      <Link to={`/tests/${id}`}>
        <button className="btn btn-danger mx-4 ">Know More</button>
      </Link>
      <Link to={`/tests/booking/${id}`}>
        <button className="btn btn-warning  mx-4">Book Test</button>
      </Link>
    </div>
  </div>
);

const TestsCard = ({
  title,
  content,
  buttonText,
  imgSrc,
  altText,
  linkHref,
  id,
}) => (
  <div className="card bg-primary text-white m-3 rounded-4 shadow">
    <div className="row g-0">
      <div className="col-md-4">
        <CardImage imgSrc={imgSrc} altText={altText} linkHref={linkHref} />
      </div>
      <div className="col-md-8">
        <CardContent
          title={title}
          content={content}
          buttonText={buttonText}
          id={id}
        />
      </div>
    </div>
  </div>
);

export default TestsCard;
