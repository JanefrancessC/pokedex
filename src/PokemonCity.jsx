import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");
  function handleCity(e) {
    setCity(e.target.value);
  }
  return (
    <div>
      <input type="text" value={city} onChange={handleCity} />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
