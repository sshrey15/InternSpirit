import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon as leafletIcon, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [15.2993, 74.1240]; // Coordinates for Goa, India



  return (
    <MapContainer 
      center={position} 
      zoom={10} 
      style={{ 
        height: "80vh", 
        width: "75vw", 
        marginLeft: "18rem", 
        padding: "1rem", 
        backgroundColor: "white", 
        borderRadius: "0.1rem" 
      }}
      zoomControl={true}
      scrollWheelZoom={false}
      className='align-middle'
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={
        leafletIcon({
          iconUrl: '/images/location.png',
          iconSize: [40, 40]
        })
      
      }>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;