import { useState } from "react";
import React from "react";
import DoctorConsultationCard from "../components/Card/DoctorConsultationCard";
import { useAuth } from "../store/auth";
import FilterDoctor from "../components/Filter/FilterDoctor";
const DoctorConsultation = () => {
  const { doctors } = useAuth();

  // Extracting all unique specialties from doctors data
  const specialties = Array.from(
    new Set(doctors.map((doctor) => doctor.specialty))
  );
  // TODO
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [feesFilter, setFeesFilter] = useState("");
  // Function to filter doctors based on selected filters

  const filterDoctors = () => {
    return doctors.filter((doctor) => {
      // Check if each doctor meets the filter criteria
      const specialtyMatch = specialtyFilter
        ? doctor.specialty.toLowerCase().includes(specialtyFilter.toLowerCase())
        : true;
      const experienceMatch = experienceFilter
        ? doctor.experience >= experienceFilter
        : true;
      const feesMatch = feesFilter
        ? doctor.consultationFees <= feesFilter
        : true;

      return specialtyMatch && experienceMatch && feesMatch;
    });
  };

  // Apply filters to the list of doctors
  const filteredDoctors = filterDoctors();

  return (
    <>
      <h1 className="text-center text-primary fw-bold my-4">
        Doctor Consultation
      </h1>
      {/* Filter UI */}
      <FilterDoctor
        specialties={specialties}
        specialtyFilter={specialtyFilter}
        experienceFilter={experienceFilter}
        feesFilter={feesFilter}
        onSpecialtyChange={setSpecialtyFilter}
        onExperienceChange={setExperienceFilter}
        onFeesChange={setFeesFilter}
      />

      <div>
        {filteredDoctors.map((doctor, index) => (
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
              id={doctor._id}
            />
          </div>
        ))}
      </div>
      <hr />
    </>
  );
};

export default DoctorConsultation;
