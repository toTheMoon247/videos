import { React, Component } from 'react';

class AddMovieForm extends Component {
	username = React.createRef();


	// e for event. 
	handleSubmit = e =>{
		// prevent submitting the form to the server. we want to prevent a full page reload
		e.preventDefault();

		// call the server
		console.log("to do: submit to the server")
		// redirect the user to another page
	};

	render() {
		return(
			<div>
				<h1>Add a new movie</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="moviename">Title</label>
						<input ref={this.username} id="moviename" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label htmlFor="rating">Rating</label>
						<input id="rating" type="text" className="form-control"/>
					</div>
					<button className="btn-primary">Add</button>
				</form>
			</div>
		);
	}
}

export default AddMovieForm;