import React from "react";

import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";
import BestPokeman from "./BestPokeman";



const App = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();
   const LogWhenClicked = () => {
     console.log("Button clicked");
   };
  return (
    <div>
      <Title />
      <Logo appName="Chioma's Pokedex" handleClick ={LogWhenClicked} />
      <BestPokeman abilities= {abilities} />
      <CaughtPokemon date ={date} />
    </div>
  );
};
const Title = () => {
  return (
    <div>
      {/* <h1>Chioma's Pokedex</h1> */}
    </div>
  );
};

export default App;
