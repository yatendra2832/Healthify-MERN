import React from "react";

const Card = ({ image, text }) => (
  <div className="card h-100 shadow-sm">
    <div className="row g-0 h-100">
      <div className="col-3 d-flex align-items-center justify-content-center">
        <img src={image} className="img-fluid" width={50} height={50} />
      </div>
      <div className="col-9 d-flex align-items-center">
        <div className="card-body text-center">
          <p className="card-text fs-5">{text}</p>
        </div>
      </div>
    </div>
  </div>
);

const Whychooseus = () => {
  return (
    <>
      <div className="why-choose-healthify-container bg-light p-4 rounded-3 my-5 mx-2 shadow">
        <p className="mb-4 fs-1 text-center">
          <strong className="border-bottom border-4 p-2 border-warning rounded-5">
            Why Choose Healthify
          </strong>
        </p>
        <p className="fst-italic fs-5">
          Healthians is one of the most trusted players in diagnostics, with a
          network of fully automated labs across major cities in India, that are
          hardcoded with innovative technology.
        </p>
        <div className="row mb-2 p-4">
          {[
            {
              image: "/images/TestImage/whyHealthify/ct-scan.png",
              text: "1.5 lakh+ patients test with us every month",
            },
            {
              image: "/images/TestImage/whyHealthify/iso.png",
              text: "ISO and NABH certified scan centers",
            },
            {
              image: "/images/TestImage/whyHealthify/save-money.png",
              text: "Patients save an average of ₹700 on each scan",
            },
            {
              image: "/images/TestImage/whyHealthify/shield.png",
              text: "100% Reliable and Accurate reports",
            },
          ].map((item, index) => (
            <div key={index} className="col-md-6 mb-4">
              <Card image={item.image} text={item.text} />
            </div>
          ))}
        </div>

        <p className="mb-4 fs-1 text-center">
          <strong className="border-bottom border-warning border-4 p-2 rounded-5">
            Exclusive Benefits with Healthians
          </strong>
        </p>
        <div className="row mb-2 p-4">
          {[
            {
              image: "/images/TestImage/whyHealthify/customer-service.png",
              text: "Dedicated support to find best centers near you",
            },
            {
              image: "/images/TestImage/whyHealthify/schedule.png",
              text: "Assured discount on your scan in any center you choose",
            },
            {
              image: "/images/TestImage/whyHealthify/price-tag.png",
              text: "Get Up to 60% extra discount on the blood tests",
            },
            {
              image: "/images/TestImage/whyHealthify/priority.png",
              text: "Get Priority appointment for your scans",
            },
          ].map((item, index) => (
            <div key={index} className="col-md-6 mb-4">
              <Card image={item.image} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Whychooseus;
