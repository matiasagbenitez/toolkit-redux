import axios from "axios";

export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

// Path: src/store/slices/pokemon/pokemonSlice.js