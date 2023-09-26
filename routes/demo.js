const { Router } = require('express');

const { getPeliculas, getPelicula, getEstrenos, getActores, getOrigenNombre, getPokemon, getPokemons } = require('../controllers/demo');

const rutas = Router();

rutas.get('/peliculas', getPeliculas);

rutas.get('/pelicula/:id', getPelicula)

rutas.get('/estrenos', getEstrenos);

rutas.get('/actores', getActores);

rutas.get('/nombre/:name', getOrigenNombre);

rutas.get('/pokemon/:name', getPokemon);

rutas.get('/pokemons', getPokemons);



module.exports = rutas;