import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth";
const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className="dropdown mx-4">
      <a
        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle show"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
        <strong>Hi,{user.username}</strong>
      </a>
      <ul
        className="dropdown-menu dropdown-menu-primary text-small shadow "
        data-popper-placement="top-start"
      >
        <li>
          <Link
            to={"/userdashboard"}
            className="text-decoration-none dropdown-item"
          >
            {" "}
            UserDashboard
          </Link>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
        <Link
            to={"/profile"}
            className="text-decoration-none dropdown-item"
          >
            {" "}
            Profile
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to={"/logout"}>
            <button className="btn btn-warning btn-md px-4 mx-2">Logout</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
