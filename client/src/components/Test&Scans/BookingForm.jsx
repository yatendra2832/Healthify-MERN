// TestForm.js
import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const TestForm = ({
  formData,
  handleFormChange,
  handleContinue,
  locations,
  testTypes,
}) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Patient Name"
          name="patientName"
          value={formData.patientName || ""}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber || ""}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          select
          label="Location"
          name="location"
          value={formData.location || ""}
          onChange={handleFormChange}
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          select
          label="Test Type"
          name="testType"
          value={formData.testType || ""}
          onChange={handleFormChange}
        >
          {testTypes.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="date"
          label="Date"
          name="date"
          InputLabelProps={{ shrink: true }} // To ensure the label does not overlap with the placeholder
          value={formData.date || ""}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="file"
          variant="outlined"
          fullWidth
          name="file"
          value={formData.file}
          onChange={handleFormChange} // Use handleFileChange to capture file changes
        />
      </Grid>
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
    </Grid>
  );
};

export default TestForm;
