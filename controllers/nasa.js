const { response, request } = require("express");
const axios = require('axios').default;
const key = process.env.API_KEY;

const getPictures = (req = request, res = response) => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=50`)
        .then ((response)=> {
            res.status(200).json(response.data)
        })
        .catch((err) => {
            res.status(404);
        })
}

const getPictureByDate = (req = request, res = response) => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${req.params.date}`)
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            res.status(406).json({
                msg: 'Al parecer las fechas ingresadas no dan un resultado aceptado.\
                Por favor asegúrese de respetar el formato: YYYY-MM-DD.'
            });
        })
}

const getPicturesByDateRange = (req = request, res = response)  => {
    console.log(req.query.start_date);
    console.log(req.query.end_date);
    const {start_date, end_date} = req.query
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${req.query.start_date}&end_date=${req.query.end_date}`)     
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            res.status(406).json({
                msg: 'Al parecer las fechas ingresadas no dan un resultado aceptado. \
                Por favor asegúrese de respetar el formato: YYYY-MM-DD. \
                Asegúrese también de que la fecha de inicio sea anterior a la fecha de finalización.',
                start_date,
                end_date,
            });
        })
}

module.exports = {
    getPictureByDate,
    getPicturesByDateRange,
    getPictures,
}