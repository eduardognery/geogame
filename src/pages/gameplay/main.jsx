import React, { useEffect, useState } from 'react';

import PreLevel from './preLevel';
import PlayLevel from './playLevel';
import PosLevel from './posLevel';
import StateSelection from './stateSelection';
import Spinner from '../../components/spinner';

// import regions from '../../data/regions';
import states from '../../data/states';
import allCities from '../../data/cities';
import LevelHead from '../../components/levelHead';
import EndGame from './end';

const GamePlay = ({ setPage }) => {
  /** Fases (gameLevel):
   *    1- Capitais (cityLevel 1, currentState = null)
   *    2- Maiores cidades (cityLevel 2, currentState = null)
   *    Seleção de estado p/ fase 3
   *    3- Maiores cidades do estado (cityLevel 3, currentState not null)
   *    Seleção de estado p/ fase 4
   *    4- Maiores cidades do estado (cityLevel 3, currentState not null)
   *    Seleção de estado p/ fase 5
   *    5- Maiores cidades do estado (cityLevel 3, currentState not null)
   *    Seleção de estado p/ fase 6
   *    6- Maiores cidades do estado (cityLevel 4, currentState not null)
   *    Seleção de estado p/ fase 7
   *    7- Maiores cidades do estado (cityLevel 4, currentState not null)
   *    Seleção de estado p/ fase 8
   *    8- Maiores cidades do estado (cityLevel 4, currentState not null)
   */
  const [gameLevel, setGameLevel] = useState(1);
  const [cityLevel, setCityLevel] = useState(1);

  /** Mostra (screen):
   *    "preLevel": antes de iniciar a fase (o que será pedido)
   *    "stateLevel": seleção de estado para fases 3-8
   *    "playLevel": jogo rodando
   *    "posLevel": após finalizar a fase (pontuação)
   */
  const [screen, setScreen] = useState("preLevel");

  /** array de cidades da fase */
  const [cities, setCities] = useState([]);
  /** id do estado da fase */
  const [currentState, setCurrentState] = useState(null);
  /** estado de carregamento de cidades da fase */
  const [loading, setLoading] = useState(true);
  /** estados que podem ser selecionados na tela "stateLevel" */
  const [nextStates, setNextStates] = useState(states);

  /** levelPoints: pontos na fase (soma dos pontos de todas as rodadas)
   * totalPoints: pontuação total do jogo (soma dos pontos de todas as fases) */
  const [levelPoints, setLevelPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    if (loading) {
      setCities(currentState
        ? allCities
          .filter(city => city.level === cityLevel && city.stateId === currentState.id)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
        : allCities
          .filter(city => city.level === cityLevel)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
      );
      setLoading(false);
    }
  }, [loading, cityLevel, currentState]);

  return <>
    {(screen !== "endGame")
      ? <LevelHead level={gameLevel} points={levelPoints} screen={screen} />
      : null
    }
    

    {(loading)
      ? <Spinner />
      : (screen === "preLevel")
        ? <PreLevel
          level={gameLevel}
          setScreen={setScreen}
          setLoading={setLoading}
        />
        : (screen === "stateLevel")
          ? <StateSelection
            states={states}
            nextStates={nextStates}
            setNextStates={setNextStates}
            setCurrentState={setCurrentState}
            setScreen={setScreen}
            setLoading={setLoading}
          />
          : (screen === "playLevel")
            ? <PlayLevel
              loading={loading}
              cities={cities}
              setScreen={setScreen}
              levelPoints={levelPoints}
              setLevelPoints={setLevelPoints}
              state={currentState}
            />
            : screen === "posLevel"
              ? <PosLevel
                gameLevel={gameLevel}
                cityLevel={cityLevel}
                setGameLevel={setGameLevel}
                setCityLevel={setCityLevel}
                setScreen={setScreen}
                setLoading={setLoading}
                levelPoints={levelPoints}
                setLevelPoints={setLevelPoints}
                totalPoints={totalPoints}
                setTotalPoints={setTotalPoints}
              />
              : screen === "endGame"
                ? <EndGame
                  points={totalPoints}
                  setPage={setPage}
                />
                : null
    }
  </>;
}

export default GamePlay;
