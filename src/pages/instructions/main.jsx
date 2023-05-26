import React from 'react';

const Instructions = ({ setPage }) => {

  return <div>
    <h3>Como jogar:</h3>


    <p>O objetivo do jogo é localizar cidades da região sul do Brasil.</p>
    <p>A cada rodada, o jogador deve clicar/pressionar na local do mapa onde se encontra a cidade solicitada.</p>
    <p>A medida que o jogo passa, as cidades são cada vez menores, aumentando o nível de dificuldade.</p>

    <h4>Pontuação:</h4>

    <p>A pontuação depende da distância real entre o ponto marcado pelo jogador, e as coordenadas do marco zero da cidade solicitada:</p>

    <p>Menos de 30 km: 10 pontos.</p>
    <p>Entre 30 km e 60 km: 5 pontos.</p>
    <p>Entre 60 km e 90 km: 1 ponto.</p>
    <p>Mais de 90 km: 0 pontos.</p>

    <h4>Zoom:</h4>

    <p>No celular: faça movimentos de pinça.</p>
    <p>No PC: utilize o scroll do mouse.</p>

    <h4>Movimentando o mapa:</h4>

    <p>No celular: pressione e arraste o mapa.</p>
    <p>No PC: clique e arraste com o botão esquerdo do mouse.</p>

    <button onClick={() => setPage("main")}>
      Voltar
    </button>
  </div>
}

export default Instructions;