import React from "react";
import DiscountButton from "./DiscountButton";
import { Link } from "react-router-dom";

const LabTestCard = ({
  testName,
  parameters,
  parametersNames,
  discountedPrice,
  originalPrice,
  _id,
}) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card labtestcard border-primary border-2 rounded-4 shadow-sm h-100 d-flex flex-column">
        <div className="card-body d-flex flex-column">
          <h6 className="text-center text-primary mb-3 mainheading">
            <strong>{testName}</strong>
          </h6>
          <div className="mb-2">
            <strong className="border rounded-pill px-3 py-1 bg-primary text-white d-inline-block">
              Parameter {parameters}
            </strong>
          </div>
          <div className="d-flex justify-content-between flex-grow-1 mb-3">
            <ul className="list-unstyled">
              {parametersNames.slice(0, 4).map((parameter, index) => (
                <li key={index} className="fs-6">
                  {parameter}
                </li>
              ))}
            </ul>
            <ul className="list-unstyled">
              {parametersNames.slice(4).map((parameter, index) => (
                <li key={index} className="fs-6">
                  {parameter}
                </li>
              ))}
            </ul>
          </div>
          <Link to={`/bloodtest/${_id}`} className="btn btn-outline-primary mt-auto ">
            + Know More
          </Link>
        </div>
        <div className="mt-auto bottombutton text-center p-2">
          <DiscountButton originalPrice={originalPrice} offerAmount={discountedPrice} />
          <Link to={`/bloodtest/booking/${_id}`}>
            <button className="btn btn-primary w-75 my-2 rounded-5">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LabTestCard;
