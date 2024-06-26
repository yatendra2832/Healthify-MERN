import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Importing Navbar1 and its all pages
import Navbar1 from "./components/Layout/Navbar1";

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
import Navbar2 from "./components/Layout/Navbar2";
import BloodTest from "./pages/BloodTest";
import DoctorConsultation from "./pages/DoctorConsultation";
import Xray from "./pages/Xray";
import Surgery from "./pages/Surgery";
import Supplement from "./pages/Supplement";
import Offers from "./pages/Offers";
import HealthTips from "./pages/HealthTips";

// importing Footer of the website
import Footer from "./components/Layout/Footer";

// importing the user dashboard
import UserDashboard from "./pages/UserDashboard";
import Profile from "./components/UserDashboard/Profile";
import MyBookings from "./pages/MyBookings";

// importing the admin panel
import Admin_Layout from "./components/AdminPanel/Admin_Layout";
import AdminUsers from "./pages/Admin-Users";
import AdminContacts from "./pages/Admin-Contacts";
import AdminAppointments from "./pages/Admin-Appointments";
import AdminUpdate from "./pages/AdminUpdate";
import AdminAppointmentDetails from "./pages/AdminAppointment-Details";
import AdminTestbookings from "./pages/Admin-Testbookings";
//
import DoctorProfile from "./pages/DoctorProfile";

//
import PaymentSuccess from "./components/Payment/PaymentSuccess";
import AboutTest from "./components/Test&Scans/AboutTest";
import TermsCondition from "./pages/TermsCondition";

import ScrollToTop from "./components/Layout/ScrollToTop";
import BookTest from "./pages/BookTest";
import LabTestDetails from "./components/LabTest/LabTestDetails";
import BloodSampleCollectionForm from "./components/LabTest/BloodSampleCollectionForm";
import BookBloodTest from "./components/LabTest/BookBloodTest";
import AdminLabTestBookings from "./pages/AdminLabTestBooking";
import WalletComponent from "./components/UserDashboard/MyWallet/WalletComponent";
import SupplementDetails from "./components/Supplements/SupplementDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderPaymentSuccess from "./components/Cart/OrderPaymentSuccess";
import OrderConfirmation from "./components/Cart/OrderConfirmation";
import UserLocation from "./components/UserDashboard/UserLocation";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
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

          {/* Doctor Routes */}
          <Route path="/doctorconsultation/:id" element={<DoctorProfile />} />
          <Route path="/appointment/:id" element={<Appointment />} />

          {/* Navbar 2 Routes */}
          <Route path="/bloodtest" element={<BloodTest />} />
          <Route path="/tests" element={<Xray />} />
          <Route path="/doctorconsultation" element={<DoctorConsultation />} />
          <Route path="/surgery" element={<Surgery />} />
          <Route path="/supplement" element={<Supplement />} />
          <Route path="/healthtips" element={<HealthTips />} />
          <Route path="/offers" element={<Offers />} />

          {/* User Dashboard Route */}
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="userdashboard/mybookings" element={<MyBookings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userlocation" element={<UserLocation/>}/>
          <Route
            path="userdashboard/wallet/:userId"
            element={<WalletComponent />}
          />

          {/* Admin Panel */}
          <Route path="/admin" element={<Admin_Layout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="appointments" element={<AdminAppointments />} />
            <Route path="testbookings" element={<AdminTestbookings />} />
            <Route path="labtestbookings" element={<AdminLabTestBookings />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
            <Route
              path="appointments/:id"
              element={<AdminAppointmentDetails />}
            />
          </Route>

          <Route path="/paymentsuccess" element={<PaymentSuccess />} />

          {/* Tests Routes */}
          <Route path="/tests/:id" element={<AboutTest />} />
          <Route path="tests/booking/:id" element={<BookTest />} />
          <Route path="/terms&condition" element={<TermsCondition />} />

          {/* LabTest Routes */}
          <Route path="/bloodtest/:id" element={<LabTestDetails />} />
          <Route path="bloodtest/booking/:id" element={<BookBloodTest />} />

          {/* Supplement Routes */}
          <Route path="/supplement/:id" element={<SupplementDetails />} />
          <Route path="/cart/:userId" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderconfirmation" element={<OrderConfirmation />} />
          <Route
            path="/orderpaymentsuccess"
            element={<OrderPaymentSuccess />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
