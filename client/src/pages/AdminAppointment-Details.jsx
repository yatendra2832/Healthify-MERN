import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";

const AdminAppointmentDetails = () => {
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { AuthorizationToken } = useAuth();
  const params = useParams();

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/admin/appointments/${params.id}`,
          {
            method: "GET",
            headers: {
              Authorization: AuthorizationToken,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch appointment details");
        }
        const data = await response.json();
        setAppointment(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [AuthorizationToken, params.id]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator message={error} />;
  }

  if (!appointment) {
    return <NotFoundIndicator />;
  }

  return (
    <div className="container">
      <h1 className="mb-4 text-primary text-center">
        Admin Appointment Details
      </h1>
      <AppointmentDetails appointment={appointment} />
    </div>
  );
};

const LoadingIndicator = () => {
  return (
    <div className="text-center">
      <p>Loading...</p>
      <Spinner />
    </div>
  );
};

const ErrorIndicator = ({ message }) => {
  return (
    <div className="text-center">
      <p>Error: {message}</p>
    </div>
  );
};

const NotFoundIndicator = () => {
  return (
    <div className="text-center">
      <p>Appointment not found.</p>
    </div>
  );
};

const AppointmentDetails = ({ appointment }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <PersonalInformation appointment={appointment} />
      </div>
      <div className="col-md-6">
        <ContactInformation appointment={appointment} />
      </div>
      <div className="col-md-12">
        <AppointmentDetailsCard appointment={appointment} />
      </div>
      <div className="col-md-12">
        <InsuranceDetailsCard appointment={appointment} />
      </div>
      <div className="col-md-12">
        <MedicalHistoryCard appointment={appointment} />
      </div>
      <div className="col-md-12">
        <EmergencyContactCard appointment={appointment} />
      </div>
    </div>
  );
};

const PersonalInformation = ({ appointment }) => {
  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-warning">
        <h2 className="card-title mb-0">Personal Information</h2>
      </div>
      <div className="card-body">
        <p className="card-text">Full Name: {appointment.fullName}</p>
        <p className="card-text">Date of Birth: {appointment.dob}</p>
        <p className="card-text">Gender: {appointment.gender}</p>
      </div>
    </div>
  );
};

const ContactInformation = ({ appointment }) => {
  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-warning">
        <h2 className="card-title mb-0">Contact Information</h2>
      </div>
      <div className="card-body">
        <p className="card-text">Contact Number: {appointment.contactNumber}</p>
        <p className="card-text">Email: {appointment.email}</p>
        <p className="card-text">Address: {appointment.address}</p>
      </div>
    </div>
  );
};

const AppointmentDetailsCard = ({ appointment }) => {
  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-warning">
        <h2 className="card-title mb-0">Appointment Details</h2>
      </div>
      <div className="card-body">
        <p className="card-text">
          Reason for Appointment: {appointment.reasonForAppointment}
        </p>
        <p className="card-text">Preferred Date: {appointment.preferredDate}</p>
        <p className="card-text">Preferred Time: {appointment.preferredTime}</p>
        <p className="card-text">Appointment Type: {appointment.appointmentType}</p>
        <p className="card-text">Preferred Provider: {appointment.preferredProvider}</p>
      </div>
    </div>
  );
};

const InsuranceDetailsCard = ({ appointment }) => {
  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-warning">
        <h2 className="card-title mb-0">Insurance Details</h2>
      </div>
      <div className="card-body">
        <p className="card-text">
          Insurance Provider: {appointment.insuranceProvider}
        </p>
        <p className="card-text">Policy Number: {appointment.policyNumber}</p>
      </div>
    </div>
  );
};

const MedicalHistoryCard = ({ appointment }) => {
  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-warning">
        <h2 className="card-title mb-0">Medical History</h2>
      </div>
      <div className="card-body">
        <p className="card-text">Medical History: {appointment.medicalHistory}</p>
        <p className="card-text">Current Medications: {appointment.currentMedications}</p>
        <p className="card-text">Allergies: {appointment.allergies}</p>
        <p className="card-text">Chronic Conditions: {appointment.chronicConditions}</p>
        <p className="card-text">Past Surgeries: {appointment.pastSurgeries}</p>
      </div>
    </div>
  );
};

const EmergencyContactCard = ({ appointment }) => {
  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-warning">
        <h2 className="card-title mb-0">Emergency Contact</h2>
      </div>
      <div className="card-body">
        <p className="card-text">Name: {appointment.name}</p>
        <p className="card-text">Relationship: {appointment.relationship}</p>
        <p className="card-text">Phone: {appointment.phone}</p>
      </div>
    </div>
  );
};

const Spinner = () => {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default AdminAppointmentDetails;