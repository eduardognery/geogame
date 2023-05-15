import React from 'react';

const Instructions = ({ setPage }) => {

  return <div>
    <h4>Como jogar:</h4>
    <p>...</p>

    <button onClick={()=>setPage("main")}>
      Voltar
    </button>
  </div>
}

export default Instructions;
