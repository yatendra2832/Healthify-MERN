import React, { useEffect, useState } from "react";
import AyurvedaWellness from "./AyurvedWellness";
import { useParams, Link } from "react-router-dom";
import DiscountButton from "../LabTest/DiscountButton";
import { FaShoppingCart, FaCartPlus } from "react-icons/fa";

const SupplementDetails = () => {
  const [supplementData, setSupplementData] = useState("");
  const { id } = useParams();

  const getSupplementById = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/supplement/${id}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSupplementData(data);
      }
    } catch (error) {
      console.log(
        "Error in fetching the supplement details data by id:",
        error.message
      );
    }
  };

  useEffect(() => {
    getSupplementById();
  }, [id]);

  return (
    <>
      <div class="container ">
        <nav aria-label="breadcrumb ">
          <ol class="breadcrumb bg-light py-2 px-4">
            <li class="breadcrumb-item">
              <Link to="/" class="text-dark">
                Home
              </Link>
            </li>
            <li class="breadcrumb-item">
              <Link to="/supplement" class="text-dark">
                Supplement
              </Link>
            </li>
            <li class="breadcrumb-item active text-primary" aria-current="page">
              {supplementData.title}
            </li>
          </ol>
        </nav>
      </div>

      <div className="container mt-2">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="row g-0">
            <div className="col-md-6 text-center ">
              <img
                src={supplementData.imgSrc}
                alt="Supplement"
                className="img-fluid rounded h-50"
              />
              <div>
                <h3 className=" fst-italic text-warning">
                  {" "}
                  <span className="fs-2 text-primary text-center fw-bold mt-2">
                    Healthify
                  </span>{" "}
                  <hr /> Enhance Your Health with Our Natural Supplements <hr />
                  Premium Supplements for Optimal Health
                </h3>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center p-4">
              <div className="card-body">
                <h3 className="card-title">{supplementData.title}</h3>
                <p className="card-text">(60 Tablets)</p>
                <p className="text-muted">
                  <DiscountButton
                    originalPrice={supplementData.originalPrice}
                    offerAmount={supplementData.offerAmount}
                  />
                </p>
                <p className="card-text">{supplementData.about}</p>
                <div className="mt-3">
                  <button className="btn btn-primary w-100 mb-2">
                    <FaShoppingCart className="me-2" /> Buy Now
                  </button>
                  <button className="btn btn-warning w-100">
                    <FaCartPlus className="me-2" /> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AyurvedaWellness />
    </>
  );
};

export default SupplementDetails;
