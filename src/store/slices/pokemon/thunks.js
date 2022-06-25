import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async(dispatch, getState) => {
        // con el getState se tiene acceso al state de la app
        dispatch(startLoadingPokemons());
        // realizar peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${page * 10}`);
        // const data = await resp.json();
        const { data } = await pokemonApi.get(`/pokemon?limit=1&offset=${page * 10}`);

        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    }
}
