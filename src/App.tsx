import React from 'react';
import logo from './logo.svg';
import { Pokemon } from './features/pokemon/Pokemon';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Pokemon />
      </header>
    </div>
  );
}

export default App;
