import React from "react";
import { useParams } from "react-router-dom";
import Whychooseus from "./whychooseus";
import FormTest from "./FormTest";
import TestInfo from "./TestInfo";

const AboutTest = () => {
  const params = useParams();
  const id = params.id;

  return (
    <>
      <FormTest id={id} />
      <Whychooseus />
      <TestInfo id={id} />
    </>
  );
};

export default AboutTest;
