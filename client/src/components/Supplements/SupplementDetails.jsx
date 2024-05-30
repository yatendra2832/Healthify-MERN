import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaShoppingCart, FaCartPlus } from "react-icons/fa";
import { CartContext } from "../../store/CartContext";
import DiscountButton from "../LabTest/DiscountButton";
import AyurvedaWellness from "./AyurvedWellness";

const SupplementDetails = () => {
  const [supplementData, setSupplementData] = useState("");
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

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

  const handleAddToCart = () => {
    addToCart({
      imgSrc: supplementData.imgSrc,
      title: supplementData.title,
      about: supplementData.about,
      originalPrice: supplementData.originalPrice,
      offerAmount: supplementData.offerAmount,
      _id: supplementData._id,
      description: supplementData.description,
    });
  };

  return (
    <>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-light py-2 px-4">
            <li className="breadcrumb-item">
              <Link to="/" className="text-dark">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/supplement" className="text-dark">
                Supplement
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-primary"
              aria-current="page"
            >
              {supplementData.title}
            </li>
          </ol>
        </nav>
      </div>

      <div className="container mt-2">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="row g-0">
            <div className="col-md-6 text-center">
              <img
                src={supplementData.imgSrc}
                alt="Supplement"
                className="img-fluid rounded h-50"
              />
              <div>
                <h3 className="fst-italic text-warning">
                  <span className="fs-2 text-primary text-center fw-bold mt-2">
                    Healthify
                  </span>
                  <hr />
                  {supplementData.description}
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
                  <button
                    className="btn btn-warning w-100"
                    onClick={handleAddToCart}
                  >
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
