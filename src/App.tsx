import "./App.css";
import GetPokemon from "./actions/PokemonActions";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);

  const onSearchHandler = () => dispatch(GetPokemon(pokemonName));



  return (
    <>
      <div className="App">
        <input type="text" onChange={onChangeHandler} value={pokemonName} />
        <button onClick={onSearchHandler}>Search</button>
        {pokemonState.pokemon && (
          <div>
            {console.log(pokemonState)}
            <img src={pokemonState.pokemon.sprites.front_default} alt="" />
            {pokemonState.pokemon.abilities.map((ability) => {
              return <p>{ability.ability.name}</p>;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
