// UserDashboard.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import UserDashboardCard from "../components/Card/UserDashboardCard";
import { Container, Grid, Typography, Box, Paper } from "@mui/material";
import BookingsIcon from "@mui/icons-material/EventNote";
import ReportsIcon from "@mui/icons-material/Assessment";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FamilyIcon from "@mui/icons-material/People";
import AddressIcon from "@mui/icons-material/Home";
import HealthKarmaIcon from "@mui/icons-material/HealthAndSafety";
import PolicyIcon from "@mui/icons-material/Policy";
import DietPlannerIcon from "@mui/icons-material/FitnessCenter";
import DoctorAppointmentIcon from "@mui/icons-material/LocalHospital";
import ReferEarnIcon from "@mui/icons-material/CardGiftcard";
import SHPPIcon from "@mui/icons-material/Store";
import HelpFeedbackIcon from "@mui/icons-material/HelpOutline";

const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <Container
      sx={{
        mt: 4,
        backgroundColor: "#f5f5f5",
        px: 4,
        py: 4,
        borderRadius: 2,
        fontStyle: "italic",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        align="center"
        color="primary"
        gutterBottom
      >
        User Dashboard
      </Typography>
      <Box display="flex" justifyContent="center" mb={4}>
        <Paper
          elevation={3}
          sx={{ p: 2, borderRadius: 2, textAlign: "center", maxWidth: "500px" }}
        >
          <Typography variant="h5">Welcome, {user.username}</Typography>
        </Paper>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/userdashboard/mybookings" className="text-decoration-none">
            <UserDashboardCard
              imageSrc="/images/userDashboard/my-booking.png"
              altText="my booking"
              title="My Bookings"
              icon={BookingsIcon}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserDashboardCard
            imageSrc="/images/userDashboard/report_icon.png"
            altText="my report"
            title="My Reports"
            icon={ReportsIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link
            to={`/userdashboard/wallet/${user._id}`}
            className="text-decoration-none"
          >
            <UserDashboardCard
              imageSrc="/images/userDashboard/wallet-svg-2.svg"
              altText="my wallet"
              title="Healthify Wallets"
              icon={WalletIcon}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserDashboardCard
            imageSrc="/images/userDashboard/my-family.png"
            altText="my family"
            title="My Family and Friends"
            icon={FamilyIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserDashboardCard
            imageSrc="/images/userDashboard/mange-adress.png"
            altText="manage address"
            title="Manage Address"
            icon={AddressIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserDashboardCard
            imageSrc="/images/userDashboard/healthkarma.png"
            altText="Health Karma"
            title="Health Karma"
            icon={HealthKarmaIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserDashboardCard
            imageSrc="/images/userDashboard/report_icon.png"
            altText="my policy"
            title="My Policy"
            icon={PolicyIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserDashboardCard
            imageSrc="/images/userDashboard/db_diet.jpg"
            altText="Diet Planner"
            title="Diet Planner"
            icon={DietPlannerIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserDashboardCard
            imageSrc="/images/userDashboard/doctor-consult--1.png"
            altText="My Doctor Appointment"
            title="My Doctor Appointment"
            icon={DoctorAppointmentIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserDashboardCard
            imageSrc="/images/userDashboard/refer-earn.png"
            altText="refer-earn"
            title="Refer & Earn"
            icon={ReferEarnIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserDashboardCard
            imageSrc="/images/userDashboard/sip-icon-dashboard.png"
            altText="MY SHPP"
            title="MY SHPP"
            icon={SHPPIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserDashboardCard
            imageSrc="/images/userDashboard/help-feed.png"
            altText="help-feed"
            title="Help & Feedback"
            icon={HelpFeedbackIcon}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDashboard;
