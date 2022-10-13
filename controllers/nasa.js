const { response, request } = require("express");
const axios = require('axios').default;
const key = process.env.API_KEY;

const getPictures = (req = request, res = response) => {
    //Estandarizar formatos de respuesta/salida
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=50`)
        .then ((response)=> {
            const {
                status, 
                statusText,               
            } = response;
             
            //res.status(200).json(response.data)
            //Ej de Estandarización de formato de salida/respuesta
            res.status(status).json({                
                'status':statusText,                
                data:response.data
            });
            
        })
        .catch((err) => {
            //res.status(404);
            //Ej de Estandarización de formato de salida/respuesta
            const {message = '', code = ''} = err;
            res.status(400).json({
                status:'error',
                message,
                code,
            });
        })
}

const getPictureByDate = (req = request, res = response) => {
    //Estandarizar formatos de respuesta/salida
    //No utilizar los query params directamente en la url, realizar desestructuración primero y utilizar la constante en la url
    //EJ: const {date} = req.params; 
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${req.params.date}`)
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {            
            //Verificar si se peude obtener el codigo de error desde la api de lan NASA
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
    //Estandarizar formatos de respuesta/salida           
    //Utilizar las constantes desesctructuradas en la url : start_date, end_date    
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${req.query.start_date}&end_date=${req.query.end_date}`)     
        .then((response) => {
            res.status(200).json(response.data);            
        })
        .catch((err) => {            
            //Verificar si se puede obtener el codigo de error 4xx,5xx desde la api de la NASA  (response.status)
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