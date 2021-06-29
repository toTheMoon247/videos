const express = require('express');
const router = express.Router();
const MoviesController = require('../controllers/movies');


router.get('/', MoviesController.get_all);

module.exports = router;