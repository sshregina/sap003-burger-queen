import React from 'react';
import { Box, Typography, Button } from '@material-ui/core'
import Logo from './crown-hamburg-on-5a302518836302.4954639815131046645382.jpg';
// Box, Typography, Button
function Header() {
	return (
		<Box
			display="flex"
			justifyContent="space-between"
			height='124px'
			bgcolor='#BF360C'
			p='12px'
			color="#f00"
		>
			<Box display="flex">
				<img width={"100px"} height={"100px"} src={Logo} alt="Logo Burger Queen" />

				{/* <Box height="100px" width="100px" bgcolor="#000" >
				</Box> */}
				<Box fontWeight="600" color="#FFFFFF" p="10px" >
					<Typography variant="h4">Burger Queen</Typography>
				</Box>
			</Box>
			<Box alignSelf="flex-end">
				<Button variant="contained" sizeSmall >Sair</Button>
			</Box>
		</Box>
	);
}


export default Header;