import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";

const AdminAppointmentDetails = () => {
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
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
        console.error("Error fetching appointment:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [AuthorizationToken, params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!appointment) {
    return <div>Appointment not found.</div>;
  }

  return (
    <div className="container">
      <h1 className="mb-4 text-primary text-center">
        Admin Appointment Details
      </h1>

      {/* Personal Information */}
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

      {/* Contact Information */}
      <div className="card mb-4">
        <div className="card-header bg-primary  text-warning">
          <h2 className="card-title mb-0">Contact Information</h2>
        </div>
        <div className="card-body">
          <p className="card-text">
            Contact Number: {appointment.contactNumber}
          </p>
          <p className="card-text">Email: {appointment.email}</p>
          <p className="card-text">Address: {appointment.address}</p>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="card mb-4">
        <div className="card-header bg-primary  text-warning">
          <h2 className="card-title mb-0">Appointment Details</h2>
        </div>
        <div className="card-body">
          <p className="card-text">
            Reason for Appointment: {appointment.reasonForAppointment}
          </p>
          <p className="card-text">
            Preferred Date: {appointment.preferredDate}
          </p>
          <p className="card-text">
            Preferred Time: {appointment.preferredTime}
          </p>
          <p className="card-text">
            Appointment Type: {appointment.appointmentType}
          </p>
          <p className="card-text">
            Preferred Provider: {appointment.preferredProvider}
          </p>
        </div>
      </div>

      {/* Insurance Details */}
      <div className="card mb-4">
        <div className="card-header bg-primary  text-warning">
          <h2 className="card-title mb-0">Insurance Details</h2>
        </div>
        <div className="card-body">
          <p className="card-text">
            Insurance Provider: {appointment.insuranceProvider}
          </p>
          <p className="card-text">Policy Number: {appointment.policyNumber}</p>
        </div>
      </div>

      {/* Medical History */}
      <div className="card mb-4">
        <div className="card-header bg-primary  text-warning">
          <h2 className="card-title mb-0">Medical History</h2>
        </div>
        <div className="card-body">
          <p className="card-text">
            Medical History: {appointment.medicalHistory}
          </p>
          <p className="card-text">
            Current Medications: {appointment.currentMedications}
          </p>
          <p className="card-text">Allergies: {appointment.allergies}</p>
          <p className="card-text">
            Chronic Conditions: {appointment.chronicConditions}
          </p>
          <p className="card-text">
            Past Surgeries: {appointment.pastSurgeries}
          </p>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="card mb-4">
        <div className="card-header bg-primary  text-warning">
          <h2 className="card-title mb-0">Emergency Contact</h2>
        </div>
        <div className="card-body">
          <p className="card-text">Name: {appointment.name}</p>
          <p className="card-text">Relationship: {appointment.relationship}</p>
          <p className="card-text">Phone: {appointment.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminAppointmentDetails;
