import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminAppointments = () => {
  const { AuthorizationToken } = useAuth();
  const [appointments, setAppointments] = useState([]);

  const getAllAppointmentsData = async () => {
    const response = await fetch(
      "http://localhost:5000/api/admin/appointments",
      {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      }
    );

    const data = await response.json();
    setAppointments(data);
  };

  const deleteAppointment = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/admin/appointments/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: AuthorizationToken,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      getAllAppointmentsData();
    }
  };

  useEffect(() => {
    getAllAppointmentsData();
  }, []);

  return (
    <>
      <div className="container">
        <table className="table shadow table-striped">
          <thead>
            <tr>
              <th>Patient Name/Gender</th>
              <th>Contact</th>
              <th>Date/Time</th>
              <th>Reason</th>
              <th>Appointment Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((curAppointment, index) => {
              return (
                <tr key={index}>
                  <td>
                    {curAppointment.fullName}
                    {"/" + curAppointment.gender}
                  </td>
                  <td>{curAppointment.contactNumber}</td>
                  <td>
                    {curAppointment.preferredDate + "/"}+
                    {curAppointment.preferredTime}
                  </td>
                  <td>{curAppointment.reasonForAppointment}</td>
                  <td>{curAppointment.appointmentType}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      {/* Add buttons for actions like edit, delete, or view details */}
                      <button className="btn btn-warning">Edit</button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteAppointment(curAppointment._id)}
                      >
                        Delete
                      </button>
                      <button className="btn btn-info">View Details</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminAppointments;
