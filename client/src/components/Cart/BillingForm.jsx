import React from "react";

const BillingForm = ({ paymentMethod, handlePaymentMethodChange, handleSubmit, totalPrice }) => {
  return (
    <form className="needs-validation" noValidate onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="firstName" className="form-label">First name</label>
          <input type="text" className="form-control" id="firstName" required />
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>
        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">Last name</label>
          <input type="text" className="form-control" id="lastName" required />
          <div className="invalid-feedback">Valid last name is required.</div>
        </div>
        <div className="col-12">
          <label htmlFor="username" className="form-label">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text">@</span>
            <input type="text" className="form-control" id="username" required />
            <div className="invalid-feedback">Your username is required.</div>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com" />
          <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
          <div className="invalid-feedback">Please enter your shipping address.</div>
        </div>
        <div className="col-12">
          <label htmlFor="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
          <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
        </div>
        <div className="col-md-5">
          <label htmlFor="country" className="form-label">Country</label>
          <select className="form-select" id="country" required>
            <option value="">Choose...</option>
            <option>United States</option>
          </select>
          <div className="invalid-feedback">Please select a valid country.</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="state" className="form-label">State</label>
          <select className="form-select" id="state" required>
            <option value="">Choose...</option>
            <option>California</option>
          </select>
          <div className="invalid-feedback">Please provide a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="zip" required />
          <div className="invalid-feedback">Zip code required.</div>
        </div>
      </div>

      <hr className="my-4" />

      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="same-address" />
        <label className="form-check-label" htmlFor="same-address">
          Shipping address is the same as my billing address
        </label>
      </div>

      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="save-info" />
        <label className="form-check-label" htmlFor="save-info">
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
        />
        <label className="form-check-label" htmlFor="payNow">
          Pay Now
        </label>
      </div>

      <hr className="my-4" />

      <button className="w-100 btn btn-primary btn-lg" type="submit">
        {paymentMethod === "payNow" ? `Pay Now: ₹${totalPrice.toFixed(2)}` : "Checkout"}
      </button>
    </form>
  );
};

export default BillingForm;
