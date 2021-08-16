import React from 'react';
import { Header } from './components/Header';
import "./App.scss"

function App() {
  return (
    <div className="app">
    <Header />
    <div>
    <div className="app__section--info">
        <h1>The Avengers End Game<span>4/5</span></h1>
        <p>Esto trata de que si que trata de algo y algo es etc etc. y ponle mas cosas a esto pa que...</p>
        <button>Play</button>
    </div>
    </div>
   
    </div>
  );
}

export default App;
