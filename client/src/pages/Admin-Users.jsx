import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
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
      console.log(error)
    }
  };
  useEffect(() => {
    getAllUsersData();
  }, []);
  return (
    <>
      <div className="container">
        <table className="table shadow table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
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
                    <button className="btn btn-warning">Edit</button>
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
