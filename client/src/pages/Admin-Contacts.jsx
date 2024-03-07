import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getAllContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response =await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization:AuthorizationToken
        },
      })

      const data = await response.json();
      if(response.ok){
        getAllContactsData()
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllContactsData();
  }, []);

  return (
    <>
      <div className="container">
        <table className="table shadow table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Reason</th>
              <th>Attachments</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((curContact, index) => {
              return (
                <tr key={index}>
                  <td>{curContact.username}</td>
                  <td>{curContact.email}</td>
                  <td>{curContact.phone}</td>
                  <td>{curContact.message}</td>
                  <td>{curContact.reason}</td>
                  <td>{curContact.attachments}</td>
                  <td>
                    <button className="btn btn-warning">Edit</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteContact(curContact._id)}
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

export default AdminContacts;
