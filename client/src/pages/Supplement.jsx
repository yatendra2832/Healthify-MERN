import React from "react";

const Supplement = () => {
  const SupplementCard = ({ imgSrc, title, about }) => {
    return (
      <div className="container my-4 p-4 rounded-3 shadow-lg">
        <div className="card border-0">
          <img src={imgSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title text-primary text-center mb-3">{title}</h3>
            <p className="card-text fw-semibold">{about}</p>
            <div className="text-center">
              <button className="btn btn-primary mt-3">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1 className="text-center text-primary fst-italic my-4">
        <strong className="border-bottom border-primary pb-2">Supplements</strong>
      </h1>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <SupplementCard
              imgSrc="/images/supplementimg/digestplus.jpg"
              title="Digestplus Supplement"
              about="Digestplus is a carefully formulated supplement designed to support digestive health. Packed with essential enzymes and nutrients, it aids in the efficient breakdown of food, promoting optimal digestion and nutrient absorption. This supplement aims to alleviate digestive discomfort and enhance overall gut well-being, contributing to a healthier and more balanced digestive system."
            />
          </div>
          <div className="col-md-6">
            <SupplementCard
              imgSrc="/images/supplementimg/diabeatease.jpg"
              title="Diabeatease Supplement"
              about="DiabeatEase Supplement is designed to support individuals managing diabetes by providing a blend of targeted nutrients. This formula aims to promote healthy blood sugar levels and enhance overall well-being. With a focus on natural ingredients, DiabeatEase strives to offer a holistic approach to diabetes management, assisting users in maintaining a balanced and healthy lifestyle."
            />
          </div>
          <div className="col-md-6">
            <SupplementCard
              imgSrc="/images/supplementimg/liver.jpg"
              title="Liver Supplement"
              about="Liver supplements are formulated to support and optimize liver function. Packed with essential nutrients, these supplements aim to promote liver health, aid detoxification processes, and assist in maintaining overall well-being. With ingredients carefully selected for their potential benefits, liver supplements are designed to contribute to liver function and support a healthy lifestyle."
            />
          </div>
          <div className="col-md-6">
            <SupplementCard
              imgSrc="/images/supplementimg/nutriboost.jpg"
              title="Nutri Boost Supplement"
              about="Nutri Boost Supplement is a carefully formulated dietary supplement designed to enhance nutritional intake and support overall well-being. Packed with essential vitamins, minerals, and antioxidants, it aims to boost energy levels, promote a healthy immune system, and contribute to optimal bodily functions. Incorporating Nutri Boost into a balanced lifestyle can potentially promote vitality and vitality."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Supplement;
