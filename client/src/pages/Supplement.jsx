import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import DiscountButton from "../components/LabTest/DiscountButton";

const Supplement = () => {
  const SupplementCard = ({
    imgSrc,
    title,
    about,
    originalPrice,
    offerAmount,
  }) => {
    return (
      <div className="col-md-6 mb-4">
        <div className="card border-0 shadow-lg h-100">
          <img src={imgSrc} className="card-img-top rounded-top" alt={title} />
          <div className="card-body d-flex flex-column">
            <h3 className="card-title text-primary text-center mb-1 fst-italic fw-bold">
              {title}
            </h3>
            <div className="d-flex justify-content-center mb-1">
              <DiscountButton
                originalPrice={originalPrice}
                offerAmount={offerAmount}
              />
            </div>
            <div className="d-flex justify-content-center mb-1">
              <p className="card-text text-muted text-center">{about}</p>
            </div>
            <div className="mt-auto d-flex justify-content-around">
              <button className="btn btn-primary mt-1 rounded-pill px-4 w-25">
                Buy Now
              </button>
              <button className="btn btn-warning mt-1 rounded-pill px-4 w-25">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1 className="text-center text-primary fst-italic ">
        <strong className="border-bottom border-primary pb-2">
          Supplements
        </strong>
      </h1>
      <div className="container my-4">
        <div className="row">
          <SupplementCard
            imgSrc="/images/supplementimg/digestplus.jpg"
            title="Digestplus Supplement"
            about="Digestplus is a carefully formulated supplement designed to support digestive health. Packed with essential enzymes and nutrients, it aids in the efficient breakdown of food, promoting optimal digestion and nutrient absorption. This supplement aims to alleviate digestive discomfort and enhance overall gut well-being, contributing to a healthier and more balanced digestive system."
            originalPrice={599}
            offerAmount={249}
          />
          <SupplementCard
            imgSrc="/images/supplementimg/diabeatease.jpg"
            title="Diabeatease Supplement"
            about="DiabeatEase Supplement is designed to support individuals managing diabetes by providing a blend of targeted nutrients. This formula aims to promote healthy blood sugar levels and enhance overall well-being. With a focus on natural ingredients, DiabeatEase strives to offer a holistic approach to diabetes management, assisting users in maintaining a balanced and healthy lifestyle."
            originalPrice={799}
            offerAmount={349}
          />
          <SupplementCard
            imgSrc="/images/supplementimg/liver.jpg"
            title="Liver Supplement"
            about="Liver supplements are formulated to support and optimize liver function. Packed with essential nutrients, these supplements aim to promote liver health, aid detoxification processes, and assist in maintaining overall well-being. With ingredients carefully selected for their potential benefits, liver supplements are designed to contribute to liver function and support a healthy lifestyle."
            originalPrice={699}
            offerAmount={299}
          />
          <SupplementCard
            imgSrc="/images/supplementimg/nutriboost.jpg"
            title="Nutri Boost Supplement"
            about="Nutri Boost Supplement is a carefully formulated dietary supplement designed to enhance nutritional intake and support overall well-being. Packed with essential vitamins, minerals, and antioxidants, it aims to boost energy levels, promote a healthy immune system, and contribute to optimal bodily functions. Incorporating Nutri Boost into a balanced lifestyle can potentially promote vitality and vitality."
            originalPrice={899}
            offerAmount={399}
          />
        </div>
      </div>
    </>
  );
};

export default Supplement;
