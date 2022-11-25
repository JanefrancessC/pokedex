import React from "react";

const BestPokeman = ({ abilities }) => {
  // const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p> My favorite Pokemon is Squirtle </p>
      <ul>
        {abilities.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokeman;
