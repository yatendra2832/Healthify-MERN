import React from "react";
import DiscountButton from "../LabTest/DiscountButton";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaCartPlus } from "react-icons/fa";
const SupplementCard = ({
  imgSrc,
  title,
  about,
  originalPrice,
  offerAmount,
  _id
}) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card border-0 shadow-sm h-100">
        <img src={imgSrc} className="card-img-top rounded-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <Link to={`/supplement/${_id}`}>
            <h3 className="card-title text-primary text-center mb-2 fst-italic fw-bold">
              {title}
            </h3>
          </Link>
          <p className="card-text text-muted text-center mb-2">{about}</p>
          <div className="row mb-2">
            <DiscountButton
              originalPrice={originalPrice}
              offerAmount={offerAmount}
            />
          </div>
          <div class="mt-auto row">
            <div class="col-md-6 ">
              <button class="btn btn-primary mt-1  btn-block w-100">
                <FaShoppingCart className="mr-1" /> Buy Now
              </button>
            </div>
            <div class="col-md-6 ">
              <button class="btn btn-warning mt-1  btn-block w-100">
                <FaCartPlus className="mr-1" /> Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplementCard;
