import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

import { CiCalendarDate } from "react-icons/ci";
import { IoTime } from "react-icons/io5";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { VscGroupByRefType } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const AppointmentTableHeader = () => (
  <thead>
    <tr>
      <th>
        Patient Name/Gender
        <FaRegUserCircle className="fs-5 mx-1" />{" "}
      </th>
      <th>
        Contact <MdContacts className="fs-5 mx-1" />
      </th>
      <th>
        Date
        <CiCalendarDate className="fs-5 mx-1" />
        /Time
        <IoTime className="fs-5 mx-1" />
      </th>
      <th>
        Reason <FaInfoCircle className="fs-5 mx-1" />
      </th>
      <th>
        Appointment Type
        <VscGroupByRefType className="fs-5 mx-1" />
      </th>
      <th>Actions</th>
    </tr>
  </thead>
);

const AppointmentTableRow = ({ appointment, onDelete }) => (
  <tr key={appointment._id}>
    <td>
      {appointment.fullName}
      {"/" + appointment.gender}
    </td>
    <td>{appointment.contactNumber}</td>
    <td>
      {appointment.preferredDate + "/"}+{appointment.preferredTime}
    </td>
    <td>{appointment.reasonForAppointment}</td>
    <td>{appointment.appointmentType}</td>
    <td>
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-danger"
          onClick={() => onDelete(appointment._id)}
        >
          Delete <MdDelete className="fs-5 mx-1" />
        </button>
        <Link to={`/admin/appointments/${appointment._id}`}>
          <button className="btn btn-info">
            View Details
            <MdOutlineUnfoldMore className="fs-5 mx-1" />
          </button>
        </Link>
      </div>
    </td>
  </tr>
);

const AdminAppointments = () => {
  const { AuthorizationToken } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllAppointmentsData = async () => {
    try {
      setLoading(true);
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
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const deleteAppointment = async (id) => {
    try {
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
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllAppointmentsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (appointments.length === 0) {
    return <div>No appointments found.</div>;
  }

  return (
    <div className="table-responsive px-4 mx-4">
      <table className="table shadow table-striped">
        <AppointmentTableHeader />
        <tbody>
          {appointments.map((appointment) => (
            <AppointmentTableRow
              key={appointment._id}
              appointment={appointment}
              onDelete={deleteAppointment}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAppointments;