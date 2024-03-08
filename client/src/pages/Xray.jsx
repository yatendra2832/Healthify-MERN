import React from "react";
import TestsCard from "../components/Card/TestsCard";

import AOS from "aos";
import "aos/dist/aos.css";

const Xray = () => {
  AOS.init({
    delay: 800,
    duration: 1000,
  });

  const TestData = [
    {
      title: "Digital X-Rays",
      content:
        "Our digital X-ray lab excels in providing cutting-edge diagnostic imaging services. We employ state-of-the-art technology, such as digital radiography, which delivers superior image quality with reduced radiation exposure. Our team of experienced radiologists and technicians ensures precision and accuracy in every scan. The efficiency of our digital workflow means quicker results for patients and healthcare providers. We prioritize patient comfort, using the latest equipment to minimize discomfort during examinations. Our commitment to privacy and compliance with industry standards guarantees the confidentiality and security of patient data. At our lab, we contribute to early diagnosis and improved healthcare outcomes, making us a trusted choice in diagnostic imaging.",
      buttonText: "Know More",
      imgSrc: "/images/TestImage/xray.jpg",
      altText: "Labs",
      linkHref: "#",
    },
    {
      title: "PET Scan Labs",
      content:
        "Our MRI scan lab stands at the forefront of medical imaging excellence. Equipped with cutting-edge MRI technology and staffed by highly trained professionals, we offer precise and non-invasive diagnostic imaging services. Our lab prides itself on accuracy, producing detailed images vital for detecting a wide range of medical conditions. We prioritize patient comfort, ensuring a relaxing environment and clear communication throughout the process. With a focus on safety and privacy, we adhere to stringent protocols, maintaining the confidentiality of patient information. Our MRI scans play a pivotal role in early disease diagnosis, treatment planning, and delivering superior healthcare outcomes.",
      buttonText: "Know More",
      imgSrc: "/images/TestImage/petScan.jpg",
      altText: "Labs",
    },
    {
      title: "Ultrasound",
      content:
        "Our ultrasound lab excels through cutting-edge technology and skilled sonographers. We prioritize precision imaging, ensuring accurate diagnoses for our patients. With a patient-centric approach, we create a comfortable and reassuring environment for everyone. Our lab emphasizes privacy and confidentiality, safeguarding sensitive medical data. We hold industry certifications, reflecting our commitment to high standards. By leveraging the latest ultrasound equipment, we provide efficient and timely services. Our lab contributes significantly to healthcare, aiding in the early detection of conditions and promoting overall well-being. Patients' positive feedback speaks to the excellence they experience when choosing our ultrasound lab.",
      buttonText: "Know More",
      imgSrc: "/images/TestImage/ultrasound.jpg",
      altText: "Labs",
    },
    {
      title: "TMT Test Lab",
      content:
        "Our TMT test lab stands out for its exceptional cardiac diagnostic services. With cutting-edge technology and highly trained medical professionals, we provide precise and comprehensive assessments of cardiovascular health. Our TMT lab ensures the utmost accuracy in detecting heart conditions, such as coronary artery disease, by monitoring the heart's response to exercise stress. We prioritize patient comfort and safety during TMT procedures, making the experience stress-free and informative. Furthermore, our lab adheres to the highest standards of confidentiality and ethical practice. By offering swift appointments, expert interpretations, and reliable results, we contribute significantly to early diagnosis and improved cardiac care for our patients.",
      buttonText: "Know More",
      imgSrc: "/images/TestImage/tmttest.jpg",
      altText: "Labs",
    },
    {
      title: "MRI Scan Lab",
      content:
        "Our MRI Scan lab excels in delivering top-notch medical imaging services. We boast cutting-edge MRI technology and a team of skilled radiologists who ensure precise and detailed imaging results. Our commitment to patient comfort is evident in our relaxing and patient-friendly environment. With a focus on efficiency, we offer quick appointment scheduling and minimal wait times. We prioritize patient privacy and adhere to strict confidentiality protocols. Accredited and certified, our lab stands as a symbol of quality and trust in the medical community. Trust us for accurate diagnoses, advanced technology, and exceptional care, contributing to improved healthcare outcomes for all.",
      buttonText: "Know More",
      imgSrc: "/images/TestImage/mriscan.jpg",
      altText: "Labs",
    },
    {
      title: "ECG Test Lab",
      content:
        "Our ECG test lab excels in cardiac diagnostics, offering state-of-the-art electrocardiogram (ECG) services. Our dedicated team of experienced cardiologists and technicians ensures accurate and timely results. We prioritize patient comfort and safety, providing a calm and reassuring environment. With cutting-edge ECG equipment and rigorous quality control, we deliver precise data crucial for heart health assessment. Our lab's efficiency ensures minimal waiting times, and we are committed to transparent communication with patients. We maintain strict privacy standards, safeguarding patient information. Our lab's excellence lies in its pivotal role in early detection and monitoring of cardiac conditions, contributing to improved cardiovascular care.",
      buttonText: "Know More",
      imgSrc: "/images/TestImage/EEGtest.jpg",
      altText: "Labs",
    },
    {
      title: "Echo Test Lab",
      content:
        "Our echo test lab excels in cardiac diagnostics by combining cutting-edge technology with clinical expertise. We utilize state-of-the-art echocardiography equipment for incredibly detailed and accurate assessments of heart function. Our team of highly trained cardiologists and technicians ensures precision in every examination. Patient comfort and safety are paramount, with a focus on explaining procedures and addressing concerns. The lab's rapid turnaround times facilitate timely diagnoses, aiding in prompt treatment decisions. We maintain strict privacy standards and hold industry accreditations, reflecting our commitment to quality. Our echo lab stands as a trusted partner in cardiac health, providing exceptional care and contributing to better patient outcomes.",
      buttonText: "Know More",
      imgSrc: "/images/TestImage/echotest.jpg",
      altText: "Labs",
    },
  ];
  return (
    <>
      <h1 className="text-center text-primary fw-bold my-2">
        Test <span className="text-warning">&</span> Scans
      </h1>
      {/* <div >
        {TestData.map((test, index) => (
          <TestsCard key={index} {...test} />
        ))}
      </div> */}
      <div>
        {TestData.map((test, index) => (
          <div
            key={index}
            data-aos={`fade-${index % 2 === 0 ? "up" : "down"}`}
          >
            <TestsCard {...test} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Xray;
