import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Importing Navbar1 and its all pages
import Navbar1 from "./components/Navbar1";

import Home from "./pages/Home";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";
import Appointment from "./pages/Appointment";
import Emergency from "./pages/Emergency";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import Error from "./pages/Error";
// Importing Navbar2 and all its pages
import Navbar2 from "./components/Navbar2";
import BloodTest from "./pages/BloodTest";
import DoctorConsultation from "./pages/DoctorConsultation";
import GeneticTesting from "./pages/GeneticTesting";
import Xray from "./pages/Xray";
import Surgery from "./pages/Surgery";
import Supplement from "./pages/Supplement";
import Offers from "./pages/Offers";
import HealthTips from "./pages/HealthTips";

// importing Footer of the website
import Footer from "./components/Footer";

// importing the user dashboard
import UserDashboard from "./pages/UserDashboard";
import Profile from "./components/UserDashboard/Profile";

// importing the admin panel
import Admin_Layout from "./components/AdminPanel/Admin_Layout";
import AdminUsers from "./pages/Admin-Users";
import AdminContacts from "./pages/Admin-Contacts";
import AdminAppointments from "./pages/Admin-Appointments";
import AdminUpdate from "./pages/AdminUpdate";
import AdminAppointmentDetails from "./pages/AdminAppointment-Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        <Navbar2 />

        <Routes>
          {/* Navbar 1 Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />

          {/* Navbar 2 Routes */}
          <Route path="/bloodtest" element={<BloodTest />} />
          <Route path="/xray" element={<Xray />} />
          <Route path="/genetictesting" element={<GeneticTesting />} />
          <Route path="/doctorconsultation" element={<DoctorConsultation />} />
          <Route path="/surgery" element={<Surgery />} />
          <Route path="/supplement" element={<Supplement />} />
          <Route path="healthtips" element={<HealthTips />} />
          <Route path="offers" element={<Offers />} />

          {/* User Dashboard Route */}
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/profile" element={<Profile />} />

          {/* Admin Panel */}
          <Route path="/admin" element={<Admin_Layout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="appointments" element={<AdminAppointments />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
            <Route
              path="appointments/:id"
              element={<AdminAppointmentDetails />}
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
