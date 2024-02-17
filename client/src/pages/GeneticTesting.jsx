import React from "react";
import TestsCard from "../components/Card/TestsCard";
const GeneticTesting = () => {
  return (
    <TestsCard
      title="Genetic Testing"
      content="Genetic testing is an advanced medical service offered by our lab that examines an individual's DNA to provide valuable insights into their genetic makeup. This cutting-edge technology allows for the detection of inherited conditions, susceptibility to diseases, and personalized treatment options. Our excellence in genetic testing is evident through our state-of-the-art equipment, expert geneticists, and stringent quality control measures. We prioritize patient privacy and ensure the confidentiality of genetic information. By harnessing the power of genetics, our lab empowers individuals to make informed decisions about their health, family planning, and disease prevention, contributing to a healthier and more personalized approach to healthcare."
      buttonText="Know More"
      imgSrc="/images/TestImage/dexascan.jpg"
      altText="Labs"
      linkHref="#"
    />
  );
};

export default GeneticTesting;
