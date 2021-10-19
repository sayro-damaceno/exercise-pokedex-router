import React from "react"
import Location from "./Locations";
import pokemons from "./data";



class PokemonDetails extends React.Component {
  render() {
    const {id} = this.props.match.params;
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));

    const { name, type, averageWeight, image, summary, foundAt } = pokemon;
    return (
      <div className="pokedex">
        <h1> {name} details </h1>
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
        <h1>Summary</h1>
        <p>{summary}</p>
        <div>
          <h1>Game Locations of {name}</h1>
          <div className="maps">
            {foundAt.map((found) => (<Location key={found.map} found={found} />))}
          </div>
        </div>
      </div>
    )
  }
}

export default PokemonDetails;


