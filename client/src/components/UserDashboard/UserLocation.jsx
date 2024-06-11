import React, { useState,useEffect } from "react";

const UserLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState(null); // State variable to store the selected location

 
  // Sample array of location options
  const locationOptions = [
    { id: 1, city: "New Delhi" },
    { id: 2, city: "Gurgaon" },
    { id: 3, city: "Noida" },
    { id: 4, city: "Faridabad" },
    { id: 5, city: "Ghaziabad" },
    { id: 6, city: "Greater Noida" },
    { id: 7, city: "Meerut" },
    { id: 8, city: "Sonipat" },
    { id: 9, city: "Panipat" },
    { id: 10, city: "Rohtak" },
    { id: 11, city: "Karnal" },
    { id: 12, city: "Bhiwani" },
    { id: 13, city: "Rewari" },
    { id: 14, city: "Palwal" },
    { id: 15, city: "Muzaffarnagar" },
    { id: 16, city: "Bulandshahr" },
    { id: 17, city: "Aligarh" },
    { id: 18, city: "Mathura" },
    { id: 19, city: "Bareilly" },
    { id: 20, city: "Hapur" },
    // Add more location options here
  ];

  // Function to handle location selection
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="row mb-4 ">
      <div className="col-md-8 offset-md-2">
        <h2 className="text-center mb-4 fw-bold fst-italic ">
          Select Your Location
        </h2>
        <div className="card shadow">
          <div className="card-body">
            <h5 className="card-title">Locations</h5>
            <div className="row">
              {locationOptions.map((location) => (
                <div key={location.id} className="col-md-3 mb-3">
                  <div
                    className={`card text-center ${
                      selectedLocation && selectedLocation.id === location.id
                        ? "bg-primary text-white"
                        : ""
                    }`}
                    onClick={() => handleLocationSelect(location)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{location.city}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Show selected location details */}
        {selectedLocation && (
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Selected Location</h5>
              <p className="card-text">
                City: {selectedLocation.city}
                <br />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLocation;
