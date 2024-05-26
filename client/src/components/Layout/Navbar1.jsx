import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth";
import UserProfile from "../UserDashboard/UserProfile";
const Navbar1 = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg bg-primary border-bottom sticky-top">
      <div className="container-fluid">
        <Link to="/">
          <img
            src="/images/homepage/logo2.png"
            alt="logo"
            width={150}
            height={50}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container justify-content-center">
            <ul className="nav justify-content-evenly navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
              <li className="nav-item">
                <Link to="/" className="nav-link active text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/doctors"} className="nav-link text-white">
                  Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/patients"} className="nav-link text-white">
                  Patients
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/appointment"} className="nav-link text-white">
                  Appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contactus"} className="nav-link text-white">
                  ContactUs
                </Link>
              </li>
              <li className="nav-item link-opacity-75 link-opacity-100-hover ">
                <Link to={"/emergency"} className="nav-link text-white">
                  Emergency
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex justify-content-center ">
            {isLoggedIn ? (
              <>
                {user.isAdmin && (
                  <Link to={"/admin"}>
                    <button className="btn btn-warning">Admin_Panel</button>
                  </Link>
                )}
                <UserProfile user={user} className="mx-4" />
              </>
            ) : (
              <>
                <Link to={"/signup"}>
                  <button className="btn btn-warning btn-md px-3 mx-2">
                    SignUp
                  </button>
                </Link>
                <Link to={"/login"}>
                  <button className="btn btn-warning btn-md px-4 mx-2">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
