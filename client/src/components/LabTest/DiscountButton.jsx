import React from "react";
const DiscountButton = ({ originalPrice, offerAmount }) => {
  // Calculate the discount percentage
  const discountPercentage =
    ((originalPrice - offerAmount) / originalPrice) * 100;

  return (
    <>
      <div className="container py-2 px-4 my-4">
        <div className="row border rounded shadow-sm">
          <div className="col-md-6 border-right border-primary text-center py-2">
            <h6 className="text-primary mb-1">UPTO</h6>
            <h5 className="font-weight-bold mb-0">
              {Math.round(discountPercentage)}% OFF
            </h5>
          </div>
          <div className="col-md-6 text-center bg-warning py-2">
            <h5 className="mb-1">Exclusive Offer</h5>
            <h6 className="fs-6 mb-0">
              <span className="text-muted text-decoration-line-through">
                ₹{originalPrice}
              </span>{" "}
              ₹{offerAmount}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountButton;
