const { Router } = require('express');

const { getPeliculas, getPelicula, getEstrenos, getActores, getOrigenNombre, getPokemon, getPokemons, getPokemons2, getPokemonType } = require('../controllers/demo');

const rutas = Router();

rutas.get('/peliculas', getPeliculas);

rutas.get('/pelicula/:id', getPelicula)

rutas.get('/estrenos', getEstrenos);

rutas.get('/actores', getActores);

rutas.get('/nombre/:name', getOrigenNombre);

rutas.get('/pokemon/:name', getPokemon);

rutas.get('/pokemons', getPokemons);

rutas.get('/pokemons2', getPokemons2);

rutas.get('/pokemontype/:type', getPokemonType);

module.exports = rutas;