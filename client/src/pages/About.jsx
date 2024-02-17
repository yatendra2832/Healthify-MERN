import React from "react";

const About = () => {
  return (
    <>
      {/* why choose healthify
       */}
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
        <div className="row">
          <div className="col-md-7">
            <h1
              className="fw-bold my-4"
              style={{
                color: "#007BFF",
                fontSize: "2rem",
                marginBottom: "20px",
              }}
            >
              Why Choose Healthify ?
            </h1>
            <p
              className="my-4"
              style={{ fontSize: "1.2rem", lineHeight: "1.5", color: "#333" }}
            >
              Healthify is India's leading health test at home service offering
              a wide range of health tests across 250+ cities of India, and
              counting. It has a network of state-of-the-art fully automated
              laboratories and a large team of highly skilled phlebotomists who
              specialize in sample collection from homes.
            </p>
            <p
              className="my-4"
              style={{ fontSize: "1.2rem", lineHeight: "1.5", color: "#333" }}
            >
              Technological innovation has been the foundation of the brand in
              the industry. The company has completely turned a customer's
              diagnostic experience on its head, by focusing on delivering the
              best service experience fulfilled through technology.
            </p>
            <button className="btn btn-danger my-4" type="button">
              Know more
            </button>
          </div>

          <div className="col-md-5">
            <div className="container d-flex justify-content-center align-items-center">
              <img
                className="img-fluid border rounded"
                src="/images/team/whychoseapollo_ah.webp"
                alt="Healthify Image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Out teams */}
      <div className="team my-4 mx-4">
        <h2 className="text-center text-primary fw-bold my-4">Our Team</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img
                src="/images/team/doctorteam1.jpeg"
                alt="Doctor Team 1"
                className="card-img-top rounded-4 p-2"
              />
              <div className="card-body text-center">
                <p className="card-text">
                  Meet Dr. John Doe, a highly experienced medical professional.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img
                src="/images/team/doctor2.jpeg"
                alt="Doctor 2"
                className="card-img-top rounded-4 p-2"
              />
              <div className="card-body text-center">
                <p className="card-text">
                  Introducing Dr. Jane Smith, our expert in surgical procedures.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img
                src="/images/team/doctor3.webp"
                alt="Doctor 3"
                className="w-100 rounded-4 p-2"
              />
              <div className="card-body text-center">
                <p className="card-text">
                  Meet Dr. Sarah Johnson, our expert in medical research. She
                  has a wealth of experience in her field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
