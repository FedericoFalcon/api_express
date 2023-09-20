const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();

        // Seteo de puerto por defecto
        this.port = process.env.PORT || 3000;

        // 1° en orden
        this.middleware();

        // 2° en orden
        this.routers();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servercito escuchando en el puerto: ${this.port}`)
        })
    }
    
    middleware(){
        // CORS
        // TODO: Agregar alguna regla en caso que sea necesario
        this.app.use(cors());

        // Una vez que se configura esta sección pública,
        // NO es posible utilizar la ruta del inicio ('Home')
        this.app.use(express.static('public'));

    }

    routers(){
        // this.app.get('/', (req, res) => {
        //     res.send('Home')
        // })

        this.app.use('/api/v1/demo', require('../routes/demo'));
    }

}

module.exports = Server;


// app.get('/home', (req, res) => {
//     res.json({text : 'Estamos en casa'})
// })

// app.get('/render', (req, res) => {
//     res.json({text : 'Estamos deployando nuestra app en render'})
// })

