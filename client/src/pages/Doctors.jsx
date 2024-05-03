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
      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/femaledoctor1.jpeg"
          altText="Doctor 1"
          doctorName="Dr. Priya Patel"
          specialty="Cardiology"
          education="MD, Cardiology, Medical School ABC"
          experience="15+"
          email="dr.priyapatel@example.com"
          phone="+1 (555) 123-4567"
          officeLocation="123 Oak Street, Suite 101, Mumbai, Maharashtra"
          officeHours="Mon-Fri: 9:00 AM - 5:00 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/maledoctor1.jpeg"
          altText="Doctor 2"
          doctorName="Dr. Rajesh Kumar"
          specialty="Orthopedics"
          education="MD, Orthopedics, Medical School XYZ"
          experience="20+"
          email="dr.rajeshkumar@example.com"
          phone="+1 (555) 234-5678"
          officeLocation="456 Pine Street, Suite 202, Delhi, Delhi"
          officeHours="Mon-Fri: 8:30 AM - 4:30 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/femaledoctor2.jpeg"
          altText="Doctor 3"
          doctorName="Dr. Anjali Gupta"
          specialty="Pediatrics"
          education="MD, Pediatrics, Medical School DEF"
          experience="12+"
          email="dr.anjaligupta@example.com"
          phone="+1 (555) 345-6789"
          officeLocation="789 Elm Street, Suite 303, Bangalore, Karnataka"
          officeHours="Mon-Fri: 9:30 AM - 5:30 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      {/* Continue creating similar cards for other doctors */}

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/maledoctor2.jpeg"
          altText="Doctor 4"
          doctorName="Dr. Vikram Singh"
          specialty="Dermatology"
          education="MD, Dermatology, Medical School GHI"
          experience="18+"
          email="dr.vikramsingh@example.com"
          phone="+1 (555) 456-7890"
          officeLocation="101 Cedar Avenue, Suite 404, Mumbai, Maharashtra"
          officeHours="Mon-Fri: 8:00 AM - 4:00 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/femaledoctor3.jpeg"
          altText="Doctor 5"
          doctorName="Dr. Nisha Sharma"
          specialty="Gynecology"
          education="MD, Gynecology, Medical School JKL"
          experience="15+"
          email="dr.nishasharma@example.com"
          phone="+1 (555) 567-8901"
          officeLocation="222 Maple Lane, Suite 505, Chennai, Tamil Nadu"
          officeHours="Mon-Fri: 8:00 AM - 4:00 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/maledoctor3.jpeg"
          altText="Doctor 6"
          doctorName="Dr. Sanjay Patel"
          specialty="Oncology"
          education="MD, Oncology, Medical School MNO"
          experience="22+"
          email="dr.sanjaypatel@example.com"
          phone="+1 (555) 678-9012"
          officeLocation="333 Elmwood Drive, Suite 606, Kolkata, West Bengal"
          officeHours="Mon-Fri: 9:00 AM - 5:00 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/femaledoctor4.jpeg"
          altText="Doctor 7"
          doctorName="Dr. Ritu Singh"
          specialty="Endocrinology"
          education="MD, Endocrinology, Medical School PQR"
          experience="10+"
          email="dr.ritusingh@example.com"
          phone="+1 (555) 789-0123"
          officeLocation="444 Oakwood Avenue, Suite 707, Hyderabad, Telangana"
          officeHours="Mon-Fri: 8:30 AM - 4:30 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/maledoctor4.jpeg"
          altText="Doctor 8"
          doctorName="Dr. Arjun Gupta"
          specialty="Urology"
          education="MD, Urology, Medical School STU"
          experience="17+"
          email="dr.arjungupta@example.com"
          phone="+1 (555) 901-2345"
          officeLocation="555 Pinecrest Boulevard, Suite 808, Pune, Maharashtra"
          officeHours="Mon-Fri: 9:30 AM - 5:30 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/femaledoctor5.jpeg"
          altText="Doctor 9"
          doctorName="Dr. Meera Reddy"
          specialty="Psychiatry"
          education="MD, Psychiatry, Medical School VWX"
          experience="14+"
          email="dr.meerareddy@example.com"
          phone="+1 (555) 123-4567"
          officeLocation="666 Maple Avenue, Suite 909, Mumbai, Maharashtra"
          officeHours="Mon-Fri: 9:00 AM - 5:00 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      {/* More Cards */}
      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/femaledoctor6.jpeg"
          altText="Doctor 1"
          doctorName="Dr. Neha Patel"
          specialty="Cardiology"
          education="MD, Cardiology, Medical School ABC"
          experience="15+"
          email="dr.nehapatel@example.com"
          phone="+1 (555) 123-4567"
          officeLocation="123 Oak Street, Suite 101, India"
          officeHours="Mon-Fri: 9:00 AM - 5:00 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/maledoctor5.jpeg"
          altText="Doctor 2"
          doctorName="Dr. Rajesh Gupta"
          specialty="Orthopedics"
          education="MD, Orthopedics, Medical School XYZ"
          experience="20+"
          email="dr.rajeshgupta@example.com"
          phone="+1 (555) 234-5678"
          officeLocation="456 Pine Street, Suite 202, India"
          officeHours="Mon-Fri: 8:30 AM - 4:30 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/femaledoctor7.jpeg"
          altText="Doctor 3"
          doctorName="Dr. Priya Sharma"
          specialty="Pediatrics"
          education="MD, Pediatrics, Medical School DEF"
          experience="12+"
          email="dr.priyasharma@example.com"
          phone="+1 (555) 345-6789"
          officeLocation="789 Elm Street, Suite 303, India"
          officeHours="Mon-Fri: 9:30 AM - 5:30 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      {/* Continue creating similar cards for other doctors */}

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/maledoctor4.jpeg"
          altText="Doctor 4"
          doctorName="Dr. Amit Kumar"
          specialty="Dermatology"
          education="MD, Dermatology, Medical School GHI"
          experience="18+"
          email="dr.amitkumar@example.com"
          phone="+1 (555) 456-7890"
          officeLocation="101 Cedar Avenue, Suite 404, India"
          officeHours="Mon-Fri: 8:00 AM - 4:00 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/femaledoctor7.jpeg"
          altText="Doctor 5"
          doctorName="Dr. Anjali Singh"
          specialty="Gynecology"
          education="MD, Gynecology, Medical School JKL"
          experience="15+"
          email="dr.anjalisingh@example.com"
          phone="+1 (555) 567-8901"
          officeLocation="222 Maple Lane, Suite 505, India"
          officeHours="Mon-Fri: 8:00 AM - 4:00 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/maledoctor5.jpeg"
          altText="Doctor 6"
          doctorName="Dr. Sanjay Verma"
          specialty="Oncology"
          education="MD, Oncology, Medical School MNO"
          experience="22+"
          email="dr.sanjayverma@example.com"
          phone="+1 (555) 678-9012"
          officeLocation="333 Elmwood Drive, Suite 606, India"
          officeHours="Mon-Fri: 9:00 AM - 5:00 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/femaledoctor8.jpeg"
          altText="Doctor 7"
          doctorName="Dr. Meera Desai"
          specialty="Endocrinology"
          education="MD, Endocrinology, Medical School PQR"
          experience="10+"
          email="dr.meeradesai@example.com"
          phone="+1 (555) 789-0123"
          officeLocation="444 Oakwood Avenue, Gurugram , India"
          officeHours="Mon-Fri: 8:30 AM - 4:30 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/maledoctor6.jpeg"
          altText="Doctor 8"
          doctorName="Dr. Arjun Patel"
          specialty="Urology"
          education="MD, Urology, Medical School STU"
          experience="17+"
          email="dr.arjunpatel@example.com"
          phone="+1 (555) 901-2345"
          officeLocation="555 Pinecrest Boulevard, Green Park, Noida, India"
          officeHours="Mon-Fri: 9:30 AM - 5:30 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>

      <div data-aos="zoom-in-down">
        <DoctorProfile
          imgSrc="/images/Doctorspage/femaledoctor9.jpeg"
          altText="Doctor 9"
          doctorName="Dr. Ayesha Khan"
          specialty="Psychiatry"
          education="MD, Psychiatry, Medical School VWX"
          experience="14+"
          email="dr.ayeshakhan@example.com"
          phone="+1 (555) 123-4567"
          officeLocation="666 Maple Avenue, Suite 909,New Delhi, India"
          officeHours="Mon-Fri: 9:00 AM - 5:00 PM"
          acceptsInsurance={true}
          paymentOptions="Cash, Credit Cards, Insurance"
          languagesSpoken="English, Hindi"
        />
      </div>
    </>
  );
};

export default Doctors;
