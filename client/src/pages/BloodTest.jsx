import React, { useEffect, useState } from "react";
import LabTestCard from "../components/LabTest/LabTestCard";
const BloodTest = () => {
  const [cardsData, setCardsData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/labtestcards", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setCardsData(data);
      }
    } catch (error) {
      console.error("Error at labtest card fetching", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-primary text-white m-1 border rounded-2 mb-4 ">
        <div className="container">
          <h1 className="text-center my-2 fw-bold fst-italic">
            The Excellence of{" "}
            <span className="text-warning ">Blood Test Labs</span>
          </h1>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-12 d-flex flex-column justify-content-between">
              <ul className="list-group fw-bold ">
                <li className="list-group-item">1. Accuracy and Precision</li>
                <li className="list-group-item">2. Expertise</li>
                <li className="list-group-item">3. Efficiency</li>
                <li className="list-group-item">4. Patient-Centric Approach</li>
                <li className="list-group-item">
                  5. Privacy and Confidentiality
                </li>
                <li className="list-group-item">6. Cutting-Edge Technology</li>
                <li className="list-group-item">
                  7. Accreditations and Certifications
                </li>
                <li className="list-group-item">
                  8. Contribution to Healthcare
                </li>
                <li className="list-group-item">9. Positive Feedback</li>
              </ul>
              <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-danger  mb-2 mx-2">Know More</button>
                <button className="btn btn-warning  mb-2 mx-2">
                  Book Blood Test
                </button>
              </div>
            </div>
            <div className="col-md-6 col-12 d-flex align-items-center mb-5">
              <img
                src="/images/Navbar2/bloodtest.jpg"
                alt="Labs"
                className="w-100 rounded-5 p-4"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="text-danger" />
      <div className=" container mb-5">
        <h1 className="text-center text-primary fst-italic mb-4">
          <strong className=" border-4 border-bottom p-2 rounded-5 border-warning ">
            Popular Tests
          </strong>
        </h1>
        <div className="row  g-3 my-4">
          {cardsData.map((card, index) => (
            <LabTestCard key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BloodTest;
