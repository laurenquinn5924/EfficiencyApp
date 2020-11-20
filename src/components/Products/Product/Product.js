import React from 'react';
import './Product.module.css';

const product = (props) => {
	return (
		<div className="product">
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