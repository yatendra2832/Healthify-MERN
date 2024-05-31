import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BillingForm from "../components/Cart/BillingForm";

const Checkout = () => {
  const location = useLocation();
  const { cartItems, totalPrice, totalItems } = location.state || { cartItems: [], totalPrice: 0, totalItems: 0 };
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentMethod === "payNow") {
      // Handle Pay Now submission logic
      alert(`Paying now: ₹${totalPrice.toFixed(2)}`);
    } else if (paymentMethod === "cashOnDelivery") {
      // Handle Cash on Delivery submission logic
      alert("Checkout with Cash on Delivery");
    } else {
      alert("Please select a payment method.");
    }
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
              <span className="badge bg-primary rounded-pill">{totalItems}</span>
            </h4>
            <ul className="list-group mb-3">
              {cartItems.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">{item.title}</h6>
                    <small className="text-body-secondary">{item.description}</small>
                  </div>
                  <span className="text-body-secondary">₹ {item.offerAmount}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">−₹ 0</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (INR)</span>
                <strong>₹ {totalPrice.toFixed(2)}</strong>
              </li>
            </ul>
          </div>

          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <BillingForm
              paymentMethod={paymentMethod}
              handlePaymentMethodChange={handlePaymentMethodChange}
              handleSubmit={handleSubmit}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
