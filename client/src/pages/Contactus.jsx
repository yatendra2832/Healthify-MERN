import React from "react";

const Contactus = () => {
  return (
    <>
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative my-4 mx-4">
        <div className="col d-none d-lg-block m-4 p-4">
          <img
            src="/images/blue_images/support.png"
            alt="contact image"
            width={"400"}
            height={"400"}
            className=" rounded-circle color-primary shadow-lg"
          />
        </div>
        <div className="col p-4 d-flex flex-column position-static">
          <div className="container mt-1 ">
            <h2 className="text-center text-primary fw-bold fs-1">
              Contact Us
            </h2>
            <form>
              <div className="row ">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone:
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="reason" className="form-label">
                    Reason for Contact:
                  </label>
                  <select className="form-select" id="reason">
                    <option value="general">General Inquiry</option>
                    <option value="appointment">Appointment Scheduling</option>
                    <option value="billing">Billing and Insurance</option>
                    <option value="records">Medical Records Request</option>
                    <option value="feedback">Feedback or Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="attachments" className="form-label">
                    Attach Files:
                  </label>{" "}
                  <br />
                  <input
                    type="file"
                    className="form-control-file"
                    id="attachments"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center ">
                {" "}
                <button type="submit" className="btn btn-primary mb-4 w-50">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
