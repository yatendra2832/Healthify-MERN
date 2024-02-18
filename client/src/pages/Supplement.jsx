import React from "react";

const Supplement = () => {
  const SupplementCard = ({ imgSrc, title, about }) => {
    return (
      <div className="container my-4 p-4   rounded-5 shadow">
        <div className="card   ">
          {" "}
          <img src={imgSrc} alt="..." />
        </div>
        <div className="row">
          <div className="col-12 col-md-4 ">
            <h3 className="my-2 text-primary text-center">{title}</h3>
            <div className="d-flex justify-content-center ">
              <button className="btn btn-primary  my-2">Buy Now</button>
            </div>
          </div>
          <div className="col-12 col-md-8 my-2">
            <p className="fw-semibold fs-6">{about}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <h1 className="text-center text-primary fw-bold my-2">Supplements</h1>
      <div className="container my-4">
        <SupplementCard
          imgSrc="/images/supplementimg/digestplus.jpg"
          title="Digestplus Supplement"
          about={
            "Digestplus is a carefully formulated supplement designed to support digestive health. Packed with essential enzymes and nutrients, it aids in the efficient breakdown of food, promoting optimal digestion and nutrient absorption. This supplement aims to alleviate digestive discomfort and enhance overall gut well-being, contributing to a healthier and more balanced digestive system."
          }
        />
        <SupplementCard
          imgSrc="/images/supplementimg/diabeatease.jpg"
          title="Diabeatease Supplement"
          about={
            "DiabeatEase Supplement is designed to support individuals managing diabetes by providing a blend of targeted nutrients . This formula aims to promote healthy blood sugar levels and enhance overall well-being. With a focus on natural ingredients, DiabeatEase strives to offer a holistic approach to diabetes management, assisting users in maintaining a balanced and healthy lifestyle."
          }
        />
        <SupplementCard
          imgSrc="/images/supplementimg/liver.jpg"
          title="Liver Supplement"
          about={
            "Liver supplements are formulated to support and optimize liver function. Packed with essential nutrients, these supplements aim to promote liver health, aid detoxification processes, and assist in maintaining overall well-being. With ingredients carefully selected for their potential benefits, liver supplements are designed to contribute to liver function and support a healthy lifestyle."
          }
        />
        <SupplementCard
          imgSrc="/images/supplementimg/nutriboost.jpg"
          title="Nutri Boost Supplement"
          about={
            "Nutri Boost Supplement is a carefully formulated dietary supplement designed to enhance nutritional intake and support overall well-being. Packed with essential vitamins, minerals, and antioxidants, it aims to boost energy levels, promote a healthy immune system, and contribute to optimal bodily functions. Incorporating Nutri Boost into a balanced lifestyle can potentially promote vitality and vitality."
          }
        />
      </div>
    </>
  );
};

export default Supplement;
