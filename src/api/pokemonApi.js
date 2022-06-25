import axios from 'axios';

// axios.create permite crear una configuracion estandar
export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})
