import React from "react";
import HealthTipsCard from "../components/Card/HealthTipsCard";
const HealthTips = () => {
  return (
    <>
      <h1 className="text-primary text-center fw-bold">Health Tips</h1>
      <div className="container">
        <div className="row  ">
          <HealthTipsCard
            imageUrl="/images/Healthtips/water.png"
            heading="Water"
            content="Water is vital for good health as it supports various bodily functions. It helps regulate body temperature, aids digestion, transports nutrients, and flushes out toxins.Proper Hydration make you fresh. "
          />

          <HealthTipsCard
            imageUrl="/images/Healthtips/diet.png"
            heading="Diet"
            content=" A healthy diet is crucial for optimal health, providing essential nutrients, supporting bodily functions, and preventing diseases. It contributes to overall well-being, energy, and longevity.Good diet supports body growth."
          />

          <HealthTipsCard
            imageUrl="/images/Healthtips/exercise.png"
            heading="Exercise"
            content="Exercise is crucial for good health, promoting cardiovascular fitness, muscle strength, flexibility, and mental well-being. It aids weight management, reduces the risk of chronic diseases, and enhances overall quality of life."
          />
          <HealthTipsCard
            imageUrl="/images/Healthtips/alcohol.png"
            heading="No Alcohol"
            content="Avoiding alcohol is essential for good health as it reduces the risk of liver damage, cardiovascular issues, and mental health problems. It promotes overall well-being, better sleep, and a more active lifestyle."
          />

          <HealthTipsCard
            imageUrl="/images/Healthtips/smoke.png"
            heading="Say No To Smoke "
            content="Avoiding smoking is crucial for good health as it reduces the risk of various diseases, including cancer and respiratory issues. Non-smoking promotes cardiovascular health, enhances lung function, and contributes to overall well-being."
          />

          <HealthTipsCard
            imageUrl="/images/Healthtips/drinkanddrive.png"
            heading="Don't Drink & Drive"
            content="Don't drink and drive for good health. It safeguards lives, prevents accidents, preserves well-being, and ensures a safe community. Responsible choices contribute to overall health and societal harmony.Stay Safe and Stay Healthy ."
          />
          <HealthTipsCard
            imageUrl="/images/Healthtips/hygiene.png"
            heading="Maintain Hygiene"
            content="Maintaining hygiene is crucial for good health as it prevents the spread of infections, reduces the risk of illnesses, and promotes overall well-being by a clean and safe environment. It reduces get infected by disease we have to maintain proper hygiene.
            "
          />

          <HealthTipsCard
            imageUrl="/images/Healthtips/stress.png"
            heading="Manage Stress"
            content="Managing stress is crucial for good health, as chronic stress negatively impacts physical and mental well-being. Prioritizing stress management supports overall health, enhancing resilience and fostering a balanced lifestyle."
          />

          <HealthTipsCard
            imageUrl="/images/Healthtips/vaccine.png"
            heading="Get vaccinated"
            content="
            Getting vaccinated is crucial for good health as it strengthens immunity, prevents serious illnesses, protects vulnerable populations, and contributes to community well-being, fostering a safer and healthier society overall."
          />
          <HealthTipsCard
            imageUrl="/images/Healthtips/checkup.png"
            heading="Regular Checkup"
            content="Regular checkups are vital for good health, enabling early detection of potential issues, preventive care, and maintaining overall well-being. They play a crucial role in preventing and managing health conditions"
          />
        </div>
      </div>
    </>
  );
};

export default HealthTips;
