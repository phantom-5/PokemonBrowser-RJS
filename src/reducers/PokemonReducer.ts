import {
  PokemonDispatchTypes,
  PokemonType,
  PokemonActions,
} from "../actions/PokemonActionTypes";

interface IDefaultState {
  loading: boolean;
  pokemon?: PokemonType;
}

const defaultState: IDefaultState = {
  loading: false,
};

const pokemonReducer = (
  state: IDefaultState = defaultState,
  action: PokemonDispatchTypes
): IDefaultState => {
  switch (action.type) {
    case PokemonActions.POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };
    case PokemonActions.POKEMON_LOADING:
      return {
        loading: true,
      };
    case PokemonActions.POKEMON_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
