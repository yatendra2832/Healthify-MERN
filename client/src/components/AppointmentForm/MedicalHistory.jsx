import React from 'react';
import InputField from './InputField';

const MedicalHistory = ({ appointment, handleInput }) => {
  return (
    <>
      <h3 className="text-primary my-4">Medical History</h3>
      <div className="row">
        <InputField
          label="Current Medications"
          name="currentMedications"
          type="text"
          placeholder="List any current medications"
          value={appointment.currentMedications}
          onChange={handleInput}
        />
        <InputField
          label="Allergies"
          name="allergies"
          type="text"
          placeholder="List any allergies"
          value={appointment.allergies}
          onChange={handleInput}
        />
        <InputField
          label="Chronic Conditions"
          name="chronicConditions"
          type="text"
          placeholder="List any chronic conditions"
          value={appointment.chronicConditions}
          onChange={handleInput}
        />
        <InputField
          label="Past Surgeries or Hospitalizations"
          name="pastSurgeries"
          type="text"
          placeholder="List any past surgeries or hospitalizations"
          value={appointment.pastSurgeries}
          onChange={handleInput}
        />
        <InputField
          label="Brief Medical History"
          name="medicalHistory"
          type="textarea"
          rows={3}
          placeholder="Briefly describe your medical history"
          value={appointment.medicalHistory}
          onChange={handleInput}
        />
      </div>
    </>
  );
};

export default MedicalHistory;