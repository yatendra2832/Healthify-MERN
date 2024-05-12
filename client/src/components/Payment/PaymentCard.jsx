import React from "react";

const PaymentCard = ({ amount, checkoutHandler, doctor }) => {
  return (
    // <div className="container my-4">
    //   <div className="position-relative p-4 text-center text-muted bg-light border border-dashed rounded-3">
    //     <h1 className="text-primary mb-4">Payment Details</h1>
    //     <p className="fs-5 mb-4">
    //       <strong>Doctor Name:</strong> {doctor}
    //     </p>
    //     <p className="fs-5 mb-4">
    //       <strong>Consultation Fees:</strong> ₹ {amount}
    //     </p>
    //     <button
    //       className="btn btn-primary btn-lg px-5 fs-6"
    //       onClick={() => checkoutHandler(amount)}
    //     >
    //       Pay Now
    //     </button>
    //   </div>
    // </div>
    <div className="container my-4">
      <div className="position-relative p-4 text-center text-muted bg-light border border-dashed rounded-3">
        <h1 className="text-primary mb-4">Payment Details</h1>
        <p className="fs-5 mb-4">
          <strong>Doctor Name:</strong> {doctor}
        </p>
        <p className="fs-5 mb-4">
          <strong>Consultation Fees:</strong> ₹ {amount}
        </p>
        <button
          className="btn btn-primary btn-lg px-5 fs-6"
          onClick={() => checkoutHandler(amount)}
        >
          Pay Now
        </button>
        <p className="mt-3 fs-6 text-success">
          **Please complete the payment to proceed with your appointment booking.
        </p>
      </div>
    </div>
  );
};

export default PaymentCard;
