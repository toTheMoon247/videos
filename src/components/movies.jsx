import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';

class Movies extends Component {
	state = {
		movies: getMovies()
	};

	handleDelete = movie => {
		const movies = this.state.movies.filter(m => m._id !== movie._id);
		this.setState({ movies });
	};

	render() {
		const { length: count } = this.state.movies;

		if (this.state.movies.length === 0)
			return <p>There are no movies in the database.</p>

		return (
			<React.Fragment>
				<p>There are {count} movies in the database.</p>
				<table className="table">
					<thead>
						<tr>
							<th>Title</th>	
							<th>Genre</th>
							<th>Stock</th>
							<th>Rate</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						{ this.state.movies.map(movie => (
							<tr key={movie._id}>
								<td>{movie.title}</td>
								<td>{movie.genre.name}</td>
								<td>{movie.numberInStock}</td>
								<td>{movie.dailyRentalRate}</td>
								<td><Like /></td>
								<td>
									<button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
								</td>
							</tr>	
						))}
					</tbody>
				</table>
			</React.Fragment>
		)
	}
}

export default Movies;