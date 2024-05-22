import React, { useEffect, useState } from "react";
import TestsCard from "../components/Card/TestsCard";
import AOS from "aos";
import "aos/dist/aos.css";

const API_URL = "http://localhost:5000/api/tests";
const AOS_OPTIONS = {
  delay: 800,
  duration: 1000,
};

const Xray = () => {
  const [testData, setTestData] = useState([]);
  const [loading, setLoading] = useState(false);

  AOS.init(AOS_OPTIONS);

  const fetchingTestData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setTestData(data);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingTestData();
  }, []);

  return (
    <>
      <h1 className="text-center text-primary fst-italic my-4">
        <strong className=" border-4 border-bottom p-2 rounded-5 border-warning ">
          Test <span className="text-warning">&</span> Scans
        </strong>
      </h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {testData.map((test, index) => (
            <div key={test._id} data-aos="fade-up">
              <TestsCard {...test} id={test._id} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Xray;
