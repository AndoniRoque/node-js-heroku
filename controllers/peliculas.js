const { response, request } = require("express");

const getPopulares = (req = request, res = response) => {
    res.send('Populares API');
}

const getEstrenos = (req = request, res = response) => {
    // parametros luego del "?"
    const (anio, catergoria, idioma, page) = req.query;
    console.log(queryParams);
    res.status(401).json({
        msg: 'estrenos',
        anio,
        catergoria,
        idioma,
        page,
    })
    res.send('Estrenos API' + 
    '<div><p><strong> Director: </strong>' + queryParams.director + '</p>' +
    '<p><strong> Peliculas: </strong>' + queryParams.name + '</p></div>');
}

const getMovie = (req = request, res = response) => {
    // parametros dentro de la url
    const {id} = req.params;
    res.send('Pelicula API' + " " + id);
}

const getBusqueda = (req = request, res = response) => {
    res.send('Busquedas API');
}

module.exports = {
    getBusqueda,
    getEstrenos,
    getPopulares,
    getMovie
}