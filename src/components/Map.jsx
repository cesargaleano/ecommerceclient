import React from "react";
import GoogleMapReact from 'google-map-react';
import { MdLocationPin } from "react-icons/md";
import styled from "styled-components";


const AnyReactComponent = ({ text }) => (
<div>
    <MdLocationPin size="2rem" color="black"/>
    {text}
</div>

);
export default function Map(){
    const API_KEY = process.env.REACT_APP_GOOGLEMAPS_APIKEY;
    const defaultProps = {
    center: {
      lat: 7.063580612693316,
      lng: -73.16198499805151
    },
    zoom:11
  };

 
  console.log(process.env);
  console.log(process.env.REACT_APP_PAYU_ACCOUNTID);
  return (
    // Important! Always set the container height explicitly
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${API_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        
      >
        <AnyReactComponent
          lat={7.063580612693316}
          lng={-73.16198499805151}
          text="Arboleda Campestre"
        />
      </GoogleMapReact>
    </MapWrapper>
  );
}

const MapWrapper = styled.div`
width: 45vw;
height: 60vh;
padding: 1rem;

@media (max-width: 768px){
    width: 80vw;
    height: 40vh;
}
    
`;