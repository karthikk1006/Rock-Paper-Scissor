import React, { useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Play from './components/Play';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import "./styles/header.css";
function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <Header score={score} />
        <Routes>
          <Route exact path="/" element={<Play setMyChoice={setMyChoice} />}>      
          </Route>
          <Route path="/game" element={<Game myChoice={myChoice} score={score} setScore={setScore} />}>      
          </Route>
        </Routes>
      </div>
    </>
  );

}

export default App;
