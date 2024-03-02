import React from "react";

const BloodTest = () => {
  return (
    <div className="bg-primary text-white m-4 border rounded-5 ">
      <div className="container">
        <h1 className="text-center my-2 fw-bold">
          The Excellence of{" "}
          <span className="text-warning">Blood Test Labs</span>
        </h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 col-12">
            <p className="fw-bold">
              1. Accuracy and Precision <hr />
              2. Expertise <hr />
              3. Efficiency <hr />
              4. Patient-Centric Approach <hr />
              5. Privacy and Confidentiality <hr />
              6. Cutting-Edge Technology <hr />
              7. Accreditations and Certifications <hr />
              8. Contribution to Healthcare <hr />
              9. Positive Feedback <hr />
            </p>
            <button className="btn btn-danger  mb-2  mx-4">Know More</button>
            <button className="btn btn-warning  mb-2  mx-4">Book Blood Test</button>
          </div>
          <div className="col-md-6">
            <img
              src="/images/Navbar2/bloodtest.jpg"
              alt="Labs"
              className=" w-100 rounded-5 my-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodTest;
