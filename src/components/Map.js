import React from "react";
import GoogleMapReact from "google-map-react";
import logo from "../images/logo.png";

const LocationPin = ({ text }) => (
  <div className="pin">
    <img src={logo} alt="" style={{ width: "50px" }} />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAlz8FH89ba3lfDBevXBEghyasYP6gNe88" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
