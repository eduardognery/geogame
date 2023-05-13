import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  // Popup,
  useMapEvents
} from 'react-leaflet';

import cities from './cities';
import regions from './regions';

// import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import greenIcon from './assets/icons/flag_green_inv.png'
import blueIcon from './assets/icons/flag_blue_inv.png';

const GreenIcon = L.icon({
  iconUrl: greenIcon,
  iconAnchor: [2, 38]
});
const BlueIcon = L.icon({
  iconUrl: blueIcon,
  iconAnchor: [29, 38]
});

const sizeS = [250, 330];
const centerS_Lat = regions[4].latitude;
const centerS_Lon = regions[4].longitude;

const mapStyle = {
  width: sizeS[0] + "px",
  height: sizeS[1] + "px",
};

const App = () => {

  const [currentCity, setCurrentCity] = useState(cities[0]);
  const [position, setPosition] = useState(null);
  const [distance, setDistance] = useState(0);

  function handleMapClick(e) {
    if (!position) {
      setPosition(e.latlng);
      setDistance(Math.sqrt(Math.pow((currentCity.latitude - e.latlng.lat), 2) + Math.pow((currentCity.longitude - e.latlng.lng), 2)));
    }
  }

  function LocationMarker() {
    useMapEvents({
      click: e => handleMapClick(e)
    })

    return position === null
      ? null
      : <>
        <Marker icon={BlueIcon} position={position} />
        <Marker icon={GreenIcon} position={[currentCity.latitude, currentCity.longitude]} />
      </>
  }

  return (
    <div className="App">
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <h1>
          GeoGame
        </h1>

        <p>Clique em {currentCity.name}</p>

        <div style={{
          margin: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}>
          <MapContainer
            center={[centerS_Lat, centerS_Lon]}
            zoom={5}
            scrollWheelZoom={false}
            dragging={false}
            zoomControl={false}
            style={mapStyle}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'"
            />
            <LocationMarker />

            {/* {
              cities.map(city => (
                <Marker
                  key={city.position}
                  position={[city.latitude, city.longitude]}
                  // onClick={() => console.log(city.name)}
                >
                  <Popup>
                  {city.name}
                </Popup>
                </Marker>
              ))
            } */}
            {/* <Marker position={[-30.034647, -51.217659]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}

          </MapContainer>
        </div>

        {(position)
          ? <div>
            {/* <p>
              As coordenadas de {currentCity.name} são: {currentCity.latitude}, {currentCity.longitude}.
            </p>
            <p>
              Você marcou em {position.lat}, {position.lng}.
            </p>
            <p>
              Você fez {distance} pontos.
            </p> */}
            {(distance < 0.15)
              ? <p>Aí tu veio!!! 👏</p>
              : (distance < 0.3)
                ? <p>Foi perto! 👍</p>
                : (distance < 1)
                  ? <p>Quase. 🤔</p>
                  : <p>Se passou 🤦‍♀️</p>
            }
            <button onClick={() => {
              setCurrentCity(cities[Math.floor(Math.random() * cities.length)]);
              setDistance(0);
              setPosition(null);
            }}>
              Jogar outra
            </button>
          </div>
          : null
        }

      </div>
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
