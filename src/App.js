import React, { Component } from 'react';
//import classes from './App.css';
import Products from './components/Products/Products';
import Layout from './hoc/Layout/Layout';

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Products />
				</Layout>
			</div>
		)
	} 
}

export default App;
