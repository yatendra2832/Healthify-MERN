import React from "react";
import DoctorConsultationCard from "../components/Card/DoctorConsultationCard";
const DoctorConsultation = () => {
  const doctorsData = [
    {
      imgSrc: "/images/doctorconsultationimg/img1.jpg",
      altText: "Doctor 1",
      experience: "23 Years of Experience",
      name: "Dr. Manjit Kaur",
      qualifications: "MBBS MS",
      specialities: "Gynaecology",
      languages: "Hindi, English, Punjabi",
      nextAvailability: "08:00 AM, Tomorrow",
      consultationFees: 499,
    },
    {
      imgSrc: "/images/doctorconsultationimg/img2.jpg",
      altText: "Doctor 2",
      experience: "30 Years of Experience",
      name: "Dr. Preeti Raheja",
      qualifications: "M.B.B.S, DGO",
      specialities: "Gynaecology",
      languages: "Hindi, English, Punjabi",
      nextAvailability: "10:00 AM, Tomorrow",
      consultationFees: 499,
    },
    {
      imgSrc: "/images/doctorconsultationimg/img3.jpg",
      altText: "Doctor 3",
      experience: "28 Years of Experience",
      name: "Dr. Anil Ramchandra Lonkar",
      qualifications: "M.B.B.S, MD",
      specialities: "Gynaecology",
      languages: "Hindi, English, Marathi",
      nextAvailability: "09:00 AM, TODAY",
      consultationFees: 799,
    },
    {
      imgSrc: "/images/doctorconsultationimg/img4.jpg",
      altText: "Doctor 4",
      experience: "23 Years of Experience",
      name: "Dr. Nupur Gupta",
      qualifications: "M.B.B.S, MS",
      specialities: "Gynaecology",
      languages: "Hindi, English",
      nextAvailability: "08:00 AM, TODAY",
      consultationFees: 499,
    },
    {
      imgSrc: "/images/doctorconsultationimg/img5.jpg",
      altText: "Doctor 5",
      experience: "23 Years of Experience",
      name: "Dr. Manjit Kaur",
      qualifications: "MBBS MS",
      specialities: "Gynaecology",
      languages: "Hindi, English, Punjabi",
      nextAvailability: "08:00 AM, Tomorrow",
      consultationFees: 499,
    },
    {
      imgSrc: "/images/doctorconsultationimg/img6.jpg",
      altText: "Doctor 6",
      experience: "21 Years of Experience",
      name: "Dr. Priyanka Guharoyr",
      qualifications: "M.B.B.S, DNB - Obstetrics & Gynecology, DGO",
      specialities: "Gynaecology",
      languages: "Hindi, English, Marathi, Bengali",
      nextAvailability: "08:00 AM, Tomorrow",
      consultationFees: 299,
    },
  ];
  return (
    <>
    <h1 className="text-center text-primary fw-bold my-4">Doctor Consultation</h1>
     <div>
      {doctorsData.map((doctor, index) => (
        <DoctorConsultationCard key={index} {...doctor}  />
      ))}
    </div>
    </>
   
  );
};

export default DoctorConsultation;
