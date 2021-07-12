import { React, Component } from 'react';

class AddMovieForm extends Component {
	state = {
		movie: { title: '', rating: ''}
	};


	// e for event. 
	handleSubmit = e =>{
		// prevent submitting the form to the server. we want to prevent a full page reload
		e.preventDefault();

		// call the server
		console.log("to do: submit to the server")
		// redirect the user to another page
	};

	handleChange = e => {
		const movie = {...this.state.movie};
		movie[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ movie });
	};

	render() {
		return(
			<div>
				<h1>Add a new movie</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="moviename">Title</label>
						<input 
							value={this.state.movie.name} 
							onChange={this.handleChange} 
							name="title"
							id="moviename" 
							type="text" 
							className="form-control"/>
					</div>
					<div className="form-group">
						<label htmlFor="rating">Rating</label>
						<input 
							value={this.state.movie.rating} 
							onChange={this.handleChange} 
							name="rating"
							id="rating" 
							type="text" 
							className="form-control"/>
					</div>
					<button className="btn-primary">Add</button>
				</form>
			</div>
		);
	}
}

export default AddMovieForm;