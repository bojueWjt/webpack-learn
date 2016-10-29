import React, { Component } from 'react';
import { Link } from 'react-router'; 

class App extends Component {
	render() {

		return (
			<div>
				<h1>this is App </h1>
				<Link to={`/page2`}>page2</Link>
				{this.props.children}
			</div>
			);
	}
}

export default App;