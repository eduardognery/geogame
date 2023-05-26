import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Polyline
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import greenIcon from '../assets/icons/flag_green_inv.png'
import blueIcon from '../assets/icons/flag_blue_inv.png';

import './mapViewer.css';

const GreenIcon = L.icon({
  iconUrl: greenIcon,
  iconAnchor: [2, 38]
});
const BlueIcon = L.icon({
  iconUrl: blueIcon,
  iconAnchor: [29, 38]
});

const MapViewer = ({ center, size, zoom, cityPos, userPos, handleMapClick }) => {
  const lineStyle = {
    color: 'red',
    dashArray: "4 10"
  }

  const LocationMarker = () => {
    useMapEvents({
      click: e => handleMapClick(e)
    })

    return userPos === null
      ? null
      : <>
        <Marker icon={BlueIcon} position={userPos} />
        <Marker icon={GreenIcon} position={cityPos} />
        <Polyline
          pathOptions={lineStyle}
          positions={[
            cityPos,
            [userPos.lat, userPos.lng],
          ]}
        />
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
        style={{ width: size[0] + "px", height: size[1] + "px", }}
      >
        <TileLayer
          // url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png'
        />

        <LocationMarker />

      </MapContainer>
    </div>
  </>;
}

export default MapViewer;
