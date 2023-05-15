import React, { useState } from 'react';

import './App.css';
import Home from './pages/main';
import Instructions from './pages/instructions/main';
import GamePlay from './pages/gameplay/main';

const App = () => {
  const [page, setPage] = useState("main");

  return (
    <div className="App">
      <div className='Main'>
        <h1 style={{
          alignSelf: "center"
        }}>
          GeoGame
        </h1>

        {page === "main"
          ? <Home setPage={setPage} />
          : page === "instructions"
            ? <Instructions setPage={setPage} />
            : page === "gameplay"
              ? <GamePlay setPage={setPage} />
              : <Home setPage={setPage} />

        }
      </div>

      <footer>
        <p>
          Geogame v0.2.0
        </p>
        <p>
          Desenvolvido por Eduardo Nery <br />
          eduardognery@gmail.com
        </p>
      </footer>
    </div>
  )
}

export default App;
