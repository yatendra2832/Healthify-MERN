import React from "react";
import { useLocation } from "react-router-dom";
import "./orderpaymentsuccess.css"; // Ensure to create a CSS file for additional custom styling

const generateReceiptVoucher = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let voucher = "";
  for (let i = 0; i < 6; i++) {
    voucher += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return voucher;
};

const getCurrentDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/ ${month}/ ${year}`;
};

const generateInvoiceNumber = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let invoiceNumber = "";
  for (let i = 0; i < 8; i++) {
    invoiceNumber += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return invoiceNumber;
};

const OrderPaymentSuccess = () => {
  const location = useLocation();
  const { paymentId, cartItems, totalPrice } = location.state || {};

  const receiptVoucher = generateReceiptVoucher();
  const invoiceDate = getCurrentDate();
  const invoiceNumber = generateInvoiceNumber();

  const currentStage = "Ordered"; // This should be dynamically set based on the actual order status
  const stages = ["Ordered", "Shipped", "On way", "Delivered"];

  return (
    <div className="container mt-2 mb-5 p-2 border rounded shadow-lg bg-light">
      <div className="order-header bg-primary text-center py-1 mb-2 rounded">
        <h1 className="text-white fst-italic">Thanks for your Order!</h1>
        <p className="text-white fst-italic fs-4">Supplement Order</p>
      </div>
      <div className="order-receipt">
        <div className="receipt-header mb-2">
          <h2 className="text-center">Receipt</h2>
          <p className="text-center">Receipt Voucher: {receiptVoucher}</p>
        </div>
        {cartItems.map((item, index) => (
          <div key={index} className="order-item row mb-2">
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
              <p>Qty: {item.quantity}</p>
              <p>Price: ₹ {item.offerAmount}</p>
            </div>
          </div>
        ))}
        <div className="order-summary row mt-4">
          <div className="col-md-6">
            <div className="summary-details">
              <p>
                <strong>Invoice Number:</strong> {invoiceNumber}
              </p>
              <p>
                <strong>Invoice Date:</strong> {invoiceDate}
              </p>
              <p>
                <strong>Receipt Voucher:</strong> {receiptVoucher}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="summary-pricing">
              <p>
                <strong>Total:</strong> ₹ {totalPrice}
              </p>
              <p>
                <strong>Discount:</strong> {Math.round((totalPrice * 20) / 100)}
              </p>
              <p>
                <strong>GST 18%:</strong> ₹ {(totalPrice * 18) / 100}
              </p>
              <p>
                <strong>Delivery Charges:</strong> Free
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-status-container">
        <div className="order-status">
          {stages.map((stage, index) => (
            <div key={index} className="status-step">
              <div
                className={`status-label ${
                  currentStage === stage ||
                  stages.indexOf(stage) < stages.indexOf(currentStage)
                    ? "active"
                    : ""
                }`}
              >{stage}</div>
              <span
                className={`status-label ${
                  currentStage === stage
                    ? "blinking"
                    : stages.indexOf(stage) < stages.indexOf(currentStage)
                    ? "completed"
                    : ""
                }`}
              >
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="total-paid bg-primary text-center py-3 mt-4 rounded">
        <h4 className="text-white">Total Paid: ₹ {totalPrice.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default OrderPaymentSuccess;
