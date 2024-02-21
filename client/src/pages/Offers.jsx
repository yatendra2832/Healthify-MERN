import React from "react";
import OfferCard from "../components/Card/OfferCard";
const Offers = () => {
  return (
    <>
    <h1 className="text-center text-primary fw-bold">Offers</h1>
      <div className="row mb-2 my-4 mx-4">
        <OfferCard
          imgSrc="/images/offerimg/offer1.jpg"
          title="360 Health Checkup @ Rs.1799/- ONLY"
          description='"Contains Blood Test with 83-parameters for Heart, Liver, Kidney, Thyroid, Diabetes and Vitamin screening with Chest X-ray + ECG + BP & BMI and Free Report Counselling."'
        />

        <OfferCard
          imgSrc="/images/offerimg/offer2.jpg"
          title="Flat 60% Off on all natural Supplements."
          description="Get natural supplements for Diabetes, Digestion, Heart, Brain, Hair, Thyroid, Iron & Vitamin deficiency on discounted price and from Herbved."
        />
      </div>

      <div className="row mb-2 my-4 mx-4">
        <OfferCard
          imgSrc="/images/offerimg/offer3.jpg"
          title="Consult top Doctors & Dietitians online starting from @ Rs.129/- ONLY"
          description="Consult top Physician, Gynaecologists, Dermatologists, Diabetologists, Gastroenterologists, Cardiologists, Sexologists, ENT specialists and other specialist doctors online."
        />

        <OfferCard
          imgSrc="/images/offerimg/offer4.jpg"
          title="Book Doctor Consultation + Health Test & Pay only for Health Test"
          description="Book Health Test within 7 days of doctor consultation and get cashback of doctor consultation booking amount."
        />
      </div>
    </>
  );
};

export default Offers;
