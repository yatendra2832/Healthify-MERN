import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import MyTestBookingDetails from "../components/UserDashboard/MyBookings/MyTestBookingdetails";
import MyLabTestBookingDetails from "../components/UserDashboard/MyBookings/MyLabTestBookingDetails";
import MyAppointmentDetails from "../components/UserDashboard/MyBookings/MyAppointmentDetails";

const MyBookings = () => {
  const { AuthorizationToken } = useAuth();
  const [myAppointments, setMyAppointments] = useState([]);
  const [myTests, setMyTests] = useState([]);
  const [myLabtests, setMyLabtests] = useState([]);
  const getAppointmentData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/form/appointment",
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setMyAppointments(data);
        // console.log(data);
      }
    } catch (error) {
      console.log("Error at MyBookings : ", error.message);
    }
  };

  const getTest_ScanBookingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/testbooking/mytest",
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setMyTests(data);
      }
    } catch (error) {
      console.log("Error at MyBookings (Test): ", error.message);
    }
  };

  const getLabTestBookingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/labtestbooking/mytest",
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setMyLabtests(data);
      }
    } catch (error) {
      console.error(
        "Error in fetching the details of the labtest booking in booking.jsx: ",
        error
      );
    }
  };
  useEffect(() => {
    getAppointmentData();
    getTest_ScanBookingData();
    getLabTestBookingData();
  }, []);

  return (
    <>
      <div className="container mt-4 ">
        {myAppointments.length > 0 ||
        myTests.length > 0 ||
        myLabtests.length > 0 ? (
          <h2 className="text-primary fw-bold text-center mb-4">
            Your Upcoming Appointments and Tests
          </h2>
        ) : (
          <div className="text-center">
            <h2 className="text-primary fw-bold mb-2">No Bookings Yet</h2>
            <p className="lead mb-4">
              You haven't scheduled any appointments or tests with us.
            </p>
            <p className="mb-4">
              Ready to take the next step in your healthcare journey?
            </p>
            <Link to={"/doctorconsultation"}>
              {" "}
              <p className="btn btn-primary ">Schedule Now</p>
            </Link>
          </div>
        )}

        {myAppointments.map((appointment, index) => (
          <MyAppointmentDetails
            key={index}
            appointment={appointment}
            index={index}
          />
        ))}

        {myTests.map((test, index) => (
          <MyTestBookingDetails key={index} test={test} index={index} />
        ))}

        {myLabtests.map((labtest, index) => (
          <MyLabTestBookingDetails key={index} labtest={labtest} index={index} />
        ))}
      </div>
    </>
  );
};

export default MyBookings;
