import React, { useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Signup = () => {
  // Signup form logic
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  // useAuth token
  const { storeTokenInLS } = useAuth();

  // handling form input
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        // Store the token in the LS
        storeTokenInLS(res_data.token);
        toast.success("Registration Successfull ")
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }

      // console.log(response);
    } catch (error) {
      console.log("Error at the signup form", error);
    }
  };

  // Signup Carousel
  const slides = [
    {
      image: "/images/Login_Signup/boxicon.png",
      text: " Real-Time Packages",
      heading: "Customized",
    },
    {
      image: "/images/Login_Signup/complete.png",
      text: " Honest Price Guaranteed",
      heading: "Cost-Effective",
    },
    {
      image: "/images/Login_Signup/Convenient.png",
      text: " Free Home Sample Collection",
      heading: "Convenient",
    },
    {
      image: "/images/Login_Signup/cost-effective.png",
      text: " Accurate Results On Time",
      heading: "Carefree",
    },
    {
      image: "/images/Login_Signup/timer.png",
      text: " Proactive Wellness Report",
      heading: "Complete",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="row g-0  rounded overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative m-4 p-4">
      <div className="col col-md-6 my-5">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="text-center">
              <div className="d-flex flex-column align-items-center ">
                <img
                  src={slide.image}
                  alt={`login image ${index + 1}`}
                  width={200}
                  height={200}
                  className="rounded-circle shadow"
                />
                <h2 className="my-2">{slide.heading}</h2>
                <p className="mt-1">{slide.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="col col-md-6 p-4 d-flex flex-column position-static">
        <div className="container mt-1 ">
          <h2 className="text-center text-primary fw-bold fs-1">Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="username"
                placeholder="Your Username"
                required
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                id="phone"
                placeholder="Your Phone Number"
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Your Password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-75 d-block mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
