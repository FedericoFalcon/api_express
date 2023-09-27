const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middleware();
        this.routers();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servercito escuchando en el puerto: ${this.port}`)
        })
    }
    middleware(){
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    routers(){
        this.app.use('/v1', require('../routes/demo'));
    }
}

module.exports = Server;