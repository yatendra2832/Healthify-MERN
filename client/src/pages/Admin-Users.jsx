import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa';

const API_ENDPOINTS = {
  getUsers: 'http://localhost:5000/api/admin/users',
  deleteUser: (id) => `http://localhost:5000/api/admin/users/delete/${id}`,
};

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { AuthorizationToken } = useAuth();

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.getUsers, {
        method: 'GET',
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      // Handle error more robustly, e.g., display error message to user
      console.error(error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(API_ENDPOINTS.deleteUser(id), {
        method: 'DELETE',
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        fetchUsers();
      }
    } catch (error) {
      // Handle error more robustly, e.g., display error message to user
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="table-responsive px-4 mx-4">
      <table className="table shadow table-striped">
        <thead>
          <tr>
            <th>
              Name <FaRegUserCircle className="fs-5 mx-1" />{' '}
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
          {users.map((user, index) => (
            <UserRow
              key={index}
              user={user}
              onDelete={() => handleDeleteUser(user._id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UserRow = ({ user, onDelete }) => (
  <tr>
    <td>{user.username}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
    <td>
      <Link to={`/admin/users/${user._id}/edit`}>
        <button className="btn btn-warning">Edit</button>
      </Link>
    </td>
    <td>
      <button className="btn btn-danger" onClick={onDelete}>
        Delete
      </button>
    </td>
  </tr>
);

export default AdminUsers;