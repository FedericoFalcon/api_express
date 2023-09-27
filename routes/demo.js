const { Router } = require('express');

const { getPokemon, getPokemons, getPokemons2, getPokemonType } = require('../controllers/demo');

const rutas = Router();

rutas.get('/pokemon/:name', getPokemon);

rutas.get('/pokemons', getPokemons);

rutas.get('/pokemons2', getPokemons2);

rutas.get('/pokemontype/:type', getPokemonType);

module.exports = rutas;