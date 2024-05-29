import React, { useEffect, useState } from "react";
import SupplementCard from "../components/Supplements/SupplementCard";
const Supplement = () => {
  const [cardsData, setCardsData] = useState([]);

  const getSupplements = async (req, res) => {
    try {
      const response = await fetch("http://localhost:5000/api/supplement", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setCardsData(data);
      }
    } catch (error) {
      console.log("Error in getting Supplements", error.message);
    }
  };

  useEffect(() => {
    getSupplements();
  }, []);

  return (
    <>
      <h1 className="text-center text-primary fst-italic ">
        <strong className="border-bottom border-primary pb-2">
          Supplements
        </strong>
      </h1>
      <div className="container my-4">
        <div className="row">
          {cardsData.map((supplement, index) => (
            <SupplementCard key={index} {...supplement} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Supplement;
