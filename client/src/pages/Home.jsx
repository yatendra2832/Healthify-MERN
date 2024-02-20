import React, { useEffect } from "react";
import BottomNavbar from "../components/BottomNavbar";
import MainCarousel from "../components/CarouselCard/MainCarousel";

const Home = () => {
  const carouselImages = [
    "/images/carousel/carousel.jpg",
    "/images/carousel/carosel2.jpg",
    "/images/carousel/carosel3.jpg",
  ];
  return (
    <>
      {/* Main Carousel Cards */}
      <div>
        <MainCarousel images={carouselImages} />
      </div>

      {/* Cards */}

      {/* Smart Reports section */}
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div className="container mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold mb-3 my-4 display-4">
                Introducing Smart Report
              </h1>
              <h3 className="fw-bold my-4 text-primary">
                Now understanding lab reports got easier
              </h3>
              <h3 className="fw-bold my-4 text-primary">
                Consolidated Health History Report
              </h3>
              <button type="button" className="btn btn-danger">
                Learn More
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="/images/homepage/smartreport.png"
                alt="Smart Report"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lab Test  */}
      <div className="bg-primary text-white my-2">
        <div className="container">
          <h1 className="text-center my-4 fw-bold p-1">
            The Excellence of
            <span className="text-warning mx-2">Healthify Labs</span>
          </h1>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <p>
                Healthify is one of the most trusted players in diagnostics
                today, with a network of fully automated labs across major
                cities in India, that are hardcoded with innovative technology,
                advanced robotics, and intelligent digital solutions.
              </p>
              <p>
                With an extensive team of highly qualified lab technicians and
                pathologists, our single-minded purpose is to follow the
                strictest of quality measures to maintain accuracy for each test
                we perform.
              </p>
              <button className="btn btn-danger m-2">Know More</button>
            </div>
            <div className="col-md-6">
              <a href="">
                <img
                  src="/images/homepage/lab.png"
                  alt="Labs"
                  className="img-fluid mb-2 p-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <BottomNavbar />
    </>
  );
};

export default Home;
