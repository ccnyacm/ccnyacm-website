import React from 'react';
import {
	Paper,
	Button
} from '@material-ui/core';

export const CarouselItem = ({ item }) => (
	<Paper>
		<h2>{item.name}</h2>
		<p>{item.description}</p>

		<Button className="CheckButton">
			Check it out!
    </Button>
	</Paper>
)