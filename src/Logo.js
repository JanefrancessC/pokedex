import React from "react";
import "./logo.css";
const Logo = (props) => {
  // const appName = "Chioma's Pokedex";

  // const logWhenClicked = () => {
  //   console.log("Button clicked");
  // };

  return (
    <header className="header">
      {/* <title appName={appName} /> */}
      <h1> {props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="logo"
        onClick={props.handleClick}
      />
    </header>
  );
};

export default Logo;
