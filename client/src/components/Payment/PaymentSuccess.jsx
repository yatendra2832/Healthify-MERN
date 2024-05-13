import React from "react";
import { useLocation, Link } from "react-router-dom";

const PaymentSuccess = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const referenceNum = searchParams.get("reference");

  return (
    <div className="bg-light py-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-6">
            <h1 className="text-center text-uppercase text-teal my-2">
              Payment Successful
            </h1>
            <div className="bg-dark p-4 rounded-4 shadow-lg my-4 text-light">
              <p className="text-center  mb-4">
                Thanks you for Choosing us ! Your appointment has been
                successfully processed.
              </p>
              <p className="text-center font-weight-bold">
                <span className="fw-bold">Reference No. : </span> {referenceNum}
              </p>

              <div className="d-flex justify-content-center my-2">
                <Link to="/">
                  <button className="btn btn-primary mr-2">Home</button>
                </Link>
                <Link to="/userdashboard">
                  <button className="btn btn-warning mx-4">Dashboard</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
