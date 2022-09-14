const axios = requiere('axios').default;
require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;
const api_key = process.env.API_KEY;

app.get('/', (req, res) => {
    res.send('Home API!');
})

app.get('/populares', (req, res) => {
    // Make a request for a user with a given ID 
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    .then((response) =>{
        //handle success
        console.log(response.status);
        console.log(response.data);
        res.json(response.data);
    }).catch(
        (error) => console.log(error)
    )
})