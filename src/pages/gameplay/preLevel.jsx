import React from 'react';

const PreLevel = ({ level, setScreen, setLoading }) => {

  return <div>
    {level === 1
      ? <p>Capitais</p>
      : level === 2
        ? <p>Maiores cidades que não são capitais</p>
        : <p>Outras cidades por Estado</p>
    }

    <button onClick={() => {
      if (level > 2 ) {
        setScreen("stateLevel");
      }

      else {
        setLoading(true);
        setScreen("playLevel");
      }
    }}>
      Jogar
    </button>
  </div>
};

export default PreLevel;