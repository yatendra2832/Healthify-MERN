import React, { useState, useEffect } from "react";

import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const FormTest = ({ id }) => {
  const [data, setData] = useState("");

  const getTestById = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/tests/${id}`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    } catch (error) {
      console.error("Error Occured at About test Page :", error);
    }
  };
  useEffect(() => {
    getTestById();
  });
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 p-2 bg-tertiary">
        <div className="row align-items-center g-lg-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h2 className="display-4 fw-bold lh-1 mb-3 fst-italic">
              {data.title}{" "}
              <span className="text-primary">Centres near you in </span>{" "}
              Location
            </h2>
            <p className="col-lg-10 fs-5 fst-italic mt-3">{data.content}</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-2 p-md-5 border rounded-3 bg-body-tertiary shadow-sm">
              <div className="form-group mb-2 position-relative">
                <label htmlFor="patien_name_mb" className="form-label">
                  Your Name
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    name="patien_name_mb"
                    className="form-control"
                    id="patien_name_mb"
                    placeholder="Enter Patient Name*"
                    maxLength="255"
                    required
                  />
                </div>
              </div>
              <div className="form-group mb-2 position-relative">
                <label htmlFor="mobile_mb" className="form-label">
                  Your Mobile Number
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaPhoneAlt />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile_mb"
                    id="mobile_mb"
                    maxLength="10"
                    minLength="10"
                    placeholder="Enter your Mobile No.*"
                    required
                  />
                </div>
              </div>
              <div className="form-group mb-2 position-relative">
                <label htmlFor="city_mb" className="form-label">
                  Location
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaLocationDot />
                  </span>
                  <select className="form-control" name="city_mb" id="city_mb">
                    <option value="1654">Ahmadnagar</option>
                    <option value="1488">Ahmedabad</option>
                    <option value="1519">Allahabad</option>
                    <option value="1490">Aurangabad</option>
                    <option value="1520">Bareilly</option>
                    <option value="1610">Bengaluru</option>
                    <option value="1444">Bhopal</option>
                    <option value="1450">Bhubaneswar</option>
                    <option value="1504">Bilaspur</option>
                    <option value="1553">Chandigarh</option>
                    <option value="1613">Chennai</option>
                    <option value="1458">Dehradun</option>
                    <option value="1595">Delhi</option>
                    <option value="1429">Faridabad</option>
                    <option value="1815">Gandhinagar</option>
                    <option value="1521">Ghaziabad</option>
                    <option value="1584">Gorakhpur</option>
                    <option value="1597">Greater Noida</option>
                    <option value="23" selected="true">
                      Gurgaon
                    </option>
                    <option value="1465">Hyderabad</option>
                    <option value="1446">Indore</option>
                    <option value="1475">Jaipur</option>
                    <option value="1509">Jamshedpur</option>
                    <option value="1549">Kolkata</option>
                    <option value="1523">Lucknow</option>
                    <option value="1502">Ludhiana</option>
                    <option value="1524">Mathura</option>
                    <option value="1580">Mohali</option>
                    <option value="1630">Moradabad</option>
                    <option value="1563">Mumbai</option>
                    <option value="1485">Nagpur</option>
                    <option value="1817">Nashik</option>
                    <option value="1428">Noida</option>
                    <option value="1603">Panchkula</option>
                    <option value="1463">Panipat</option>
                    <option value="1497">Patna</option>
                    <option value="1487">Pune</option>
                    <option value="1506">Raipur</option>
                    <option value="1510">Ranchi</option>
                    <option value="1607">Rohtak</option>
                    <option value="1799">Roorkee</option>
                    <option value="1464">Sonipat</option>
                    <option value="1435">Surat</option>
                    <option value="1529">Varanasi</option>
                    <option value="1471">Visakhapatnam</option>
                    <option value="1470">Warangal</option>
                  </select>
                </div>
              </div>
              <div className="form-group mb-2">
                <b>Upload Prescription</b>
                <input
                  type="file"
                  id="filePath1"
                  name="filePath1"
                  className="form-control"
                  accept="image/png, image/jpeg, image/jpg, application/pdf"
                />
              </div>
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="leadconsentchkMobile"
                  required
                />
                <label
                  className="form-check-label"
                  htmlFor="leadconsentchkMobile"
                >
                  You hereby affirm &amp; authorise Healthify to process the
                  personal data as per the{" "}
                  <Link to={"/terms&condition"} className="link-primary">
                    T&amp;C
                  </Link>
                  .
                </label>
              </div>
              <button
                type="submit"
                id="submit_mb"
                className="w-100 btn btn-lg btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormTest;
