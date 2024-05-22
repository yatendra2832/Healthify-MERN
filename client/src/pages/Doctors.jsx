import React from "react";
import DoctorProfile from "../components/Card/DoctorProfile";
import { useAuth } from "../store/auth";

const Doctors = () => {
  const { doctors } = useAuth();
  return (
    <>
      <h2 className="text-center m-4  ">
        <strong className=" border-4 border-bottom p-2 rounded-5 border-warning fst-italic">
          Our Doctors
        </strong>
      </h2>
      {doctors.map((doctor, index) => (
        <div key={index}>
          <DoctorProfile
            imgSrc={doctor.imgSrc}
            altText={doctor.altText}
            doctorName={doctor.doctorName}
            specialty={doctor.specialty}
            education={doctor.education}
            experience={doctor.experience}
            email={doctor.email}
            phone={doctor.phone}
            officeLocation={doctor.officeLocation}
            officeHours={doctor.officeHours}
            acceptsInsurance={doctor.acceptsInsurance}
            paymentOptions={doctor.paymentOptions}
            languagesSpoken={doctor.languagesSpoken}
          />
        </div>
      ))}
    </>
  );
};

export default Doctors;
