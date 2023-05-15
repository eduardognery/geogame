import React from 'react';

const Home = ({ setPage }) => {

  return <div style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }}>
    <div style={{
      marginTop: "1em"
    }}>
      <button onClick={() => setPage("gameplay")}>
        Jogar
      </button>
    </div>

    <div style={{
      marginTop: "1em"
    }}>
      <button onClick={() => setPage("instructions")}>
        Como jogar?
      </button>
    </div>


  </div>;
}

export default Home;
