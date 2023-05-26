import React, { useEffect, useState } from 'react';

import regions from '../../data/regions';
import states from '../../data/states';
import allCities from '../../data/cities';

import MapViewer from '../../components/mapViewer';
import Spinner from '../../components/spinner';


const sul = regions[4];

const size = [350, 350];
const center = [sul.latitude, sul.longitude];
const zoom = 5;

const GamePlay = ({setPage}) => {
  /** Fases (rounds):
   *    1- Capitais (level 1)
   *    2- Maiores cidades (level 2)
   *    Seleção de estado p/ fase 3
   *    3- Maiores cidades do estado (level 3)
   *    Seleção de estado p/ fase 4
   *    4- Maiores cidades do estado (level 3)
   *    Seleção de estado p/ fase 5
   *    5- Maiores cidades do estado (level 3)
   *    Seleção de estado p/ fase 6
   *    6- Maiores cidades do estado (level 4)
   *    Seleção de estado p/ fase 7
   *    7- Maiores cidades do estado (level 4)
   *    Seleção de estado p/ fase 8
   *    8- Maiores cidades do estado (level 4)
   */
  const [round, setRound] = useState(1);
  const [currentState, setCurrentState] = useState(0);
  const [stateSelect, setStateSelect] = useState(false);
  const [citiesList, setCitiesList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCity, setCurrentCity] = useState(null);
  const [userPosition, setUserPosition] = useState(null);
  const [points, setPoints] = useState(0);
  const [roundPoints, setRoundPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [nextStates, setNextStates] = useState(states);
  const [loading, setLoading] = useState(true);
  const [betweenPhases, setBetweenPhases] = useState(false);

  useEffect(() => {
    if (loading) {
      let level = round <= 2
        ? round
        : round <= 5
          ? 3
          : round <= 8
            ? 4
            : 1;

      let newRoundCities = !currentState
        ? allCities
          .filter(city => city.level === level)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
        : allCities
          .filter(city => city.level === level && city.stateId === currentState)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);
      
      setCitiesList(newRoundCities);
      setCurrentCity(newRoundCities[0]);
      setCurrentIndex(0);
      setUserPosition(null);

      if (!nextStates.length) {
        setNextStates(states);
      }

      setLoading(false);
    }

  }, [round, currentState, loading, nextStates]);

  function handleMapClick(e) {
    if (!userPosition) {
      setUserPosition(e.latlng);
      let dist = Math.sqrt(Math.pow((currentCity.latitude - e.latlng.lat), 2) + Math.pow((currentCity.longitude - e.latlng.lng), 2));

      let pointsToAdd = (dist < 0.5)
        ? 10
        : (dist < 1.5)
        ? 5
        : (dist < 3)
        ? 1
        : 0;
      
      setPoints(pointsToAdd);
      setRoundPoints(roundPoints + pointsToAdd);
      setTotalPoints(totalPoints + pointsToAdd);
    }
  }

  return <>
    <h4>Fase {round}</h4>

    <p>Pontuação nesta fase: {roundPoints}</p>

    {(loading)
      ? <Spinner />
      : <>
        {(!stateSelect)
          ? (betweenPhases)
            ? <>
              <h4>Fase {round} finalizada. </h4>
          
              <p>Você marcou {roundPoints}.</p>
          
              <p>Pontuação total: {totalPoints}</p>
          
              <button onClick={()=>{
                setBetweenPhases(false);
                setRound(round + 1);
                setRoundPoints(0);
                setStateSelect(round > 1);
                setLoading(true);
              }}>
                Continuar
              </button>
            </>
            : <>
              <p>Rodada {currentIndex + 1} de {citiesList.length}: Clique em {currentCity.name}</p>
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
                    : (round !== 8)
                      ? <button onClick={() => {
                          setPoints(0);
                          setBetweenPhases(true);
                        }}>
                          Próxima fase
                        </button>
                      : <>
                      <h4>Você fez {totalPoints} pontos!</h4>
                  
                      <button onClick={() => setPage("main")}> Jogar Novamente</button>
                    </>
                  }
                </div>
                : null
              }
            </>
          : <>
            <p>Selecione o estado para esta rodada:</p>
            {nextStates.map(state => (
              <button onClick={() => {
                setCurrentState(state.id);
                setStateSelect(false);
                setLoading(true);
                setNextStates(nextStates.filter(item => item.id !== state.id))
              }}>
                {state.name}
              </button>
            ))}
          </>
        }
      </>
    }


  </>;
}

export default GamePlay;
