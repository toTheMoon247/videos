const {Movie} = require('../models/movie');
const mongoose = require('mongoose');

exports.get_all = async(req, res) => {
	try {
		const movies = await Movie.find().sort('title');
		res.send(movies);
	} catch (ex) {
		console.log('Log message: Oh no. We have an error...');
		res.status(500).send('Oh no. We have an error...');
	}
};