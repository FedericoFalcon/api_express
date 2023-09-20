const axios = require('axios');
const {request, response} = require('express');

// // Si yo quisiera traer los objetos request y response explicitamente
// const getPeliculas = (req = request, res = response) => {
//     res.json({peliculas: 'Peliculas'});
// };

// Los query param van ?name=carlos&anio=2022&genero=suspenso

const getPeliculas = (req, res) => {
    const {anio, ...resto} =  req.query;
    console.log(req.query);
    console.log(resto);
    res.json({name: `Peliculas del año: ${anio}`});
};

const getPelicula = (req = request, res = response) => {
    const {id} = req.params;
    console.log(id);
    console.log(typeof(id));
    res.json({name: `Pelicula única con id: ${id}`});
};

const getEstrenos = (req, res) => {
    res.json({name: 'Estrenos'});
};

// // Si quisiera retornar un html o un string pelado
// const getEstrenos = (req, res) => {
//     res.send('<h1>ESTRENOS 2023</h1>');
// };

const getActores = (req, res) => {
    res.json({name: 'Actores'});
};

const getOrigenNombre = (req, res) => {
    console.log(req.params);
    const { name } = req.params;

    axios.get(`https://api.nationalize.io/?name=${name}`)
    .then(({status, data, statusText}) => {
        // handle success
        console.log({status, data, statusText});
        res.status(200).json({
            status,
            data,
            statusText,
            name
        });
    })
    // .then((response) => {
    //     // handle success
    //     console.log(response);
    //     res.status(200).json({
    //         status: response.status,
    //         data: response.data,
    //         statusText: response.statusText,
    //         name: 'Origen nombres'
    //     });
    // })
    .catch((error) => {
        // handle error
        console.log(error);
        res.status(400).json({msg: 'error inesperado'});
    })
    // .finally(() => {
    //     //always executed
    // })

    // res.json({name: 'Actores'});
};

module.exports = {
    getPeliculas,
    getPelicula,
    getEstrenos,
    getActores,
    getOrigenNombre
};