import React from "react";

const Emergency = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-12 text-center">
          <h1 className="display-6 fw-bold text-danger mb-4">
            Emergency Medical Information
          </h1>
          <p className="lead">
            Learn what to do in an emergency and find resources for help.
          </p>
          <a href="#body" className="btn btn-danger btn-lg">
            Click here to learn more
          </a>
        </div>
      </div>

      <div className="row mb-4" id="body">
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title">What to do in an emergency</h2>
              <ul>
                <li>Call 911 immediately.</li>
                <li>If the person is not breathing, start CPR.</li>
                <li>
                  If the person is bleeding heavily, apply pressure to the
                  wound.
                </li>
                <li>
                  If the person is unconscious, turn them on their side to
                  prevent choking.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body shadow">
              <h2 className="card-title">Emergency preparedness</h2>
              <ul>
                <li>Create an emergency kit.</li>
                <li>Develop a family disaster plan.</li>
                <li>Know your evacuation route.</li>
                <li>Have a plan for communication in an emergency.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title">Emergency resources</h2>
              <ul>
                <li>Hospitals</li>
                <li>Urgent care clinics</li>
                <li>Poison control center</li>
                <li>Financial assistance for emergency medical care</li>
                <li>Local Emergency Services Contacts</li>
                <li>Emergency Shelter Locations</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title">FAQ</h2>
              <ul>
                <li>
                  What should I do if I think someone is having a heart attack?
                </li>
                <li>What should I do if I think someone is having a stroke?</li>
                <li>What should I do if someone is allergic to something?</li>
                <li>How can I prepare for a natural disaster?</li>
                <form className="d-flex m-2" role="search">
                  <input
                    className="form-control me-2 border-danger"
                    type="search"
                    placeholder="Type your Query"
                    aria-label="Search"
                  />
                  <button className="btn btn-danger" type="submit">
                    Search
                  </button>
                </form>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="col-md-12">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="card-title">Contact</h2>
              <p>Phone: (123) 456-7890 Email: healthify@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
