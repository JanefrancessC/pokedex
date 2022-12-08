import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";
import BestPokeman from "./BestPokeman";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
import PokemonInfo from "./PokemonInfo";
import Header from "./Header";
import "./App.css";

const App = () => {
  const [id, setId] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();
  const LogWhenClicked = () => {
    console.log("Button clicked");
  };
  return (
    <div className="Main">
      <Header pokemonData={pokemonData} />
      <Title />
      <Logo appName="Chioma's Pokedex" handleClick={LogWhenClicked} />
      <PokemonCity />
      {/* <BestPokeman abilities={abilities} /> */}
      <PokemonMovesSelector
        id={id}
        setId={setId}
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
      />

      <Routes>
        <Route
          path="/CaughtPokemon"
          element={<CaughtPokemon date={date} />}
        ></Route>
        <Route
          path="/BestPokeman"
          element={<BestPokeman abilities={abilities} />}
        ></Route>
        <Route path="/pokemon/:name" element={<PokemonInfo id={id} />} />
      </Routes>
    </div>
  );
};
const Title = () => {
  return <div>{/* <h1>Chioma's Pokedex</h1> */}</div>;
};

export default App;
