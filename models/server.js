const express = require('express');
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.middleware();
        this.router();
        this.port = process.env.PORT;
    }

    middleware()  {
        // cors
        this.app.use(cors());
        // para usar una carpeta publica.
        // Una vez configurada la carpeta publica, la ruta raiz deja de funcionar / la omite
        this.app.use(express.static('public'));
    }

    router() {
        this.app.use('/api/v1/peliculas', require('../routes/peliculas'));


        this.app.all('*', (req, res) => {
            res.send('<h1> 404 </h1>')
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

// Exporto lo que quiero que el usuario pueda ver.
module.exports = Server; 