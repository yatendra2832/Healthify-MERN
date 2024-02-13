import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar2 = () => {
  return (
    <nav className="navbar navbar-expand-lg   ">
      <div className="container-fluid">
        <Link to="/" className="fs-4 text-dark">
          <FaHome />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar2"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar2">
          <div className="container justify-content-center">
            <ul className="nav justify-content-between navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
              <li className="nav-item ">
                <Link className="nav-link " to="/bloodtest">
                  Blood Test
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/xray">
                  X-Rays & Scans
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/geneticTesting">
                  Genetic Testing
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/doctorconsultation">
                  Doctor Consultation
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/surgery">
                  Surgery
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/supplement">
                  Supplements
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/healthtips">
                  Health Tips
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/offers">
                  Offers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
