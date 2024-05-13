// PaymentForm.js
import React from "react";
import PaymentCard from "./PaymentCard";

const PaymentForm = ({ amount, checkoutHandler, selectedDoctor }) => {
  return (
    <PaymentCard
      amount={amount}
      checkoutHandler={checkoutHandler}
      doctor={selectedDoctor ? selectedDoctor.doctorName : ""}
    />
  );
};

export default PaymentForm;
