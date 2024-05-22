import React from "react";
import DiscountButton from "./DiscountButton";
import { Link } from "react-router-dom";

import "./labtest.css";

const LabTestCard = ({
  testName,
  parameters,
  parametersNames,
  discountedPrice,
  originalPrice,
  aboutTest,
}) => {
  return (
    <>
      <div className="col">
        <div className="card labtestcard shadow-sm fixed-height-card border-primary border-2 rounded-4 shadow-">
          <div className="card-body d-flex flex-column">
            <h6 className=" fst-italic  text-center text-primary mb-3 mainheading ">
              <strong>{testName}</strong>
            </h6>
            <div className="row mb-2 paramterheight">
              <div className="col">
                <strong className="border rounded-pill px-5 py-1 bg-primary text-white d-inline-block">
                  Parameter {parameters}
                </strong>
              </div>
            </div>
            <div className="d-flex justify-content-between  mt-2 listheight  ">
              <ul className="list-unstyled">
                {parametersNames.slice(0, 4).map((parameter, index) => (
                  <li key={index} className="fs-6 ">
                    {parameter}
                  </li>
                ))}
              </ul>
              <ul className="list-unstyled">
                {parametersNames.slice(4).map((parameter, index) => (
                  <li key={index} className="fs-6 ">
                    {parameter}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="#" className="mt-4">
              +Know More
            </Link>

            <div className="mt-auto bottombutton">
              <DiscountButton
                originalPrice={originalPrice}
                offerAmount={discountedPrice}
              />
              <button className="btn btn-primary w-100 rounded-5">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabTestCard;
