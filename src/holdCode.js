import React, { Component } from 'react';
import './App.css';
import Product from './components/Product/Product';

class App extends Component() {
	state = {
		products : [
			{name: 'Sunday', brand: 'Bumble & Bumble', type: 'Hair', price: '$27.00', size: '8.5oz', date_opened: '8/10/2020'},
			{name: 'Hairdresser\'s Invisible Oil', brand: 'Bumble & Bumble', type: 'Hair', price: '$28.00', size: '8.5oz', date_opened: '7/23/2020'},
			{name: 'The Concentrate', brand: 'La Mer', type: 'Skin', price: '$375.00', size: '1oz',  date_opened: '4/12/2017'},
			{name: 'They\'re Real', brand: 'Benefit Cosmetics', type: 'Makeup', price: '$25.00', size: '0.3oz',  date_opened: '12/28/2019'}
		]
	}
	render () {
		return (
    <div className="App">
      <header className="App-header">
        <p>This is my beauty app</p>
				<Product
					 name={this.state.products[0].name} 
					 brand={this.state.products[0].brand}
					 type={this.state.products[0].type}
					 size={this.state.products[0].size}
					 price={this.state.products[0].price}
					 date_opened={this.state.products[0].date_opened}
					 />
      </header>
    </div>
  );
	}
  
}

export default App;


import React from 'react';

const product = (props) => {
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Brand: {props.brand} </p>
			<p>Type: {props.type} </p>
			<p>Price: {props.price} </p>
			<p>Size: {props.size} </p>
			<p>Date Opened: {props.date_opened} </p>
		</div>
	)
}

export default product;