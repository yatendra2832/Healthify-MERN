import React, { useRef, useState } from "react";
import StateSelector from "./StateSelector";

const BillingForm = ({
  paymentMethod,
  handlePaymentMethodChange,
  handleSubmit,
  totalPrice,
  onPaymentSubmit,
}) => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
    sameAddress: false,
    saveInfo: false,
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleStateChange = (state) => {
    setFormData((prevData) => ({
      ...prevData,
      state,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formRef.current.checkValidity()) {
      if (paymentMethod === "payNow") {
        onPaymentSubmit(totalPrice, formData); // Pass formData to onPaymentSubmit
      } else {
        handleSubmit(e, formData); // Pass formData to handleSubmit
      }
    } else {
      formRef.current.classList.add("was-validated");
    }
  };

  return (
    <form
      className="needs-validation"
      noValidate
      onSubmit={handleFormSubmit}
      ref={formRef}
    >
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>
        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Valid last name is required.</div>
        </div>
        <div className="col-12">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text">@</span>
            <input
              type="text"
              className="form-control"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">Your username is required.</div>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email <span className="text-body-secondary">(Optional)</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@example.com"
          />
          <div className="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="1234 Main St"
            required
          />
          <div className="invalid-feedback">Please enter your shipping address.</div>
        </div>
        <div className="col-12">
          <label htmlFor="address2" className="form-label">
            Address 2 <span className="text-body-secondary">(Optional)</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="address2"
            value={formData.address2}
            onChange={handleInputChange}
            placeholder="Apartment or suite"
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select
            className="form-select"
            id="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          >
            <option value="">Choose...</option>
            <option>India</option>
          </select>
          <div className="invalid-feedback">Please select a valid country.</div>
        </div>
        <div className="col-md-4">
          <StateSelector
            selectedState={formData.state}
            onStateChange={handleStateChange}
          />
          <div className="invalid-feedback">Please provide a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            value={formData.zip}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Zip code required.</div>
        </div>
      </div>

      <hr className="my-4" />

      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="sameAddress"
          checked={formData.sameAddress}
          onChange={handleInputChange}
        />
        <label className="form-check-label" htmlFor="sameAddress">
          Shipping address is the same as my billing address
        </label>
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="saveInfo"
          checked={formData.saveInfo}
          onChange={handleInputChange}
        />
        <label className="form-check-label" htmlFor="saveInfo">
          Save this information for next time
        </label>
      </div>

      <hr className="my-4" />

      <h4 className="mb-3">Payment</h4>

      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="cashOnDelivery"
          name="paymentMethod"
          value="cashOnDelivery"
          checked={paymentMethod === "cashOnDelivery"}
          onChange={handlePaymentMethodChange}
          required
        />
        <label className="form-check-label" htmlFor="cashOnDelivery">
          Cash on Delivery
        </label>
      </div>

      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="payNow"
          name="paymentMethod"
          value="payNow"
          checked={paymentMethod === "payNow"}
          onChange={handlePaymentMethodChange}
          required
        />
        <label className="form-check-label" htmlFor="payNow">
          Pay Now
        </label>
      </div>

      <hr className="my-4" />

      <button className="w-100 btn btn-primary btn-lg" type="submit">
        {paymentMethod === "payNow"
          ? `Pay Now: ₹${totalPrice.toFixed(2)}`
          : "Checkout"}
      </button>
    </form>
  );
};

export default BillingForm;
