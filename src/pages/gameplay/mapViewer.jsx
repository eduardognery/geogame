import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import greenIcon from '../../assets/icons/flag_green_inv.png'
import blueIcon from '../../assets/icons/flag_blue_inv.png';

const GreenIcon = L.icon({
  iconUrl: greenIcon,
  iconAnchor: [2, 38]
});
const BlueIcon = L.icon({
  iconUrl: blueIcon,
  iconAnchor: [29, 38]
});

const MapViewer = ({center, size, zoom, cityPos, userPos, handleMapClick}) => {

  function LocationMarker() {
    useMapEvents({
      click: e => handleMapClick(e)
    })

    return userPos === null
      ? null
      : <>
        <Marker icon={BlueIcon} position={userPos} />
        <Marker icon={GreenIcon} position={cityPos} />
      </>
  }

  return <>
      <div style={{
        margin: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}>
        <MapContainer
          center={center}
          zoom={zoom}
          // scrollWheelZoom={true}
          // dragging={false}
          zoomControl={false}
          style={{width: size[0] + "px", height: size[1] + "px",}}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          />
          {/* <Marker icon={BlueIcon} position={[5.2696, -60.2096]} />
          <Marker icon={BlueIcon} position={[-33.7512, -53.3945]} />
          <Marker icon={BlueIcon} position={[-20.4747, -28.8477]} />
          <Marker icon={BlueIcon} position={[-7.5344, -73.9830]} /> */}
          <LocationMarker />

        </MapContainer>
      </div>
  </>;
}

export default MapViewer;
