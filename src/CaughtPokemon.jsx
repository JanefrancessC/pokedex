import React, { useState } from "react";

const CaughtPokemon = ({ date }) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const catchPokemon = () => {
    // let caughtItem = ["Butterfree", "Eevee", "Pikachu"];
    // let randomPokemon =
    //   caughtItem[Math.floor(Math.random() * caughtItem.length)];
    if (pokemonNameInput) {
      setCaught((caught) => caught.concat(pokemonNameInput));
      setPokemonNameInput("");
    }

    // setCaught(caught.concat({ setPokemonNameInput }))
  };
  // const handleInputChange = (e) => {
  //   setPokemonNameInput(e.target.value);
  // };
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>

      <input
        type="text"
        value={pokemonNameInput}
        onChange={(e) => setPokemonNameInput(e.target.value)}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((pokemon, index) => {
          return <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
