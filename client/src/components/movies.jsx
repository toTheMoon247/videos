import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Like from './common/like';

class Movies extends Component {
	state = {
		movies: []
	};

	async componentDidMount() {
		try {
			const promise = axios.get('http://localhost:3001/api/movies');
			const response = await promise;
			const { data: movies } = response;

			this.setState({ movies });
		} catch (ex) {
			alert('Alert: something failed while trying to get movies...');
			console.log('something failed while trying to get movies...');
			console.log(ex);
		}
	}

	handleDelete = movie => {
		const movies = this.state.movies.filter(m => m._id !== movie._id);
		this.setState({ movies });
	};

	handleLiked = (movie) => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };

		movies[index].liked =  !movies[index].liked;
		// TODO: Update the backend
		this.setState({ movies });
	}

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
							<th>Rating</th>
							<th>Liked</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						{ this.state.movies.map(movie => (
							<tr key={movie._id}>
								<td><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
								<td>{movie.rating}</td>
								<td><Like liked={movie.liked} onClick={() => this.handleLiked(movie)}/></td>
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