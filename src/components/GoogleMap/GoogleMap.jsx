import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GoogleMapComponent = withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 40.7128, lng: -74.0060 }} // Example coordinates (New York City)
  >
    <Marker position={{ lat: 40.7128, lng: -74.0060 }} />
  </GoogleMap>
));

const GoogleMapContainer = () => {
  return (
    <div style={{ height: '300px', width: '100%' }}>
      <GoogleMapComponent
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
};

export default GoogleMapContainer;
