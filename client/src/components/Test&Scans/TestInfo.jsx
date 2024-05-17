import React, { useState, useEffect } from "react";

const TestInfo = ({ id }) => {
  const [data, setData] = useState("");

  const getTestById = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/tests/${id}`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    } catch (error) {
      console.error("Error Occured at About test Page :", error);
    }
  };
  useEffect(() => {
    getTestById();
  });
  return (
    <div className="shadow p-4 m-4 bg-light rounded">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-12 col-lg-6">
          <img
            src={data.imgSrc}
            className="d-block mx-auto img-fluid rounded"
            alt={data.altText}
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-12 col-lg-6">
          <div className="text-center text-lg-start">
            <h1 className=" mb-2">
              What is <span className="text-primary">{data.title}</span>
            </h1>
            <p className="fs-5 fst-italic ">{data.aboutTest}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestInfo;
