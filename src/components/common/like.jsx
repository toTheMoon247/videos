import React from 'react';


// input: Is the component liked?
/* output of the component(and the events that the component will raise): we want that the user of this component will be 
   notified onClick... and so the consumer of the component will be able to save this to the db */


const Like = (props) => {
	let classes = "fa fa-heart";
	if (!props.liked)
		classes += "-o";
	return (
		<i style={{ cursor: "pointer" }} 
		   onClick={props.onClick} 
		   className={classes} 
		   aria-hidden="true"
		></i> );

}

export default Like;