import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BillingForm from "../components/Cart/BillingForm";
import useCheckout from "../hooks/Checkout"; // Adjust the import path based on your project structure

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalPrice, totalItems } = location.state || {
    cartItems: [],
    totalPrice: 0,
    totalItems: 0,
  };
  const [paymentMethod, setPaymentMethod] = useState("");
  const { checkoutHandler, loading, error } = useCheckout();

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentMethod === "payNow") {
      // This part will be handled in the onPaymentSubmit function in BillingForm
    } else if (paymentMethod === "cashOnDelivery") {
      alert("Checkout with Cash on Delivery");
    } else {
      alert("Please select a payment method.");
    }
  };

  const onPaymentSubmit = async (amount) => {
    await checkoutHandler(
      amount,
      (paymentId) => {
        navigate("/orderpaymentsuccess", {
          state: { paymentId, cartItems, totalPrice },
        });
      },
      "Healthify Test Booking"
    );
  };

  return (
    <div className="container my-1">
      <main>
        <div className="py-1 text-center text-primary fw-bold fst-italic">
          <h2>Checkout form</h2>
        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {totalItems}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between lh-sm"
                >
                  <div>
                    <h6 className="my-0">{item.title}</h6>
                    <small className="text-body-secondary">
                      {item.description}
                    </small>
                  </div>
                  <span className="text-body-secondary">
                    ₹ {item.offerAmount}
                  </span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (INR)</span>
                <strong>₹ {totalPrice}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <BillingForm
              paymentMethod={paymentMethod}
              handlePaymentMethodChange={handlePaymentMethodChange}
              handleSubmit={handleSubmit}
              totalPrice={totalPrice}
              onPaymentSubmit={onPaymentSubmit}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
