const express = require('express');
// const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        // Seteo de puerto por defecto
        this.port = process.env.PORT || 3000;

        // this.middleware();
        this.routers();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server escuchando en el puerto: ${this.port}`)
        })
    }
    // middleware(){
    //     // CORS
    //     // TODO: Agregar alguna regla en caso que sea necesario
    //     this.app.use(cors());
        
    //     // Una vez configurada la carpeta pública, la ruta raiz
    //     this.app.use(express.static('public'));
    // }

    routers(){
        this.app.get('/', (req, res) => {
            res.send('Hello World!')
        })
    }
}

module.exports = Server;


// app.get('/home', (req, res) => {
//     res.json({text : 'Estamos en casa'})
// })

// app.get('/render', (req, res) => {
//     res.json({text : 'Estamos deployando nuestra app en render'})
// })

