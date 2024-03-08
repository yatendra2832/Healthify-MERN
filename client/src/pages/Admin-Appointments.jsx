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
      <div className="table-responsive px-4 mx-4">
        <table className="table shadow table-striped">
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
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteAppointment(curAppointment._id)}
                      >
                        Delete <MdDelete className="fs-5 mx-1" />
                      </button>
                      <Link
                        to={`/admin/appointments/${curAppointment._id}`}
                      >
                        <button className="btn btn-info">
                          View Details
                          <MdOutlineUnfoldMore className="fs-5 mx-1" />
                        </button>
                      </Link>
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
