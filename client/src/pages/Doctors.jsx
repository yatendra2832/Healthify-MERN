import React from "react";
import DoctorProfile from "../components/Card/DoctorProfile";
import AOS from "aos";
import "aos/dist/aos.css";
const Doctors = () => {
  AOS.init({
    delay: 400,
    duration: 1000,
  });

  return (
    <>
      <h2 className="text-center m-4  ">
        Our <span className="fw-bold text-primary ">Doctors</span>
      </h2>
      <div data-aos="fade-left">
        <DoctorProfile
          imgSrc="/images/Doctorspage/doctor2.png"
          altText="Doctor 2"
          doctorName="Dr. Sarah Smith"
          specialty="Pediatrics"
          education="MD, Pediatrics, Medical School ABC"
          experience="10+"
          email="dr.sarahsmith@example.com"
          phone="+1 (555) 987-6543"
          officeLocation="456 Oak Avenue, Suite 202, City, State ZIP"
          officeHours="Mon-Fri: 8:30 AM - 4:30 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, French"
        />
      </div>
      <div data-aos="fade-right">
        <DoctorProfile
          imgSrc="/images/Doctorspage/doctor3.png"
          altText="Doctor 3"
          doctorName="Dr. David Johnson"
          specialty="Orthopedics"
          education="MD, Orthopedics, Medical School DEF"
          experience="20+"
          email="dr.davidjohnson@example.com"
          phone="+1 (555) 321-7890"
          officeLocation="789 Elm Street, Suite 303, City, State ZIP"
          officeHours="Mon-Fri: 8:00 AM - 6:00 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Spanish"
        />
      </div>
      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/doctor4.png"
          altText="Doctor 4"
          doctorName="Dr. Emily Anderson"
          specialty="Dermatology"
          education="MD, Dermatology, Medical School GHI"
          experience="12+"
          email="dr.emilyanderson@example.com"
          phone="+1 (555) 456-7890"
          officeLocation="101 Pine Street, Suite 404, City, State ZIP"
          officeHours="Mon-Fri: 9:30 AM - 5:30 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English"
        />
      </div>
      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/doctor5.png"
          altText="Doctor 5"
          doctorName="Dr. Michael Brown"
          specialty="Neurology"
          education="MD, Neurology, Medical School JKL"
          experience="18+"
          email="dr.michaelbrown@example.com"
          phone="+1 (555) 789-1234"
          officeLocation="222 Maple Lane, Suite 505, City, State ZIP"
          officeHours="Mon-Fri: 8:00 AM - 4:00 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Mandarin"
        />
      </div>
    </>
  );
};

export default Doctors;
