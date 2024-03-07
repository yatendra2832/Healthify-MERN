import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
const AdminUpdate = () => {
  const { AuthorizationToken } = useAuth();
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const params = useParams();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = () => {};
  return (
    <div className="container">
      <h2 className="text-center text-primary fw-bold fs-1 mb-5">
        Update User
      </h2>
      <form className="row g-3">
        <div className="col-md-6">
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
            onChange={handleInput}
            value={data.username}
          />
        </div>
        <div className="col-md-6">
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
            onChange={handleInput}
            value={data.email}
          />
        </div>
        <div className="col-md-6">
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
            onChange={handleInput}
            value={data.phone}
          />
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary w-25 mb-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminUpdate;
