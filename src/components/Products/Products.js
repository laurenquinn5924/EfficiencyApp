import React, { Component } from 'react';
//import classes from './Products.module.css';
import Product from './Product/Product';

class Products extends Component {
	state = {
		products : [
			{id: 'wedfv', name: 'Sunday', brand: 'Bumble & Bumble', type: 'Hair', price: '$27.00', size: '8.5oz', date_opened: '8/10/2020'},
			{id: 'kiuy', name: 'Hairdresser\'s Invisible Oil', brand: 'Bumble & Bumble', type: 'Hair', price: '$28.00', size: '8.5oz', date_opened: '7/23/2020'},
			{id: 'yasn', name: 'The Concentrate', brand: 'La Mer', type: 'Skin', price: '$375.00', size: '1oz',  date_opened: '4/12/2017'},
			{id: 'xorjl', name: 'They\'re Real', brand: 'Benefit Cosmetics', type: 'Makeup', price: '$25.00', size: '0.3oz',  date_opened: '12/28/2019'}
		]
	}
	render () {
		return (
    <div>
			<p>This is my beauty app</p>
			{this.state.products.map((product) => 
				<div>
					<Product 
						key={product.id} 
						name={product.name} 
						brand={product.brand}
						type={product.type}
						size={product.size}
						date_opened={product.date_opened}
					/>
				</div>
			)};
			<div>Here in products</div>
    </div>
  );
	}
}

export default Products;