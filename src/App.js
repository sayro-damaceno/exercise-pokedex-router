import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails';
import About from './components/About';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <nav className="nav-bar">
          <Link to="/">Pokedex</Link>
          <Link to="/about">About</Link>
          {/* <Link to="/solutions">Gabarito</Link> */}
        </nav>
        <Switch>
          <Route exact path="/" render={ () => (<Pokedex pokemons={pokemons} />)}/>
          <Route exact path="/pokemons/:id" component={PokemonDetails} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;