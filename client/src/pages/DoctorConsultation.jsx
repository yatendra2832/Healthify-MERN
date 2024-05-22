import React, { useState, useCallback } from "react";
import DoctorConsultationCard from "../components/Card/DoctorConsultationCard";
import { useAuth } from "../store/auth";
import FilterDoctor from "../components/Filter/FilterDoctor";

const DoctorConsultation = () => {
  const { doctors } = useAuth();

  const specialties = Array.from(
    new Set(doctors.map((doctor) => doctor.specialty))
  );

  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [feesFilter, setFeesFilter] = useState("");

  const filterBySpecialty = (doctor) => {
    return (
      !specialtyFilter ||
      doctor.specialty.toLowerCase().includes(specialtyFilter.toLowerCase())
    );
  };

  const filterByExperience = (doctor) => {
    return !experienceFilter || doctor.experience >= experienceFilter;
  };

  const filterByFees = (doctor) => {
    return !feesFilter || doctor.consultationFees <= feesFilter;
  };

  const filterDoctors = useCallback(
    (doctors) => {
      return doctors.filter(
        (doctor) =>
          filterBySpecialty(doctor) &&
          filterByExperience(doctor) &&
          filterByFees(doctor)
      );
    },
    [filterBySpecialty, filterByExperience, filterByFees]
  );

  const visibleDoctors = filterDoctors(doctors);

  return (
    <>
      <h1 className="text-center text-primary fst-italic  my-4">
        <strong className=" border-4 border-bottom p-2 rounded-5 border-warning ">
          Doctor Consultation
        </strong>
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
      {visibleDoctors.map((doctor) => (
        <DoctorConsultationCard
          key={doctor._id}
          id={doctor._id}
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
      ))}
      <hr />
    </>
  );
};

export default DoctorConsultation;
