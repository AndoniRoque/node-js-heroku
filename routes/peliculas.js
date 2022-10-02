const { Router } = require("express");
const { getPopulares, getEstrenos, getMovie, getBusqueda } = require("../controllers/peliculas");


const router = Router();

router.get('/populares', getPopulares);

router.get('/estrenos', getEstrenos);  

router.get('/movie/:id', getMovie);

router.get('/busqueda', getBusqueda);

module.exports = router;