const { response, request } = require("express");
const axios = require('axios').default;
const key = process.env.API_KEY;

const getPictures = (req = request, res = response) => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=50`)
        .then ((response)=> {
            res.status(200).json(response.data)
        })
        .catch((err) => {
            res.send('ERROR');
        })
}

const getPictureByDate = (req = request, res = response) => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${req.params.date}`)
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {

            res.send('ERROR');
        })
}

const getPicturesByDateRange = (req = request, res = response)  => {
    console.log(req.query.start_date);
    console.log(req.query.end_date);
    if (req.query.start_date > end_date) {
        console.log("ERROR");
    }
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${req.query.start_date}&end_date=${req.query.end_date}`)     // Modificar
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            res.send('ERROR');
        })
}

module.exports = {
    getPictureByDate,
    getPicturesByDateRange,
    getPictures,
}