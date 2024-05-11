import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AdminUpdate = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
  });

  const { id } = useParams();
  const { AuthorizationToken } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
        method: 'GET',
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: AuthorizationToken,
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        toast.success('Updated Successfully');
      } else {
        toast.error('Not updated...');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div className="container-fluid m-4 p-4">
      <div className="row">
        <div className="col-md-8 col-lg-4 col-sm-12 border rounded-4 p-4">
          <h1 className="text-center text-primary">Update User Data</h1>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Username"
              type="text"
              name="username"
              value={user.username}
              onChange={handleInput}
              required
            />
            <InputField
              label="Email address"
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
              required
            />
            <InputField
              label="Phone Number"
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleInput}
              required
            />
            <button
              type="submit"
              className="btn btn-primary w-75 d-block mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="form-control"
        id={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete="off"
      />
    </div>
  );
};

export default AdminUpdate;