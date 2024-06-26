// Appointment.js
import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import useCheckout from "../hooks/Checkout";
import axios from "axios";

// import for the components
import AppointmentForm from "../components/AppointmentForm/AppointmentForm";
import PaymentForm from "../components/Payment/PaymentForm";

// import the MUI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Appointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [amount, setAmount] = useState("");
  const { user } = useAuth();
  const { checkoutHandler } = useCheckout();
  const params = useParams();
  const [value, setValue] = useState(0); // State for the currently selected tab

  // Fetch doctor's data by ID
  const fetchDoctor = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/doctor/doctorsdata/${params.id}`
      );
      if (response.ok) {
        const data = await response.json();
        setSelectedDoctor(data);
        setAmount(data.consultationFees);
        setAppointment((prevState) => ({
          ...prevState,
          preferredProvider: data.doctorName,
        }));
      }
    } catch (error) {
      console.log("Error fetching doctor's data:", error);
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id) {
      fetchDoctor();
    } else {
      setSelectedDoctor(null);
    }
  }, [params.id]);

  // Handling the appointment form submission
  const [appointment, setAppointment] = useState({
    userId: "",
    fullName: "",
    dob: "",
    gender: "", // You can set a default value

    // contactInformation
    contactNumber: "",
    email: "",
    address: "",

    // appointmentDetails
    reasonForAppointment: "",
    preferredDate: "",
    preferredTime: "",
    appointmentType: "", // You can set a default value
    preferredProvider: "",

    // insuranceDetails
    insuranceProvider: "",
    policyNumber: "",

    medicalHistory: "",
    currentMedications: "",
    allergies: "",
    chronicConditions: "",
    pastSurgeries: "",

    // emergencyContact
    name: "",
    relationship: "",
    phone: "",

    cancellationPolicy: false,
  });

  const handleInput = useCallback((event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setAppointment((prevState) => ({ ...prevState, [name]: newValue }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = user._id;
    try {
      const response = await fetch(
        "http://localhost:5000/api/form/appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...appointment, userId }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        toast.success("Appointment Form Submitted successfully");

        // Send SMS
        const phoneNumber = "+918750145379"; // Replace with user's phone number in E.164 format
        const message = `Your appointment on ${data.preferredDate} at ${data.preferredTime} with ${data.preferredProvider} at Healthify has been confirmed. Call +91 8750145379/89/99 for any queries. AppointmentId:${data._id}`;

        await fetch("http://localhost:5000/api/sendsms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber,
            message,
          }),
        });
        setValue(1); // Switch to the payment tab after successful form submission
        setAppointment({
          fullName: "",
          dob: "",
          gender: "", // You can set a default value

          // contactInformation
          contactNumber: "",
          email: "",
          address: "",

          // appointmentDetails
          reasonForAppointment: "",
          preferredDate: "",
          preferredTime: "",
          appointmentType: "", // You can set a default value
          preferredProvider: "",

          // insuranceDetails
          insuranceProvider: "",
          policyNumber: "",

          medicalHistory: "",
          currentMedications: "",
          allergies: "",
          chronicConditions: "",
          pastSurgeries: "",

          // emergencyContact
          name: "",
          relationship: "",
          phone: "",

          cancellationPolicy: false,
        });
      }
      console.log(response);
    } catch (error) {
      toast.error("Error from the appointment form", error);
    }
  };

  // Handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <h2 className="mt-4 text-primary  text-center">
        <strong className=" border-4 border-bottom p-2 rounded-5 border-warning fst-italic ">
          Medical Appointment Form
        </strong>{" "}
      </h2>{" "}
      <div className="container w-100">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab label="Appointment Form" />
          <Tab label="Payment" />
        </Tabs>
        {value === 0 && (
          <div>
            <AppointmentForm
              appointment={appointment}
              handleInput={handleInput}
              handleSubmit={handleSubmit}
              selectedDoctor={selectedDoctor}
            />
          </div>
        )}
        {value === 1 && (
          <PaymentForm
            amount={amount}
            checkoutHandler={checkoutHandler}
            selectedDoctor={selectedDoctor}
          />
        )}
      </div>
    </>
  );
};

export default Appointment;
