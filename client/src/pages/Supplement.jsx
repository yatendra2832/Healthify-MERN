import React, { useEffect, useState } from "react";
import SupplementCard from "../components/Supplements/SupplementCard";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";

const Supplement = () => {
  const [cardsData, setCardsData] = useState([]);
  const { user } = useAuth();
  const params = useParams()

  const getSupplements = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/supplement", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        const dataWithUserId = data.map(supplement => ({ ...supplement, userId: user._id }));
        setCardsData(dataWithUserId);
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
      <h1 className="text-center text-primary fst-italic">
        <strong className="border-bottom border-primary pb-2">Supplements</strong>
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
