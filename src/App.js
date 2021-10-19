import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <nav>
          <Link to="/">Pokedex</Link>
          {/* <Link to="/trybe-talks">Trybe Talks</Link>
          <Link to="/solutions">Gabarito</Link> */}
        </nav>
        <Switch>
          <Route exact path="/" render={ () => (<Pokedex pokemons={pokemons} />)}/>
          <Route path="/pokemons/:id" component={PokemonDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;