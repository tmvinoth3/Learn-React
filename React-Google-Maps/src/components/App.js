import React, { useState } from 'react';

import GoogleMapReact from 'google-map-react';

class GoogleMaps extends React.Component {

  static defaultProps = {
    center: {
      lat: 12.9864321,
      lng: 80.1166263
    },
    zoom: 20
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default function App({ initialData }) {
  return (
    <div>
      <GoogleMaps />
    </div>
  );
}
