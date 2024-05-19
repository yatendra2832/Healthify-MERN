// BookTest.js
import React, { useEffect, useState } from "react";
import BookingForm from "../components/Test&Scans/BookingForm";
import TestsPayment from "../components/Test&Scans/TestsPayment";
import useCheckout from "../hooks/Checkout";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";

const locations = [
  { value: "Noida", label: "Noida" },
  { value: "Ghaziabad", label: "Ghaziabad" },
  { value: "Greater Noida", label: "Greater Noida" },
  { value: "Meerut", label: "Meerut" },
  { value: "Agra", label: "Agra" },
  { value: "Mathura", label: "Mathura" },
  { value: "Aligarh", label: "Aligarh" },
  { value: "Bulandshahr", label: "Bulandshahr" },
  { value: "Hapur", label: "Hapur" },
  { value: "Moradabad", label: "Moradabad" },
  { value: "Saharanpur", label: "Saharanpur" },
  { value: "Firozabad", label: "Firozabad" },
  { value: "Modinagar", label: "Modinagar" },
  { value: "Muzaffarnagar", label: "Muzaffarnagar" },
  { value: "Bijnor", label: "Bijnor" },
  { value: "Bareilly", label: "Bareilly" },
  { value: "Etawah", label: "Etawah" },
  { value: "Jhansi", label: "Jhansi" },
  { value: "Kanpur", label: "Kanpur" },
];

const BookTest = () => {
  const params = useParams();
  const [testData, setTestData] = useState("");
  const [testTypes, setTestTypes] = useState([]);
  const [value, setValue] = useState(0);
  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    patientName: "",
    phoneNumber: "",
    location: "",
    file: null,
    testType: "",
    date: "",
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

  const fetchTestdata = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/tests/${params.id}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setTestData(data);
        setTestTypes(
          data.typeOfTest.map((test) => ({ value: test, label: test }))
        );
      }
    } catch (error) {
      console.error("Error Occurs at Booking Test Form", error);
    }
  };

  useEffect(() => {
    fetchTestdata();
  }, []);

  const handleChange = (event, newValue) => {
    if (newValue === 1 && !isPaymentEnabled) {
      return;
    }
    setValue(newValue);
  };

  const handleContinue = () => {
    // Validation check
    if (
      formData.patientName.trim() === "" ||
      formData.phoneNumber.trim() === "" ||
      formData.location === "" ||
      formData.file === null ||
      formData.testType === "" ||
      formData.date === ""
    ) {
      alert("Please fill in all fields");
      return;
    }
    setIsPaymentEnabled(true);
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

      const response = await fetch(
        "http://localhost:5000/api/testbooking/booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSubmit),
        }
      );

      if (response.ok) {
        toast.success("Test Booking Submitted Successfully");
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
          <Tab label="Test Booking Form" />
          <Tab label="Payment" />
        </Tabs>
      </div>
      <Container maxWidth="sm">
        {" "}
        {/* Use "sm" string for the maxWidth */}
        <Box sx={{ padding: 2 }}>
          {value === 0 && (
            <Paper elevation={3} sx={{ padding: 2 }}>
              <h1 className="text-primary">Booking {testData.title}</h1>
              <BookingForm
                formData={formData}
                handleFormChange={handleFormChange}
                handleContinue={handleContinue}
                locations={locations}
                testTypes={testTypes}
              />
            </Paper>
          )}
          {value === 1 && (
            <div>
              <h1 className="text-primary text-center">Payment</h1>
              <TestsPayment
                amount={500}
                checkoutHandler={(amount) =>
                  checkoutHandler(amount, handlePaymentSuccess)
                }
                testName={formData.testType}
              />
            </div>
          )}
        </Box>
      </Container>
    </>
  );
};

export default BookTest;
