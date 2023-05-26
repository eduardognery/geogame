import React from 'react';

const PosLevel = ({ gameLevel, cityLevel, setGameLevel, setCityLevel, setScreen, setLoading, levelPoints, setLevelPoints, totalPoints, setTotalPoints }) => {
  /** fases (gameLevels) gameLevels onde não mudam o cityLevel ao ir para a próxima fase */
  const noChangeCityLevel = [3, 4, 6, 7];

  return <div>
    <p>Você fez {levelPoints} pontos</p>

    <button onClick={() => {
      setTotalPoints(totalPoints+levelPoints);
      if (gameLevel !== 8) {
        if (!noChangeCityLevel.includes(gameLevel)) {
          setCityLevel(cityLevel + 1);
        }

        setGameLevel(gameLevel + 1);
        setScreen("preLevel");
      }

      else {
        setCityLevel(1);
        setGameLevel(1);
        setLoading(true);
        setScreen("endGame"); // trocar para "EndGame"
      }

      setLevelPoints(0);
    }}>
      Continuar
    </button>
  </div>
};

export default PosLevel;