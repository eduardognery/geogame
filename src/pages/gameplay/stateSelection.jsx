import React from 'react';

const StateSelection = ({ states, nextStates, setNextStates, setCurrentState, setLoading, setScreen }) => {

  return <div>
    <p>Selecione o estado para esta fase:</p>

    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>

      {nextStates.map(state => (
        <div
          key={state.id}
          style={{
            marginBottom: "1rem"
          }}>
          <button
            onClick={() => {
              setCurrentState(state);
              setLoading(true);
              setNextStates(nextStates.length > 1
                ? nextStates.filter(item => item.id !== state.id)
                : states
              );
              setScreen("playLevel");
            }}>
            {state.name}
          </button>
        </div>
      ))}

    </div>
  </div>
};

export default StateSelection;