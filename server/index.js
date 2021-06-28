const mongoose = require('mongoose');
const movies = require('./routes/movies');
const express = require('express');
const app = express();

// Connect to the database
mongoose.connect('mongodb://localhost/videos') // TODO:: Extract it to a config file
	.then(() => console.log('Connected to mongoDB...'))
	.catch(err => console.error('# Could not connect to MongoDB #'));

app.use(express.json());
app.use('/api/movies', movies);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
