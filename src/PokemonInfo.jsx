import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonInfo({ id }) {
  let { name } = useParams();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      })
      .catch((error) => console.error(error));
  }, [id, setPokemon]);

  return (
    <div>
      <h3>Pokemon Info: {name}</h3>
      {pokemon && (
        <ul>
          <li>Name: {pokemon.name}</li>
          <li>Color: {pokemon.color.name}</li>
          <li>Shape: {pokemon.shape.name}</li>
          <li>Happiness: {pokemon.base_happiness}</li>
          <li>Capture rate: {pokemon.capture_rate}</li>
        </ul>
      )}
    </div>
  );
}

export default PokemonInfo;
