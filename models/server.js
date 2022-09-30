const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.router();
        this.port = process.env.PORT;
    }

    router() {
        this.app.get('/', (req, res) => {
            res.send('HOME API!')
        })
        
        this.app.get('/populares', (req, res) => {
            // Make a request for a user witha  give ID
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
            .then((response)=>{
                // handle success
                console.log(response.status);
                console.group(response.data);
                res.json(response.data);
            }).catch(
                (error) => console.log(error)
            )
        })

        this.app.all('*', (req, res) => {
            res.send('404 faefaefa')
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