import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DiscountButton from "./DiscountButton";
const LabTestDetails = () => {
  const params = useParams();
  const [cardData, setCardData] = useState("");
  const [parameters, setParameters] = useState([]);

  const getTestDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/labtestcards/${params.id}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setCardData(data);
        setParameters(data.parametersNames);
      }
    } catch (error) {
      console.error(
        "Error in fetching the details of the Lab Test cards",
        error
      );
    }
  };

  useEffect(() => {
    getTestDetails();
  }, []);

  return (
    <>
      <div className="container bg-light p-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/bloodtest">BloodTest</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {cardData.testName}
            </li>
          </ol>
        </nav>
      </div>

      <div className="container my-3 p-2 bg-primary shadow-sm rounded">
        <div className="row border border-primary p-3 m-1 rounded bg-white">
          <div className="col-md-8 col-sm-12">
            <h1>
              <strong className="text-primary fst-italic">
                {cardData.testName}
              </strong>{" "}
              in <span className="text-warning">Gurgaon</span>
            </h1>
            <p className="fs-4 fst-italic text-primary mt-2">
              Parameter Included:{" "}
              <span className="fw-bold text-warning">
                {cardData.parameters}
              </span>
            </p>
          </div>

          <div className="col-md-4 col-sm-12 text-md-end text-center mt-3 mt-md-0">
            <div className="mt-auto bottombutton">
              <DiscountButton
                originalPrice={cardData.originalPrice}
                offerAmount={cardData.discountedPrice}
              />
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary w-100 rounded-3">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 mt-3">
          <p className="text-white fs-5 fst-italic">{cardData.aboutTest}</p>
        </div>

        <div className="container bg-light py-2 rounded-2 mt-3">
          <ul className="row list-unstyled">
            <li className="col-md-3 col-sm-6 col-xsm-12">
              <div className="d-flex align-items-center fs-5 justify-content-evenly">
                <span className="border rounded-3 border-2 p-2 ">
                  <img src="/images/labtest/icon1.png" alt="parameterimg" />
                </span>
                <div className="ml-2">
                  <p>
                    Parameters Included:
                    <br />
                    <strong>{cardData.parameters}</strong>
                  </p>
                </div>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xsm-12">
              <div className="d-flex align-items-center fs-5 justify-content-evenly">
                <span className="border rounded-3 border-2 p-2 ">
                  <img src="/images/labtest/icon2.png" alt="sampleimg" />
                </span>
                <div className="ml-2">
                  <p>
                    <strong>FREE </strong> <br />
                    Sample Collection
                    <br />
                  </p>
                </div>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xsm-12">
              <div className="d-flex align-items-center fs-5 justify-content-evenly">
                <span className="border rounded-3 border-2 p-2 ">
                  <img src="/images/labtest/icon3.png" alt="reportpng" />
                </span>
                <div className="ml-2">
                  <p>
                    <strong>FREE </strong> <br />
                    Report Counselling
                    <br />
                  </p>
                </div>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xsm-12">
              <div className="d-flex align-items-center fs-5 justify-content-evenly">
                <span className="border rounded-3 border-2 p-2 ">
                  <img src="/images/labtest/icon4.png" alt="testbooked.png" />
                </span>
                <div className="ml-2">
                  <p>
                    Test Booked so far
                    <br />
                    <strong> 9516+ </strong>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <h1 className="text-warning fst-italic mt-4">
          Test Details (parameters Included {cardData.parameters})
        </h1>
        <h3 className=" fst-italic fw-bold mt-2">Parameter Names</h3>
        <div className="container my-4">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <ul className="list-unstyled">
                {parameters.map((parameter, index) => (
                  <li
                    key={index}
                    className="fs-6 bg-light rounded px-4 py-3 mb-3 shadow-sm"
                  >
                    <strong>{parameter}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-8 col-md-12 d-flex justify-content-center align-items-center">
              <img
                src="/images/labtest/homesample.jpg"
                alt="Sample Collection"
                className="img-fluid rounded-3 shadow-lg h-75"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className="text-warning fst-italic mt-4">
            <strong>Bundle of Benefits</strong> on every Health test booking
          </h1>
          <div className="row d-flex justify-content-between bg-light m-4 p-4 rounded">
            <div className="col-md-4 col-sm-12 mb-4">
              <img
                src="/images/labtest/icon5.png"
                alt=""
                className="img-fluid"
              />
              <h4 className="mt-3">Get 100% Cashback Coupons</h4>
              <p>
                Earn 100% cashback of equivalent order amount on all health
                tests.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 mb-4">
              <img
                src="/images/labtest/icon6.png"
                alt=""
                className="img-fluid"
              />
              <h4 className="mt-3">Get Free Dental Check-Up Consultation</h4>
              <p>
                Avail Dental check-up consultation worth INR 1000 on all health
                tests for free.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 mb-4">
              <img
                src="/images/labtest/icon7.png"
                alt=""
                className="img-fluid"
              />
              <h4 className="mt-3">Health Plan at Negligible Prices</h4>
              <p>
                Avail benefits like Doctor Consultations, Emotional Wellbeing
                Survey & more. T&C Apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabTestDetails;
