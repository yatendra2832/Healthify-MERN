import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import MainCarousel from "../components/CarouselCard/MainCarousel";
import Slider from "react-slick";
import TestCarousel from "../components/CarouselCard/TestCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const carouselImages = [
    "/images/carousel/carousel.jpg",
    "/images/carousel/carosel2.jpg",
    "/images/carousel/carosel3.jpg",
  ];

  const cardsData = [
    {
      imageUrl: "/images/TestImage/dexascan.jpg",
      alt: "DexaScan",
      title: "Dexa Scan",
      subtitle: "Subtitle 1",
      price: " 789",
      description:
        "A DEXA bone density scan or ‘dual-energy X-ray absorptiometry’ is a non-invasive, painless, and cutting-edge image diagnostic test conducted to determine your bone mineral density and to a....",
    },
    {
      imageUrl: "/images/TestImage/ctscan.jpg",
      alt: "CT Scan",
      title: "CT Scan",
      price: " 789",
      subtitle: "Subtitle 2",
      description:
        "Computed tomography or CT/CAT scan is a commonly ordered image diagnostic test that combines X-ray images from several angles and compiles them into a single image using 2D and 3D image reconstruction..",
    },
    {
      imageUrl: "/images/TestImage/EEGtest.jpg",
      alt: "EEG Test",
      title: "EEG Test",
      subtitle: "Subtitle 3",
      price: " 789",
      description:
        "An echocardiogram (ECHO) is a type of ultrasound scan that is conducted to evaluate the heart and the nearby blood vessels. This test aims to monitor and assess the functioning of the heart a...",
    },
    {
      imageUrl: "/images/TestImage/mriscan.jpg",
      alt: "MRI Scan",
      title: "MRI Scan",
      subtitle: "Subtitle 4",
      price: " 789",
      description:
        "Magnetic resonance imaging or an MRI is one of the most frequently recommended image diagnostic tests that use strong magnetic fields and radio waves in a controlled environment for high-quality pict....",
    },
    {
      imageUrl: "/images/TestImage/pfttest.jpg",
      alt: "PFT Scan",
      title: "PFT Scan",
      subtitle: "Subtitle 5",
      price: " 789",
      description:
        "Pulmonary function tests or PFT tests are an assortment of painless and non-invasive diagnostic tests that are conducted to evaluate lung function. These tests measure the lung’s capacity, volum....",
    },
    {
      imageUrl: "/images/TestImage/echotest.jpg",
      alt: "ECHO Test",
      title: "Echo Test",
      subtitle: "Subtitle 6",
      price: "789",
      description:
        "An echocardiogram (ECHO) is a type of ultrasound scan that is conducted to evaluate the heart and the nearby blood vessels. This test aims to monitor and assess the functioning of the heart a...",
    },
    {
      imageUrl: "/images/TestImage/xray.jpg",
      alt: "X-Ray",
      title: "X-Ray",
      subtitle: "Subtitle 7",
      price: "789",
      description:
        "A digital X-ray test is the most common and non-invasive image diagnostic test that has been around for decades. This image testing is ordered to detect, diagnose, and monitor a host of medical i....",
    },
    {
      imageUrl: "/images/TestImage/ultrasound.jpg",
      alt: "Ultrasound",
      title: "Ultrasound",
      subtitle: "Subtitle 8",
      price: " 789",
      description:
        "An ultrasound scan, also known as sonography, is the second most popular image diagnostic test after X-ray. It uses high-frequency sound waves to capture detailed images of body parts and structures, ....",
    },
    {
      imageUrl: "/images/TestImage/tmttest.jpg",
      alt: "TMT Test",
      title: "TMT Test",
      subtitle: "Subtitle 9",
      price: " 789",
      description:
        "Treadmill test or TMT is part of the stress test category that is conducted to evaluate the blood flow to the heart during periods of rest and controlled durations of physical pressure, typically....",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200, // Larger screen and below
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // Medium screen and below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Small screen and below
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Main Carousel Cards */}
      <div>
        <MainCarousel images={carouselImages} />
      </div>

      {/* Cards */}
      <h1 className=" text-center fw-bold mt-3 text-primary">
        Health Scan & Imaging Test
      </h1>
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <TestCarousel key={index} {...card} />
        ))}
      </Slider>

      {/* Smart Reports section */}
      <div className="position-relative overflow-hidden p-3 p-md-5 my-5 text-center bg-body-tertiary ">
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
