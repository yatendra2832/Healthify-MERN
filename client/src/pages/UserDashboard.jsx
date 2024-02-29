import React from "react";
import UserDashboardCard from "../components/Card/UserDashboardCard";
import { useAuth } from "../store/auth";
const UserDashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <h1 className="text-center text-primary fw-bold">User Dashboard</h1>
      <div className="d-flex justify-content-center">
       <p className=" border  border-3 shadow-sm border-light shadow-warning rounded-5 px-4  fs-4  "> Welcome {user.username}</p>
      </div>
      <div>
        {/* Row 1 */}
        <div className="container px-2 py-2" id="featured-3">
          <div className="row g-4">
            <div className="col col-md-6 col-lg-4">
              <UserDashboardCard
                imageSrc="/images/userDashboard/my-booking.png"
                altText="my booking"
                title="My Bookings"
              />
            </div>{" "}
            <div className="col col-md-6 col-lg-4">
              <UserDashboardCard
                imageSrc="/images/userDashboard/report_icon.png"
                altText="my report"
                title="My Reports"
              />
            </div>
            <div className="col col-md-6 col-lg-4">
              <UserDashboardCard
                imageSrc="/images/userDashboard/wallet-svg-2.svg"
                altText="my report"
                title="Healthify Wallets"
              />
            </div>
            <div className="col col-md-6 col-lg-4">
              <UserDashboardCard
                imageSrc="/images/userDashboard/my-family.png"
                altText="my report"
                title="My Family and Friends"
              />
            </div>
            <div className="col col-md-6 col-lg-4">
              <UserDashboardCard
                imageSrc="/images/userDashboard/mange-adress.png"
                altText="manageAddress"
                title="Manage Address"
              />
            </div>
            <div className="col col-md-6 col-lg-4">
              <UserDashboardCard
                imageSrc="/images/userDashboard/healthkarma.png"
                altText="Health Karma"
                title="Health karma"
              />
            </div>
            <div className="col col-md-6 col-lg-4">
              <UserDashboardCard
                imageSrc="/images/userDashboard/report_icon.png"
                altText="My Policy"
                title="My policy"
              />
            </div>
            <div className="col col-md-6 col-lg-4">
              <UserDashboardCard
                imageSrc="/images/userDashboard/db_diet.jpg"
                altText="Diet Planner"
                title="Diet Planner"
              />
            </div>
            <div className="col col-md-6 col-lg-4">
              <UserDashboardCard
                imageSrc="/images/userDashboard/doctor-consult--1.png"
                altText="MyDoctorAppointment"
                title="My Doctor Appointment"
              />
            </div>
            <div className="col col-md-6 col-lg-4">
              <UserDashboardCard
                imageSrc="/images/userDashboard/refer-earn.png"
                altText="refer-earn"
                title="Refer & Earn"
              />
            </div>
            <div className="col col-md-6 col-lg-4">
              {" "}
              <UserDashboardCard
                imageSrc="/images/userDashboard/sip-icon-dashboard.png"
                altText=""
                title="MY SHPP"
              />
            </div>
            <div className="col col-md-6 col-lg-4">
              {" "}
              <UserDashboardCard
                imageSrc="/images/userDashboard/help-feed.png"
                altText="help-feed"
                title="Help & Feedback"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
