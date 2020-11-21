import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from  './NavigationItem/NavigationItem';

const navigationItems = () => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/" active>Add Product+</NavigationItem>
		<NavigationItem link="/">Logout</NavigationItem>
	</ul>
);

export default navigationItems;