// BookTest.js
import React, { useEffect, useState } from "react";
import TestsPayment from "../Test&Scans/TestsPayment";
import useCheckout from "../../hooks/Checkout";
import { toast } from "react-toastify";
import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import BloodSampleCollectionForm from "./BloodSampleCollectionForm";

const BookBloodTest = () => {
  const params = useParams();
  const [testData, setTestData] = useState("");
  const [value, setValue] = useState(0);
  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);

  const navigate = useNavigate();

  const testName = testData.testName;
  const [formData, setFormData] = useState({
    testId: "", // New field
    testName: "", // New field
    userId: "",
    name: "",
    contact: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    locality: "",
    houseNo: "",
    pincode: "",
    cityState: "",
    addressType: "Home",
    appointmentDate: "",
    appointmentTime: "",
    instructions: "",
  });

  const { checkoutHandler } = useCheckout();
  const { user } = useAuth();

  // Update formData.userId when user changes
  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        userId: user._id,
      }));
    }
  }, [user]);

  const fetchTestData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/labtestcards/${params.id}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setTestData(data);
        setFormData((prevData) => ({
          ...prevData,
          testId: data._id,
          testName: data.testName,
        }));
      }
    } catch (error) {
      console.error(
        "Error in fetchig the test details at labt test booking:",
        error
      );
    }
  };

  useEffect(() => {
    fetchTestData();
  }, []);

  const handleChange = (event, newValue) => {
    if (newValue === 1 && !isPaymentEnabled) {
      return;
    }
    setValue(newValue);
  };

  const handleContinue = () => {
    if (
      formData.name.trim() === "" ||
      formData.contact.trim() === "" ||
      formData.email.trim() === "" ||
      formData.gender === "" ||
      formData.dateOfBirth === "" ||
      formData.locality.trim() === "" ||
      formData.houseNo.trim() === "" ||
      formData.pincode.trim() === "" ||
      formData.cityState.trim() === "" ||
      formData.addressType === "" ||
      formData.appointmentDate === "" ||
      formData.appointmentTime === "" ||
      formData.instructions.trim() === ""
    ) {
      alert("Please fill in all fields ");
      return;
    }
    setIsPaymentEnabled(true); // Enable payment
    setValue(1);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaymentSuccess = async (paymentId) => {
    try {
      // Append paymentId to the existing form data object
      const formDataToSubmit = {
        ...formData,
        paymentId,
      };

      const response = await fetch("http://localhost:5000/api/labtestbooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSubmit),
      });

      if (response.ok) {
        const data = await response.json();
        const details = await data.data;
        // console.log(details);
        // Send SMS
        const phoneNumber = "+918750145379"; // Replace with user's phone number in E.164 format
        const message = `Hi ${details.name}, your ${details.testName} blood test is booked for ${details.appointmentDate} at Healthify. Call +91 8750145379 / 89 / 99 for queries. Test ID: ${details._id}. Thank you!`;

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
        toast.success("Test Booking Submitted Successfully");
        navigate("/bloodtest");
      } else {
        alert("Failed to submit form data after payment.");
      }
    } catch (error) {
      console.error("Error during form submission after payment", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab label="Home Sample Collection Form" />
          <Tab label="Payment" />
        </Tabs>
      </div>
      <Container maxWidth="sm">
        {" "}
        {/* Use "sm" string for the maxWidth */}
        <Box>
          {value === 0 && (
            <Paper elevation={3} sx={{ padding: 2 }}>
              <h3 className="text-primary fst-italic">Booking {testName}</h3>

              <BloodSampleCollectionForm
                formData={formData}
                handleChange={handleFormChange}
                handleContinue={handleContinue}
              />
            </Paper>
          )}
          {value === 1 && (
            <div>
              <h1 className="text-primary text-center">Payment</h1>
              <TestsPayment
                amount={testData.discountedPrice}
                checkoutHandler={(amount) =>
                  checkoutHandler(
                    amount,
                    handlePaymentSuccess,
                    testData.testName
                  )
                }
                testName={testData.testName}
              />
            </div>
          )}
        </Box>
      </Container>
    </>
  );
};

export default BookBloodTest;
