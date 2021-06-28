const mongoose = require('mongoose');

const Movie = mongoose.model('Movies', new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		minlength: 2,
		maxlength: 128, // To avoid malicious client to abuse us and block the memory
	},
	rating: {
		type: Number,
		required: true,
		min: 0,
		max: 128
	}
}));

module.exports.Movie = Movie;