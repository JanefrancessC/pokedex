import React, { useState } from "react";

const CaughtPokemon = ({ date }) => {
  // const date = new Date().toLocaleDateString();
  // const caught = ["Butterfree", "Eevee", "Pikachu"];
  const [caught, setCaught] = useState([]);
  // const [randomPokeman, setRandomPokeman] = useState("");
  const catchPokemon = () => {
    let caughtItem = ["Butterfree", "Eevee", "Pikachu"];
    let randomPokemon = caughtItem[Math.floor(Math.random() * caughtItem.length)];
    // console.log(randomPokemon);
    setCaught((caught) => caught.concat(randomPokemon));
  };
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
      <ul>
        {caught.map((pokemon, index) => {
          return <li key={index}>{pokemon}</li>;
        })}
      </ul>
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </div>
  );
};

export default CaughtPokemon;
