import React from "react";
import { useLocation } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const generateOrderId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let orderId = "";
  for (let i = 0; i < 8; i++) {
    orderId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return orderId;
};

const getArrivesByDate = () => {
  const today = new Date();
  const minDays = 2;
  const maxDays = 5;
  const arriveInDays = Math.floor(Math.random() * (maxDays - minDays + 1)) + minDays;
  const arrivalDate = new Date(today);
  arrivalDate.setDate(today.getDate() + arriveInDays);
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return arrivalDate.toLocaleDateString('en-US', options);
};

const OrderPaymentSuccess = () => {
  const location = useLocation();
  const {  products, totalPrice, formData } = location.state || {};

  const orderId = generateOrderId();
  const arrivesByDate = getArrivesByDate();

  return (
    <div className="container mt-4 mb-5 p-4 border rounded shadow bg-light">
      <div className="bg-primary text-white text-center py-3 rounded mb-4">
        <h1>Thank you for your order!</h1>
        <p>Supplement Order</p>
      </div>
      <div>
        <h2 className="text-center mb-4">Receipt </h2>
        <div className=" mb-4">
          <p className="fs-4"><strong>Order ID:</strong> {orderId}</p>
        </div>
        {products.map((item, index) => (
          <div key={index} className="row mb-4 border-bottom pb-3">
            <div className="col-md-4">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><strong>Qty:</strong> {item.quantity}</p>
              <p><strong>Price:</strong> ₹ {item.offerAmount}</p>
              <p><strong>Arrives by:</strong> {arrivesByDate}</p>
            </div>
          </div>
        ))}
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="p-3 border rounded">
              <h4>Shipping Address</h4>
              <p>{formData.address}, {formData.state}, {formData.zip}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 border rounded">
              <h4>Order Summary</h4>
              <p><strong>Total:</strong> ₹ {totalPrice}</p>
              <p><strong>Discount:</strong> {Math.round((totalPrice * 20) / 100)}</p>
              <p><strong>GST 18%:</strong> ₹ {(totalPrice * 18) / 100}</p>
              <p><strong>Delivery Charges:</strong> Free</p>
            </div>
          </div>
        </div>
      </div>
      <div className="progress mt-4">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "25%" }}>
          Order placed
        </div>
        <div className="progress-bar bg-dark" role="progressbar" style={{ width: "25%" }}>
          Processing
        </div>
        <div className="progress-bar bg-dark" role="progressbar" style={{ width: "25%" }}>
          Shipped
        </div>
        <div className="progress-bar bg-dark" role="progressbar" style={{ width: "25%" }}>
          Delivered
        </div>
      </div>
      <div className="bg-primary text-white text-center py-3 mt-4 rounded">
        <h4>Total Due: ₹ {totalPrice.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default OrderPaymentSuccess;
