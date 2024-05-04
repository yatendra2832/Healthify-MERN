import React from "react";
import DoctorConsultationCard from "../components/Card/DoctorConsultationCard";
import { useAuth } from "../store/auth";
const DoctorConsultation = () => {
  const { doctors } = useAuth();
  return (
    <>
      <h1 className="text-center text-primary fw-bold my-4">
        Doctor Consultation
      </h1>
      <div>
        {doctors.map((doctor, index) => (
          <div key={index}>
            <DoctorConsultationCard
              imgSrc={doctor.imgSrc}
              altText={doctor.altText}
              doctorName={doctor.doctorName}
              specialty={doctor.specialty}
              qualifications={doctor.qualifications}
              experience={doctor.experience}
              languagesSpoken={doctor.languagesSpoken}
              nextAvailability={doctor.nextAvailability}
              consultationFees={doctor.consultationFees}
            />
          </div>
        ))}
      </div>
      <hr />
    </>
  );
};

export default DoctorConsultation;
