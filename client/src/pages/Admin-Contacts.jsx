import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

import { MdDeleteForever } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { FaInfoCircle } from "react-icons/fa";

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
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        getAllContactsData();
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
                Message
                <MdMessage className="fs-5 mx-1" />
              </th>
              <th>Reason <FaInfoCircle className="fs-5 mx-1" /></th>
              <th>
                Attachments <GrAttachment className="fs-5 mx-1" />
              </th>
              <th>
                Delete <MdDeleteForever className="fs-5 mx-1" />
              </th>
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
