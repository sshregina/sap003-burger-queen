import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';

function Item() {
	return (
		<Box
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			p="10px"
		>
			<Box>
				<Typography>Hamburguer simples</Typography>
			</Box>
			<Box display="flex" alignItems="center">
				<Box pr="10px">
					<Typography>R$ 10</Typography>
				</Box>
				<Box>
					<Button variant="contained" size="small">+</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default Item;