import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { AuthorizationToken } = useAuth();

  // getting all users data
  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsersData();
  }, []);
  return (
    <>
      <div className="table-responsive px-4 mx-4">
        <table className="table shadow table-striped">
          <thead>
            <tr>
              <th>
                Name <FaRegUserCircle className="fs-5 mx-1" />{" "}
              </th>
              <th>
                Email <MdEmail className="fs-5 mx-1" />
              </th>
              <th>
                Phone
                <FaPhoneAlt className="fs-5 mx-1" />
              </th>
              <th>
                Edit <FaEdit className="fs-5 mx-1" />
              </th>
              <th>
                Delete <MdDeleteForever className="fs-5 mx-1" />
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser, index) => {
              return (
                <tr key={index}>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.phone}</td>
                  <td>
                    <Link to={`/admin/users/${curUser._id}/edit`}>
                      <button className="btn btn-warning">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(curUser._id)}
                    >
                      Delete
                    </button>
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

export default AdminUsers;
