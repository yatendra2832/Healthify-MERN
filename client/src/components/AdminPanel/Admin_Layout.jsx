import React, { useState, useEffect } from "react";
import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../store/auth";

import { FaUser, FaAddressBook, FaBriefcase, FaHome } from "react-icons/fa";
import { GrDocumentTest } from "react-icons/gr";

const Admin_Layout = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/admin":
        setPageTitle("Admin Panel");
        break;
      case "/admin/users":
        setPageTitle("Admin Panel - Users Data");
        break;
      case "/admin/contacts":
        setPageTitle("Admin Panel - Contacts");
        break;
      case "/admin/appointments":
        setPageTitle("Admin Panel - Appointments");
        break;
      case "/admin/testbookings":
        setPageTitle("Admin Panel - Tests Bookings");
        break;
      default:
        setPageTitle("Admin Panel");
        break;
    }
  }, [location]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!user.isAdmin) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className=" p-3 ">
        <NavLink to={location.pathname} className="nav-link">
          {" "}
          <h1 className="text-primary fw-bold text-center  ">{pageTitle}</h1>
        </NavLink>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <img
              src="/images/homepage/software-engineer.png"
              alt="se"
              width={50}
              height={50}
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav w-100 justify-content-evenly">
                <li className="nav-item ">
                  <NavLink
                    to={"/"}
                    className="nav-link fw-bold fs-6 mx-4 text-primary"
                  >
                    <FaHome className="mx-2 fs-6" /> Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/admin/users"
                    className="nav-link fw-bold fs-6 mx-4 text-primary"
                  >
                    <FaUser className="mx-2 fs-6" /> Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/admin/contacts"
                    className="nav-link fw-bold fs-6 mx-4 text-primary"
                  >
                    <FaAddressBook className="mx-2 fs-6" /> Contacts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/admin/appointments"
                    className="nav-link fw-bold fs-6 mx-4 text-primary"
                  >
                    <FaBriefcase className="mx-2 fs-6" /> Appointments
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/admin/testbookings"
                    className="nav-link fw-bold fs-6 mx-4 text-primary"
                  >
                    <GrDocumentTest className="mx-2 fs-5" /> Test Bookings
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Admin_Layout;
