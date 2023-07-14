import React from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';

const AnyReactComponent = () => <div className="marker"></div>;

const App = () => {
  const mapOptions = {
    center: {
      lat: 37.7749,
      lng: -122.4194
    },
    zoom: 10
  };

  return (
    <div className="app">
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCdMDQd2GtOV_Au8lxpIbQLeMlwT9_ai8w' }}
          defaultCenter={mapOptions.center}
          defaultZoom={mapOptions.zoom}
        >
          <AnyReactComponent
            lat={mapOptions.center.lat}
            lng={mapOptions.center.lng}
          />
        </GoogleMapReact>
      </div>
      <div className="content">
        <h1>Welcome to My Amazing App!</h1>
        <p>Discover the world with Google Maps.</p>
      </div>
    </div>
  );
};

export default App;
