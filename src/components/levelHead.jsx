import React from "react";

const LevelHead = ({ level, points, screen }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {screen === "playLevel"
        ? <>
          <h3 style={{
            textAlign: 'right',
            margin: '0 6rem 0 0'
          }}>
            Fase {level}
          </h3>
          <h3 style={{
            textAlign: 'left',
            margin: '0 0 0 6rem'
          }}>
            {points} pontos
          </h3>
        </>
        : <h2>Fase {level}</h2>
      }
    </div>
  );
}

export default LevelHead;