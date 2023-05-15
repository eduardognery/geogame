import React, { useState } from 'react';

import allCities from '../data/cities';

import MapViewer from './gameplay/mapViewer';

const size = [350, 350];
const center = [-14.2408, -51.4154];
const zoom = 3;

const GameView = () => {
  let citiesRand = allCities
    .filter(city => city.level === 1)
    .sort(() => Math.random() - 0.5);

  const [citiesList, setCitiesList] = useState(citiesRand);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCity, setCurrentCity] = useState(citiesRand[0]);
  const [userPosition, setUserPosition] = useState(null);
  // const [distance, setDistance] = useState(0);
  const [points, setPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  function handleMapClick(e) {
    if (!userPosition) {
      setUserPosition(e.latlng);
      let dist = Math.sqrt(Math.pow((currentCity.latitude - e.latlng.lat), 2) + Math.pow((currentCity.longitude - e.latlng.lng), 2));

      console.log(dist);
      // setDistance(dist);
      if (dist < 0.5) {
        setPoints(10)
        setTotalPoints(totalPoints + 10)
      }
      else if (dist < 1.5) {
        setPoints(5)
        setTotalPoints(totalPoints + 5)
      }
      else if (dist < 3) {
        setPoints(1)
        setTotalPoints(totalPoints + 1)
      }
      else {
        setPoints(0)
      }
    }
  }

  return <>
    {/* <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}> */}
    <h2>
      Fase 1 - Principais Capitais
    </h2>

    <p>Pontuação: {totalPoints}</p>

    <p>Rodada {currentIndex+1} de {citiesList.length}: Clique em {currentCity.name}</p>

    <MapViewer
      center={center}
      size={size}
      zoom={zoom}
      cityPos={[currentCity.latitude, currentCity.longitude]}
      userPos={userPosition}
      handleMapClick={handleMapClick}
    />

    {(userPosition)
      ? <div>
        {(points === 10)
          ? <p>Aí tu veio!!! 👏</p>
          : (points === 5)
            ? <p>Foi perto! 👍</p>
            : (points === 1)
              ? <p>Quase. 🤔</p>
              : <p>Se passou 🤦‍♀️</p>
        }
        {(currentIndex !== citiesList.length - 1)
          ? <button onClick={() => {
            setCurrentCity(citiesList[currentIndex + 1]);
            setCurrentIndex(currentIndex + 1)
            setPoints(0);
            setUserPosition(null);
          }}>
            Próxima
          </button>
          : <>
          <p>
            Você fez {totalPoints} pontos!
          </p>
          <button onClick={() => {
            let citiesRand = allCities
              .filter(city => city.level === 1)
              .sort(() => Math.random() - 0.5);

            setCitiesList(citiesRand)
            setCurrentIndex(0)
            setPoints(0);
            setTotalPoints(0);
            setUserPosition(null);
            setCurrentCity(citiesRand[0]);
          }}>
            Jogar outra
          </button>
          </>
        }
      </div>
      : null
    }

    {/* </div> */}
  </>;
}

export default GameView;
