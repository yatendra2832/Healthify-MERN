import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaCartPlus } from "react-icons/fa";
import DiscountButton from "../LabTest/DiscountButton";
import { toast } from "react-toastify";
const SupplementCard = ({
  imgSrc,
  title,
  about,
  originalPrice,
  offerAmount,
  _id,
  description,
  userId
}) => {
  const handleAddToCart = async () => {
    if (!userId) {
      console.error("User ID is not defined");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/cart/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: _id,
          quantity: 1, // Assuming you're adding only one item at a time
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message)
      } else {
        toast.error(error.message)
        console.error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

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
          <div className="mt-auto row">
            <div className="col-md-6 ">
              <button className="btn btn-primary mt-1  btn-block w-100">
                <FaShoppingCart className="mr-1" /> Buy Now
              </button>
            </div>
            <div className="col-md-6 ">
              <button
                className="btn btn-warning mt-1  btn-block w-100"
                onClick={handleAddToCart}
              >
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
