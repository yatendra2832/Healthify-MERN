import React from "react";
const DiscountButton = ({ originalPrice, offerAmount }) => {
  // Calculate the discount percentage
  const discountPercentage =
    ((originalPrice - offerAmount) / originalPrice) * 100;

  return (
    <>
      <div className="container py-2 px-4 my-2">
        <div className="row border rounded shadow-sm">
          <div className="col border-right border-primary text-center py-2">
            <h6 className="text-primary mb-0">UPTO</h6>
            <p className="font-weight-bold mb-0">
              {Math.round(discountPercentage)}% OFF
            </p>
          </div>
          <div className="col text-center bg-warning p-0 m-0">
            <p className="m-0">Exclusive Offer</p>
            <h6 className="fs-6 mb-0">
              <span className="text-muted text-decoration-line-through">
                ₹{originalPrice}
              </span>{" "}
              <strong className="fs-5">₹{offerAmount}</strong>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountButton;
