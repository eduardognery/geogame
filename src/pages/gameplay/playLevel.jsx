import React, { useState } from 'react';
import L from 'leaflet';

import Spinner from '../../components/spinner';
import MapViewer from '../../components/mapViewer';
import regions from '../../data/regions';

const PlayLevel = ({ loading, cities, setScreen, levelPoints, setLevelPoints, state }) => {

  /** índice de cities onde se encontra a cidade da rodada atual */
  const [currentIndex, setCurrentIndex] = useState(0);
  /** cidade que o jogador deve localizar no mapa na rodada atual */
  const [currentCity, setCurrentCity] = useState(cities[0]);
  /** coordenadas onde o usuario clicou no mapa ({lat, lng}) */
  const [userPosition, setUserPosition] = useState(null);
  /** distancia real entre o ponto que o usuario clicou e as coordenadas da cidade*/
  const [realDistance, setRealDistance] = useState(null);

  /** pontos marcados na rodada */
  const [points, setPoints] = useState(0);

  /** variaveis relativas ao display do mapa
   * com a evolucao do jogo, devem ser dinamicas, em relacao a regiao */
  const sul = regions[4];
  // const size = [350, 350];
  // const center = [sul.latitude, sul.longitude]
  // const zoom = (!state) ? 5 : state.zoom;

  /** função de click no mapa
   * trata coordenadas do local do click e da cidade da rodada atual (currentCity) */
  function handleMapClick(e) {
    if (!userPosition) {
      setUserPosition(e.latlng);

      /** Pontuacao:
       * Fase 1:
       * < 30 km => 10 pontos
       * 30-60 km => 5 pontos
       * < 60-90 km => 1 ponto
       * > 90 km => 0 pontos
       * */

      let dist = e.latlng.distanceTo(L.latLng(currentCity.latitude, currentCity.longitude)) / 1000;

      /** Para cada nivel de zoom, aumenta ou diminui a pontuacao exponencialmente */
      // let currZoom = e.target._map._zoom;
      // let ptWeight = Math.pow(2, 5-currZoom);
      let ptWeight = 1;


      let pointsToAdd = (dist < 30 * ptWeight)
        ? 10
        : (dist < 60 * ptWeight)
          ? 5
          : (dist < 90 * ptWeight)
            ? 1
            : 0;

      setRealDistance(dist);
      setPoints(pointsToAdd);
      setLevelPoints(levelPoints + pointsToAdd);
    }
  }

  return <div>
    {loading
      ? <Spinner />
      : <>
        <p>Rodada {currentIndex + 1} de {cities.length}: Clique em {currentCity.name}</p>

        <MapViewer
          center={(!state)
            ? [sul.latitude, sul.longitude]
            : [state.latitude, state.longitude]}
          size={(!state)
            ? [350, 350]
            : [state.width, state.height]}
          zoom={(!state) ? 5 : state.zoom}
          cityPos={[currentCity.latitude, currentCity.longitude]}
          userPos={userPosition}
          handleMapClick={handleMapClick}
        />

        {(userPosition)
          ? <p>{(points === 10)
              ? "Aí tu veio!!! 👏"
              : (points === 5)
                ? "Foi perto! 👍"
                : (points === 1)
                  ? "Quase. 🤔"
                  : "Se passou 🤦‍♀️"
            } Você marcou a {realDistance.toFixed(1)} km de {currentCity.name}.</p>
          : null
        }

        {(userPosition)
          ? (currentIndex !== cities.length - 1)
            ? <button
              onClick={() => {
                setCurrentCity(cities[currentIndex + 1]);
                setCurrentIndex(currentIndex + 1)
                setPoints(0);
                setUserPosition(null);
              }}>
              Próxima
            </button>
            : <button onClick={() => {
              setScreen("posLevel")
            }}>
              Continuar
            </button>
          : null
        }
      </>
    }

  </div>
};

export default PlayLevel;