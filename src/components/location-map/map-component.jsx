import React from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';

const CardMap = props => {
  
  return (
    <Map center={[props.long, props.lat]} zoom={12}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Marker position={[ props.long, props.lat]}>
          <Popup>
            {props.address}
          </Popup>
        </Marker>
    </Map>
  );
};

export default CardMap;