import * as React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { MdDelete } from "react-icons/md";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useAuth } from "../store/auth";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff", // Bootstrap primary color
    },
    error: {
      main: "#d32f2f",
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "#007bff",
          color: "#fff",
        },
      },
    },
  },
});

function Row(props) {
  const { row, deleteBooking } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" }, "&:hover": { backgroundColor: "#d9eaff" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.contact}</TableCell>
        <TableCell>{row.locality}</TableCell>
        <TableCell>
          {new Date(row.appointmentDate).toLocaleDateString()}
        </TableCell>
        <TableCell>{row.testName}</TableCell>
        <TableCell>{row.paymentId}</TableCell>
        <TableCell>{new Date(row.createdAt).toLocaleDateString()}</TableCell>
        <TableCell>
          <IconButton color="error" onClick={() => deleteBooking(row._id)}>
            <MdDelete />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 0 }}>
              <Typography variant="h6" gutterBottom component="div">
                Booking Details
              </Typography>
              <Table size="small" aria-label="details">
                <TableBody>
                  <TableRow>
                    <TableCell>User ID</TableCell>
                    <TableCell>{row.userId}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Test ID</TableCell>
                    <TableCell>{row.testId}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>{row.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gender</TableCell>
                    <TableCell>{row.gender}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Date of Birth</TableCell>
                    <TableCell>
                      {new Date(row.dateOfBirth).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Address</TableCell>
                    <TableCell>{`${row.houseNo}, ${row.pincode}, ${row.cityState}`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Address Type</TableCell>
                    <TableCell>{row.addressType}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Appointment Time</TableCell>
                    <TableCell>{row.appointmentTime}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Instructions</TableCell>
                    <TableCell>{row.instructions}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    testId: PropTypes.string.isRequired,
    testName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    locality: PropTypes.string.isRequired,
    houseNo: PropTypes.string.isRequired,
    pincode: PropTypes.string.isRequired,
    cityState: PropTypes.string.isRequired,
    addressType: PropTypes.string.isRequired,
    appointmentDate: PropTypes.string.isRequired,
    appointmentTime: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    paymentId: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  deleteBooking: PropTypes.func.isRequired,
};

const API_ENDPOINTS = {
  getTests: "http://localhost:5000/api/admin/labtestbookings",
  deleteTest: (id) =>
    `http://localhost:5000/api/admin/labtestbooking/delete/${id}`,
};

const AdminLabTestBookings = () => {
  const [bookings, setBookings] = useState([]);

  const { AuthorizationToken } = useAuth();

  const fetchBookings = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.getTests, {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setBookings(data);
      }
    } catch (error) {
      console.log("Error at fetching booking in the admin panel");
      console.error(error);
    }
  };

  const handleDeleteTest = async (id) => {
    try {
      const response = await fetch(API_ENDPOINTS.deleteTest(id), {
        method: "DELETE",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        fetchBookings();
      }
    } catch (error) {
      console.log("Error in the admin Lab test booking");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} sx={{ marginTop: 0 }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Patient Name</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Locality</TableCell>
              <TableCell>Appointment Date</TableCell>
              <TableCell>Test Name</TableCell>
              <TableCell>Payment ID</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <Row
                key={booking._id}
                row={booking}
                deleteBooking={() => handleDeleteTest(booking._id)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default AdminLabTestBookings;
