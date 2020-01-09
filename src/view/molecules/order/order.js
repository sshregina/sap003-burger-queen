import React from 'react';
import { Box, Button, ButtonGroup, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

function Order() {
    return (
        <Box bgcolor="#F1F1F1" height="898px" width="768px" display="flex" color="#444444" flexDirection="column">
            <Box bgcolor="#9C2B08" height="60px" width="768px" >
                <Box p="12px">
                    <ButtonGroup color="#FFFFFF">
                        <Button>CAFÉ DA MANHÃ</Button>
                        <Button>ALMOÇO</Button>
                    </ButtonGroup>
                </Box>
            </Box>
            <Box>
                <Box bgcolor="#FFFFFF" width="300px" height="100px" borderRadius="8px" display="flex">
                    <Typography>HAMBÚRGUERES</Typography>
                </Box>
                <Box bgcolor="#FFFFFF" width="300px" height="100px" borderRadius="8px" display="flex">
                    <Typography>ADICIONAIS</Typography>
                </Box>
                <Box bgcolor="#FFFFFF" width="300px" height="100px" borderRadius="8px" display="flex">
                    <Typography>BEBIDAS</Typography>
                </Box>
            </Box>
            <Box justifyContent="left">
                <Box bgcolor="#FFFFFF" width="300px" height="100px" borderRadius="8px" display="flex">
                    <Typography>RESUMO DO PEDIDO</Typography>
                </Box>
            </Box>
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    root: {

    },
}));

export default Order;