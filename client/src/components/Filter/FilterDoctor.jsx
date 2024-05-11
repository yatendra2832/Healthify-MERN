import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
const FilterDoctor = ({
  specialtyFilter,
  experienceFilter,
  feesFilter,
  onSpecialtyChange,
  onExperienceChange,
  onFeesChange,
  specialties,
}) => {
  const experienceOptions = ["0-5 years", "5-10 years", "10+ years"];
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3">
          <label for="specialty-filter" class="form-label">
            Filter by Specialty:
          </label>
          <select
            id="specialty-filter"
            class="form-select"
            value={specialtyFilter}
            onChange={(e) => onSpecialtyChange(e.target.value)}
          >
            <option value="">All Specialties</option>
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>

        <div class="col-md-4 mb-3">
          <label for="experience-filter" class="form-label">
            Filter by Experience:
          </label>
          <select
            id="experience-filter"
            class="form-select"
            value={experienceFilter}
            onChange={(e) => onExperienceChange(e.target.value)}
          >
            <option value="">All Experience Levels</option>
            {experienceOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div class="col-md-4 mb-3">
          <label for="fees-filter" class="form-label">
            Filter by Fees:
          </label>
          <Box >
            <Slider
              aria-label="Price Range"
              value={feesFilter}
              onChange={(e, newValue) => onFeesChange(newValue)}
              step={10}
              min={200}
              max={500}
              valueLabelDisplay="auto"
            />
          </Box>
          <span>Less than ₹ {feesFilter} </span>
        </div>
      </div>
    </div>
  );
};

export default FilterDoctor;
