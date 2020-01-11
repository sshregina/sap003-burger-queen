import React from 'react';
import { Box, Typography, Button, TextField } from '@material-ui/core'


function HeadClientInfo() {
    return (
        <Box bgcolor="#F1F1F1" display="flex" color="#444444" >
            <Box p="10px">
                <Button variant="contained" sizeSmall>Voltar</Button>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column" alignItems="center" >
                <Box ontWeight="600" textAlign="center" display="flex" py="40px">
                    <Typography variant="h4">DADOS DO CLIENTE</Typography>
                </Box>

                <Box bgcolor="#FFFFFF" width="500px" borderRadius="8px" justifyContent="space-around" >
                    <Box p="10px">
                        <Box p="10px">
                            <Typography variant="h5" >MESA</Typography>
                        </Box>
                        <TextField variant="outlined" fullWidth />

                        <Box p="10px">
                            <Typography variant="h5">NOME</Typography>
                        </Box>
                        <TextField variant="outlined" fullWidth />
                        <Box pt="20px" alignSelf="flex-end">
                            <Button variant="contained" size="large" fullWidth>Continuar</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}

export default HeadClientInfo;