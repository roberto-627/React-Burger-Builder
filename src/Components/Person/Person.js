import React from 'react';

const Person =  (props) => {
	return (
		<div className="Person">
			<p>Hi my name is {props.name} and I'm {props.age} years old!</p>
		</div>
	); 
};

export default Person;