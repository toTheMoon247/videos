const {Movie} = require('../models/movie');
const mongoose = require('mongoose');

exports.get_all = async(req, res) => {
	const movies = await Movie.find().sort('title');
	res.send(movies);
};