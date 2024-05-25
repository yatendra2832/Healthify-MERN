import { useState } from "react";
import axios from "axios";
import { useAuth } from "../store/auth"; // Adjust the import path based on your project structure

const useCheckout = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkoutHandler = async (amount, onSuccess,description) => {
    setLoading(true);
    setError(null);
    try {
      const {
        data: { key },
      } = await axios.get("http://localhost:5000/api/payment/getkey");
      const {
        data: { order },
      } = await axios.post("http://localhost:5000/api/payment/checkout", {
        amount,
      });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Healthify",
        description: `${description} Test Booking Payment`,
        image: "/images/homepage/logo2.svg",
        order_id: order.id,
        callback_url: "http://localhost:5000/api/payment/paymentverification",
        prefill: {
          name: user.username,
          email: user.email,
          contact: user.phone,
        },
        notes: {
          address: "A-100, A Block, Govindpuram New Delhi",
        },
        theme: {
          color: "#007bff",
        },
        handler: function (response) {
          // Capture payment ID and call the success callback
          const paymentId = response.razorpay_payment_id;
          if (onSuccess) onSuccess(paymentId);
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      setError("Error during checkout");
      console.error("Error during checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  return { checkoutHandler, loading, error };
};

export default useCheckout;
