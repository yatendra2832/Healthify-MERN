import React from "react";

const Signup = () => {
  return (
    <div className="row g-0  rounded overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative my-4 mx-4">
      <div className="col d-none d-lg-block m-4 p-4">
        <img
          src="/images/blue_images/register.png"
          alt="contact image"
          width={"400"}
          height={"400"}
          className=" rounded-circle color-primary shadow-lg"
        />
      </div>
      <div className="col p-4 d-flex flex-column position-static">
        <div className="container mt-1 ">
          <h2 className="text-center text-primary fw-bold fs-1">Signup</h2>
          <form>
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
