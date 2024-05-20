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
import { FaRegUserCircle } from "react-icons/fa";
import { MdContacts, MdDelete } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { VscGroupByRefType } from "react-icons/vsc";
import { IoLocation } from "react-icons/io5";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";

import { useAuth } from "../store/auth";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff", // Bootstrap primary color
    },
  },
});

function Row(props) {
  const { row, deleteBooking } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
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
          {row.patientName}
        </TableCell>
        <TableCell>{row.phoneNumber}</TableCell>
        <TableCell>{row.location}</TableCell>
        <TableCell>{new Date(row.date).toLocaleDateString()}</TableCell>
        <TableCell>{row.testType}</TableCell>
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
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Booking Details
              </Typography>
              <Table size="small" aria-label="details">
                <TableBody>
                  <TableRow>
                    <TableCell>Booking ID</TableCell>
                    <TableCell>{row._id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>User ID</TableCell>
                    <TableCell>{row.userId}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    patientName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    testType: PropTypes.string.isRequired,
    paymentId: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  deleteBooking: PropTypes.func.isRequired,
};

const API_ENDPOINTS = {
  getTests: "http://localhost:5000/api/admin/testbookings",
  deleteTest: (id) =>
    `http://localhost:5000/api/admin/testbooking/delete/${id}`,
};

const AdminTestBookings = () => {
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
      console.log("Error at fetching booking in the  admin panel");
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
      // Handle error more robustly, e.g., display error message to user
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const deleteBooking = (id) => {
    setBookings(bookings.filter((booking) => booking._id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ backgroundColor: "primary.main", color: "white" }}
              />
              <TableCell
                sx={{ backgroundColor: "primary.main", color: "white" }}
              >
                Patient Name
                <FaRegUserCircle className="fs-5 mx-1" />
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "primary.main", color: "white" }}
              >
                Contact
                <MdContacts className="fs-5 mx-1" />
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "primary.main", color: "white" }}
              >
                Location
                <IoLocation className="fs-5 mx-1"/>
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "primary.main", color: "white" }}
              >
                Test Date
                <CiCalendarDate className="fs-5 mx-1" />
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "primary.main", color: "white" }}
              >
                Test Type
                <VscGroupByRefType className="fs-5 mx-1" />
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "primary.main", color: "white" }}
              >
                Payment ID
                <FaFileInvoiceDollar className="fs-5 mx-1" />
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "primary.main", color: "white" }}
              >
                Created At
                <CiCalendarDate className="fs-5 mx-1" />
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "primary.main", color: "white" }}
              >
                Actions
              </TableCell>
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

export default AdminTestBookings;
