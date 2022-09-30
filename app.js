//Paquetes propios de node
require('dotenv').config();     // Paquetes de terceros
const Server = require('./models/server');      // Paquetes nuestros

const api_key = process.env.API_KEY;


const server = new Server();

server.listen();
