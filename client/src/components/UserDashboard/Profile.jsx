import React from "react";
import { useAuth } from "../../store/auth";
import { Link } from "react-router-dom";
const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="container my-2">
      <div className=" p-5 bg-body ">
        <h1 className="  fw-semibold">Profile</h1>
        <p className=" mb-4">Name: {user.username}</p>
        <p className=" mb-4">Email: {user.email}</p>
        <p className=" mb-4">Phone: {user.phone}</p>

        <Link to={"/userdashboard"}>
          <button className="btn btn-outline-warning px-5 mb-5" type="button">
            Go To Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
