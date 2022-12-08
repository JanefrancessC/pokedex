import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav-links">
      <Link to="/BestPokeman" className="links">
        BestPokeman
      </Link>
      <Link to="/CaughtPokemon" className="links">
        CaughtPokemon
      </Link>
      <Link
        to={props.pokemonData ? "/pokemon/" + props.pokemonData.name : ""}
        className="links"
      >
        PokemonInfo
      </Link>
    </nav>
  );
}

export default Header;
