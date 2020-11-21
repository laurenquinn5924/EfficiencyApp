import React, { Component } from 'react';
import Product from './Product/Product';
import classes from './Products.module.css';


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
			<div className={classes.Products}>
				<table>
					<thead>
						<tr>
							<th>Product</th>
							<th>Brand</th>
							<th>Price</th>
							<th>Type</th>
							<th>Size</th>
							<th>Date Opened</th>
						</tr>
					</thead>
					<tbody>
						{this.state.products.map((product) => {
							return (
								<Product 
									key={product.id} 
									name={product.name} 
									brand={product.brand}
									price={product.price}
									type={product.type}
									size={product.size}
									date_opened={product.date_opened}
								/>
							)
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Products;