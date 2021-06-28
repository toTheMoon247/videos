const {Movie} = require('../models/movie');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
	try {
		const movies = await Movie.find().sort('title');
		res.send(movies);
	} 
});

module.exports = router;