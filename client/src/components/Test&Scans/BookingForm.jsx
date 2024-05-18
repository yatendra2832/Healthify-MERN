// TestForm.js
import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const TestForm = ({
  formData,
  handleFormChange,
  handleFileChange,
  handleContinue,
  locations,
  testTypes,
}) => {
  return (
    <Grid container spacing={3}>
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
        <Button
          variant="contained"
          component="label"
          startIcon={<CloudUploadIcon />}
          fullWidth
        >
          Upload Prescription
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Button>
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
