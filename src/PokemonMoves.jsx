import React, { useEffect } from "react";

function PokemonMoves({ pokemonId, pokemonData, setPokemonData }) {
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPokemonData(data);
      });
  }, [pokemonId, setPokemonData]);
  // const [pokemonData, setPokemonData] = useState(null);
  return (
    <div>
      {pokemonData ? (
        <div>
          <p>{pokemonData.name}'s moves:</p>
          <ul>
            {pokemonData.moves.map((move, index) => {
              return <li key={index}>{move.move.name}</li>;
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default PokemonMoves;
