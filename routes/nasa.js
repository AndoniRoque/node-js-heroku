const { Router } = require("express");
const { getPictures, getPictureByDate, getPicturesByDateRange } = require("../controllers/nasa");


const router = Router();

router.get('/pictures', getPictures);

router.get('/picture/:date', getPictureByDate);  

router.get('/pictures_range/', getPicturesByDateRange);

module.exports = router;