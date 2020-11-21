import React from 'react';
import './Product.module.css';

const product = (props) => {
	return (
		
			<tr key={props.id}>
				<td>{props.name}</td>
				<td>{props.brand} </td>
				<td>{props.price} </td>
				<td>{props.type} </td>
				<td>{props.size} </td>
				<td>{props.date_opened} </td>
			</tr>
		
	)
}

export default product;