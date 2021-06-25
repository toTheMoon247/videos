import React, { Component } from 'react';


// input: Is the component liked?
/* output of the component(and the events that the component will raise): we want that the user of this component will be 
   notified onClick... and so the consumer of the component will be able to save this to the db */


class Like extends Component {
	state = {

	}

	render() {
		return( <i class="fa fa-heart-o" aria-hidden="true"></i> );
	}
}

export default Like;