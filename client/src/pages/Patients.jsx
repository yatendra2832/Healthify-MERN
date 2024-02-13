import React from "react";
import PatientReviewCard from "../components/Card/PatientReviewCard";
const Patients = () => {
  return (
    <>
      {" "}
      <h2 className="text-center m-4">
        Our <span className="fw-bold text-primary ">Patients</span> Review
      </h2>
      <div>
        {/* First Set of Patient Reviews */}
        <div className="row mb-4">
          <div className="col-md-6">
            {" "}
            <PatientReviewCard
              name="Sarah D."
              rating="★★★★☆"
              date="12 August 2023"
              review="Overall, my experience at this clinic was positive. The doctors were knowledgeable and took the time to explain my condition and treatment options. The only reason I'm not giving five stars is that the wait times in the waiting room were a bit long. However, the quality of care made up for it."
              imageSrc="/images/patient/patient1.jpg"
            />
          </div>
          <div className="col-md-6">
            <PatientReviewCard
              name="John D."
              rating="★★★★★"
              date="11 September 2023"
              review="I recently had a surgery at this hospital, and I couldn't be happier with the care I received. The medical staff were incredibly attentive and made me feel comfortable throughout the entire process. The facility was clean and well-maintained, Well supported. Thank you for the excellent care!"
              imageSrc="/images/patient/patient2.jpg"
            />
          </div>
        </div>

        {/* Second Set of Patient Reviews */}
        <div className="row mb-4">
          <div className="col-md-6">
            <PatientReviewCard
              reviewNumber={3}
              name="Mark P."
              rating="★★★★☆"
              date="18 September"
              review="I've been a patient here for several years, and I appreciate the consistency of care. The staff is friendly and the doctors are thorough. My only suggestion would be to improve the appointment scheduling process as it can sometimes be challenging to get an appointment at a convenient time."
              imageSrc="/images/patient/patient3.jpg"
            />
          </div>

          <div className="col-md-6">
            {" "}
            <PatientReviewCard
              reviewNumber={4}
              name="Rahul Jain"
              rating="★★★★☆"
              date="21 September 2023"
              review="This facility has an outstanding team of healthcare professionals. They are compassionate and genuinely concerned about their patients' well-being. I had a complex medical issue, and they worked tirelessly to find the right treatment. I am grateful for their expertise and dedication."
              imageSrc="/images/patient/patient4.jpg"
            />
          </div>
        </div>

        {/* Third Set of Patient Reviews */}
        <div className="row mb-4">
          <div className="col-md-6">
            {" "}
            <PatientReviewCard
              reviewNumber={5}
              name="Emily H."
              rating="★★★☆☆"
              date="13 August 2023"
              review="The pediatric department here is excellent. My children have received top-notch care from the pediatricians and nurses. However, the administrative side could use some improvement. I've had a few issues with billing and scheduling that were a bit frustrating to resolve."
              imageSrc="/images/patient/patient5.jpg"
            />
          </div>
          <div className="col-md-6">
            {" "}
            <PatientReviewCard
              reviewNumber={6}
              name="Michael S."
              rating="★★★★★"
              date="1 October 2023"
              review="I can't say enough good things about this healthcare facility. From the moment I walked in, I felt like I was in capable hands. The staff were efficient, caring, and made sure I understood my treatment plan. They even followed up with me after my procedure to check on my recovery."
              imageSrc="/images/patient/patient6.jpg"
            />
          </div>
          </div>
      </div>
    </>
  );
};

export default Patients;
