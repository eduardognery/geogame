import React from 'react';

const EndGame = ({ points, setPage }) => {

  return <div>
    <h4>Você fez {points} pontos!</h4>

    <button onClick={()=>setPage("main")}>Jogar Novamente</button>
  </div>
}

export default EndGame;