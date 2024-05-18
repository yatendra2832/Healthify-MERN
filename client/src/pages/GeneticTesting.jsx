import React from "react";
import TestsCard from "../components/Card/TestsCard";
import "../css/howitwork.css";

import { GiDrippingTube } from "react-icons/gi";
import { IoMdAnalytics } from "react-icons/io";
import { TbReport } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { LuFileSearch } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

const GeneticTesting = () => {
  return (
    <>
      <TestsCard
        title="Genetic Testing"
        content="Genetic testing is an advanced medical service offered by our lab that examines an individual's DNA to provide valuable insights into their genetic makeup. This cutting-edge technology allows for the detection of inherited conditions, susceptibility to diseases, and personalized treatment options. Our excellence in genetic testing is evident through our state-of-the-art equipment, expert geneticists, and stringent quality control measures. We prioritize patient privacy and ensure the confidentiality of genetic information. By harnessing the power of genetics, our lab empowers individuals to make informed decisions about their health, family planning, and disease prevention, contributing to a healthier and more personalized approach to healthcare."
        buttonText="Know More"
        imgSrc="/images/TestImage/dexascan.jpg"
        altText="Labs"
        linkHref="#"
        id={"66489cdbdcf995ff27e1974e"}
      />

      <div className="howitworkcontainer my-5 bg-primary p-4 rounded-4 m-4">
        <h1 className=" text-center  fw-bold mb-4 fst-italic ">
          <span className="border-bottom border-3 rounded-5 px-4">
            How it Works
          </span>
        </h1>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <div className="step-card mx-2">
            <div className="card-content">
              <GiDrippingTube className="icon fs-1 text-primary m-3" />
              <h5 className="card-title mt-auto text-warning my-4">
                Sample Collection
              </h5>
            </div>
          </div>
          <FaArrowRight className="text-warning fs-2 mx-2 arrow-icon" />
          <div className="step-card mx-2">
            <div className="card-content">
              <IoMdAnalytics className="icon fs-1 text-primary m-3" />
              <h5 className="card-title mt-auto text-warning my-4">
                DNA Extraction
              </h5>
            </div>
          </div>
          <FaArrowRight className="text-warning fs-2 mx-2 arrow-icon" />
          <div className="step-card mx-2">
            <div className="card-content">
              <TbReport className="icon fs-1 text-primary m-3" />
              <h5 className="card-title mt-auto text-warning my-4">
                DNA Analysis
              </h5>
            </div>
          </div>
          <FaArrowRight className="text-warning fs-2 mx-2 arrow-icon" />
          <div className="step-card mx-2">
            <div className="card-content">
              <FaUserDoctor className="icon fs-1 text-primary m-3" />
              <h5 className="card-title mt-auto text-warning my-4">
                Report Generation
              </h5>
            </div>
          </div>
          <FaArrowRight className="text-warning fs-2 mx-2 arrow-icon" />
          <div className="step-card mx-2">
            <div className="card-content">
              <LuFileSearch className="icon fs-1 text-primary m-3" />
              <h5 className="card-title mt-auto text-warning my-4">
                Counseling By Expert
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneticTesting;
