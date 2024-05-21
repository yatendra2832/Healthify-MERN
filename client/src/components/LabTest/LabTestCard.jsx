import React from "react";
import DiscountButton from "./DiscountButton";
import {Link} from "react-router-dom";

const LabTestCard = () => {
  const parametersNames = [
    "Cholesterol-Total, Serum",
    "HDL Cholesterol Direct",
    "LDL Cholesterol -Direct",
    "Triglycerides, Serum",
    "Non - HDL Cholesterol, Serum",
    "VLDL",
    "LDL/HDL RATIO",
    "CHOL/HDL RATIO",
  ];
  return (
    <div className="container ">
      <div className="row g-5 py-5  row-cols-1 row-cols-lg-3">
        <div className="feature col border rounded-4 ">
          <h3 className="fs-2 text-center text-primary mb-4">Lipid Profile</h3>
          <strong>
            <span className="border rounded-pill px-5 py-1  bg-primary text-white">
              Parameter 9
            </span>
          </strong>
          <div className="d-flex justify-content-between mt-2">
            <ul>
              {parametersNames.slice(0, 4).map((parameter, index) => (
                <li key={index} className="fs-6">
                  {parameter}
                </li>
              ))}
            </ul>
            <ul>
              {parametersNames.slice(4).map((parameter, index) => (
                <li key={index} className="fs-6">
                  {parameter}
                </li>
              ))}
            </ul>
          </div>
          <Link to="#">+Know More</Link>
          <DiscountButton originalPrice={899} offerAmount={419} />

          <div className="container py-1 px-4 mb-3">
            <button className="btn btn-primary w-100 rounded-5">
              Book Now
            </button>
          </div>
        </div>

        <div className="feature col border rounded-4 ">
          <h3 className="fs-2 text-center text-primary mb-4">Lipid Profile</h3>
          <strong>
            <span className="border rounded-pill px-5 py-1  bg-primary text-white">
              Parameter 9
            </span>
          </strong>
          <div className="d-flex justify-content-between mt-2">
            <ul>
              {parametersNames.slice(0, 4).map((parameter, index) => (
                <li key={index} className="fs-6">
                  {parameter}
                </li>
              ))}
            </ul>
            <ul>
              {parametersNames.slice(4).map((parameter, index) => (
                <li key={index} className="fs-6">
                  {parameter}
                </li>
              ))}
            </ul>
          </div>

          <DiscountButton originalPrice={899} offerAmount={419} />

          <div className="container py-1 px-4 mb-3">
            <button className="btn btn-primary w-100 rounded-5">
              Book Now
            </button>
          </div>
        </div>
        <div className="feature col border rounded-4 ">
          <h3 className="fs-2 text-center text-primary mb-4">Lipid Profile</h3>
          <strong>
            <span className="border rounded-pill px-5 py-1  bg-primary text-white">
              Parameter 9
            </span>
          </strong>
          <div className="d-flex justify-content-between mt-2">
            <ul>
              {parametersNames.slice(0, 4).map((parameter, index) => (
                <li key={index} className="fs-6">
                  {parameter}
                </li>
              ))}
            </ul>
            <ul>
              {parametersNames.slice(4).map((parameter, index) => (
                <li key={index} className="fs-6">
                  {parameter}
                </li>
              ))}
            </ul>
          </div>

          <DiscountButton originalPrice={899} offerAmount={419} />

          <div className="container py-1 px-4 mb-3">
            <button className="btn btn-primary w-100 rounded-5">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTestCard;
