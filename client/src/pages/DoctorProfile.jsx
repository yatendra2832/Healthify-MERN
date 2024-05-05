import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState("");
  const params = useParams();

  const fetchDoctor = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/doctor/doctorsdata/${params.id}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setDoctor(data);
      }
    } catch (error) {
      console.log("Error at Fetching the doctor by id : ", error);
    }
  };
  useEffect(() => {
    fetchDoctor();
  }, [params.id]);

  if (!doctor) {
    return <div>Loading...</div>;
  }
  return (
    <div className="card mb-2">
      <div className="row g-0 ">
        <div className="col-md-5 p-2">
          <img
            src={doctor.imgSrc}
            alt={doctor.altText}
            className="img-fluid h-100 w-100 rounded-5 shadow-lg "
          />
        </div>
        <div className="col-md-7">
          <div class="card-body">
            <h3 class="card-title text-primary">{doctor.doctorName}</h3>
            <p class="card-text">
              <strong>Specialty:</strong> {doctor.specialty}
            </p>
            <p class="card-text">
              <strong>Email:</strong>{" "}
              <a href={`mailto:${doctor.email}`}>{doctor.email}</a>
            </p>
            <p class="card-text">
              <strong>Phone:</strong> {doctor.phone}
            </p>
            <p class="card-text">
              <strong>Office Location:</strong> {doctor.officeLocation}
            </p>
            <p class="card-text">
              <strong>Next Availability:</strong> {doctor.nextAvailability}
            </p>
            <p class="card-text">
              <strong>Office Hours:</strong> {doctor.officeHours}
            </p>
            <p class="card-text">
              <strong>Consultation Fees:</strong> ₹{doctor.consultationFees}
            </p>
            <p class="card-text">
              <strong>Experience:</strong> {doctor.experience}
            </p>
            <p class="card-text">
              <strong>Qualifications:</strong> {doctor.qualifications}
            </p>
            <p class="card-text">
              <strong>Accepts Insurance:</strong>{" "}
              {doctor.acceptsInsurance ? "Yes" : "No"}
            </p>
            <p class="card-text">
              <strong>Payment Options:</strong> {doctor.paymentOptions}
            </p>
            <p class="card-text">
              <strong>Languages Spoken:</strong> {doctor.languagesSpoken}
            </p>
            <button class="btn btn-primary me-2">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
