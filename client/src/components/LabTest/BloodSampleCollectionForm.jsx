import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h5: {
      color: "#1976d2",
    },
    h6: {
      color: "#1976d2",
    },
  },
});

const BloodSampleCollectionForm = ({
  formData,
  handleChange,
  handleContinue,
}) => {
  const [expanded, setExpanded] = useState(null); // Define expanded state

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent="center" mt={1} mb={3}>
        <CardContent>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleAccordionChange("panel1")}
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" component="div">
                Patient Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contact Number"
                    name="contact"
                    value={formData.contact || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Gender"
                    name="gender"
                    value={formData.gender || ""}
                    onChange={handleChange}
                  >
                    <MenuItem value="">Select Gender</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Date of Birth"
                    name="dateOfBirth"
                    InputLabelProps={{ shrink: true }}
                    value={formData.dateOfBirth || ""}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Accordion 2 */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleAccordionChange("panel2")}
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" component="div">
                Add Sample Collection Address
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Locality"
                    name="locality"
                    value={formData.locality || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="House No. / Flat No. / Building / Landmark"
                    name="houseNo"
                    value={formData.houseNo || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Pincode"
                    name="pincode"
                    value={formData.pincode || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="City, State"
                    name="cityState"
                    value={formData.cityState || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Address Type"
                    name="addressType"
                    value={formData.addressType || ""}
                    onChange={handleChange}
                  >
                    <MenuItem value="Home">Home</MenuItem>
                    <MenuItem value="Work">Work</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          {/* Accordion 3 */}
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleAccordionChange("panel3")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" component="div">
                Add Sample Collection Date & Time
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Preferred Date for Sample Collection"
                    name="appointmentDate"
                    InputLabelProps={{ shrink: true }}
                    value={formData.appointmentDate || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Preferred Time Slot"
                    name="appointmentTime"
                    value={formData.appointmentTime || ""}
                    onChange={handleChange}
                  >
                    <MenuItem value="">Select Time Slot</MenuItem>
                    <MenuItem value="9:00 AM - 10:00 AM">
                      9:00 AM - 10:00 AM
                    </MenuItem>
                    <MenuItem value="10:00 AM - 11:00 AM">
                      10:00 AM - 11:00 AM
                    </MenuItem>
                    <MenuItem value="11:00 AM - 12:00 PM">
                      11:00 AM - 12:00 PM
                    </MenuItem>
                    <MenuItem value="12:00 PM - 1:00 PM">
                      12:00 PM - 1:00 PM
                    </MenuItem>
                    <MenuItem value="1:00 PM - 2:00 PM">
                      1:00 PM - 2:00 PM
                    </MenuItem>
                    <MenuItem value="2:00 PM - 3:00 PM">
                      2:00 PM - 3:00 PM
                    </MenuItem>
                    <MenuItem value="3:00 PM - 4:00 PM">
                      3:00 PM - 4:00 PM
                    </MenuItem>
                    <MenuItem value="4:00 PM - 5:00 PM">
                      4:00 PM - 5:00 PM
                    </MenuItem>
                    <MenuItem value="5:00 PM - 6:00 PM">
                      5:00 PM - 6:00 PM
                    </MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Special Instructions"
                    name="instructions"
                    value={formData.instructions || ""}
                    onChange={handleChange}
                    multiline
                    rows={3}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleContinue}
              fullWidth
            >
              Continue
            </Button>
          </Grid>
        </CardContent>
      </Box>
    </ThemeProvider>
  );
};

export default BloodSampleCollectionForm;
