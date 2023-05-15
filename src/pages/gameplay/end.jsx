import React from 'react';

const EndGame = ({ points}) => {

  return <div>
    <h4>Você fez {points} pontos!</h4>

    <button>Jogar Novamente</button>
  </div>
}

export default EndGame;
