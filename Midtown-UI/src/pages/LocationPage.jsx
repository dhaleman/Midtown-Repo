import React, { useState } from "react";
import Taskbar from "../components/Taskbar";
import logo from "../HelpingHands3.png";
import PageFooter from "../components/PageFooter";

const locations = [
  {
    name: "Location 1",
    address: "123 Main St, City, Country",
    latitude: "51.5074",
    longitude: "0.1278"
  },
  {
    name: "Location 2",
    address: "456 Elm St, City, Country",
    latitude: "40.7128",
    longitude: "-74.0060"
  },
  {
    name: "Location 3",
    address: "789 Oak St, City, Country",
    latitude: "34.0522",
    longitude: "-118.2437"
  },
  {
    name: "Location 4",
    address: "101 Pine St, City, Country",
    latitude: "42.3601",
    longitude: "-71.0589"
  },
  {
    name: "Location 5",
    address: "567 Cedar St, City, Country",
    latitude: "52.3667",
    longitude: "4.8945"
  }
];

const mapContainerStyle = {
  width: "100%",
  height: "400px", // Reduced map height for better visibility
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
};

function LocationPage() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "#f3f3f3", padding: "20px" }}>
      <Taskbar imagesrc={logo} />
      <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#333", textAlign: "center" }}>Locations</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "30%", marginRight: "20px", backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
          {locations.map((location, index) => (
            <button 
              key={index} 
              style={{ 
                fontSize: "18px", 
                marginBottom: "15px", 
                width: "100%", 
                padding: "15px", 
                borderRadius: "8px", 
                cursor: "pointer", 
                border: "none", 
                backgroundColor: selectedLocation === location ? "#4CAF50" : "#f0f0f0",
                outline: "none",
                textAlign: "left",
                fontFamily: "Roboto, sans-serif",
                color: selectedLocation === location ? "#fff" : "#333",
                transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out"
              }} 
              onClick={() => handleLocationClick(location)}
            >
              {location.name}
              <div style={{ fontSize: "14px", color: "#666" }}>{location.address}</div>
            </button>
          ))}
        </div>
        <div style={{ width: "70%", marginTop: "20px" }}>
          <div style={mapContainerStyle}>
            <iframe
              title="Google Maps"
              style={{ width: "100%", height: "100%", border: "0" }}
              src={`https://maps.google.com/maps?q=${selectedLocation.latitude},${selectedLocation.longitude}&z=14&output=embed`}
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default LocationPage;