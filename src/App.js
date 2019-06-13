import React, {Component} from 'react';
import './App.css';

import Person from './Components/Person/Person'

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Roberto', age: 22 },
			{ name: 'Cesar', age: 26 }
		]
	}

	switchNameHandler = () => {
		//this.state.  = 'Maximilian';
		this.setState({
			persons: [
				{ name: 'Maximilian', age: 28 },
				{ name: 'Roberto', age: 22 },
				{ name: 'Cesar', age: 27 }
			]
		})
	}

	render(){
		return (
			<div className="App">
				<h1>Persons:</h1>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
				<button onClick={this.switchNameHandler}>Switch Name</button>
			</div>
		);
	}
}

export default App;
