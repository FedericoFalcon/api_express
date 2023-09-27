const axios = require('axios');

// En este get juntamos la lógica para que responda a params, pero tambien a
// queryparams en el caso que los tenga. Devuelve descripciones del pokemon a buscar
const getPokemon = (req, res) => {
    const { name } = req.params;
    const { abilities, sprites, stats } = req.query;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(({status, data, statusText}) => {
        if (!abilities && !sprites && !stats){
            res.status(200).json({
            status,
            statusText,
            data: {
                nombre: name,
                id: data.id,
                tipo: data.types[0].type.name,
                altura: `${data.height} pies`,
                peso: `${data.weight} kg`
            },
            });
        }else{
            const responseData = {
                status,
                statusText,
                data: {
                  nombre: data.name,
                },
            };
            if (abilities === '1') {
            responseData.data.habilidades = data.abilities;
            }else{
                responseData.data.habilidades = {queryError: 'Unico valor aceptado: 1 (true)'}
            }
            if (sprites === '1') {
            responseData.data.sprites = data.sprites;
            }else{
                responseData.data.sprites = {queryError: 'Unico valor aceptado: 1 (true)'}
            }
            if (stats === '1') {
            responseData.data.stats = data.stats;
            }else{
                responseData.data.stats = {queryError: 'Unico valor aceptado: 1 (true)'}
            }
            res.status(200).json(responseData);
        }
    })
    .catch(() => {
        res.status(404).json({Error: 'Pokemon no encontrado'});
    })
}

// Devuelve 50 pokemons
const getPokemons = (req, res) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0")
    .then(({status, data, statusText}) => {
        res.status(200).json({
            status,
            statusText,
            data,
        });
    })
    .catch(() => {
        res.status(400).json({Error: 'Bad request'});
    })
};

// Devuelve otros 50 pokemons
const getPokemons2 = (req, res) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=50")
    .then(({status, data, statusText}) => {
        res.status(200).json({
            status,
            statusText,
            data,
        });
    })
    .catch(() => {
        res.status(400).json({Error: 'Bad request'});
    })
};

// Al igual que getPokemon, puede recibir solo params o tambien queryparams
// Devuelve descripciones de tipo de pokemons
const getPokemonType = (req, res) => {
    const { type } = req.params;
    const { pokemon, damage_relations, moves } = req.query;

    axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    .then(({status, data, statusText}) => {
        if (!pokemon && !damage_relations && !moves){
            res.status(200).json({
            status,
            statusText,
            data: {
                tipo: data.name,
                id: data.id,
            },
            });
        }else{
            const responseData = {
                status,
                statusText,
                data: {
                  nombre: data.name,
                },
            };   
            if (pokemon === '1') {
            responseData.data.pokemon = data.pokemon;
            }
            if (damage_relations === '1') {
            responseData.data.damage_relations = data.damage_relations;
            } 
            if (moves === '1') {
            responseData.data.moves = data.moves;
            }
            res.status(200).json(responseData);
        }
    })
    .catch(() => {
        res.status(404).json({Error: 'Pokemon no encontrado'});
    })
}

module.exports = {
    getPokemon,
    getPokemons,
    getPokemons2,
    getPokemonType
};