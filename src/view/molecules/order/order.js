import React from 'react';
import { Box, Button, ButtonGroup, Typography, Divider } from '@material-ui/core'
// import { makeStyles } from '@material-ui/styles'

// const useStyles = makeStyles({
//     root: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

//         height: 48,
//         padding: '0 30px',
//     },
// });


function Order() {
    // const classes = useStyles();
    return (
        <Box bgcolor="#F1F1F1" height="898px" width="768px" display="flex" color="#444444" flexDirection="column">
            <Box bgcolor="#9C2B08" height="60px" width="768px" >
                <Box p="12px">
                    <ButtonGroup variant="text">
                        <Button>CAFÉ DA MANHÃ</Button>
                        <Button>ALMOÇO</Button>
                    </ButtonGroup>
                </Box>
            </Box>

            <Box display="flex" >

                <Box m="20px">

                    <Box bgcolor="#FFFFFF" width="350px" borderRadius="8px" mb="20px" >
                        <Box p="10px">
                            <Typography variant="subtitle1"><b>HAMBÚRGUERES</b></Typography>
                        </Box>
                        <Divider />
                        <Box display="flex" justifyContent="space-between" alignItems="center" p="10px">
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
                        <Divider />
                        <Box display="flex" justifyContent="space-between" alignItems="center" p="10px">
                            <Box>
                                <Typography>Hamburguer duplo</Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box pr="10px">
                                    <Typography>R$ 15</Typography>
                                </Box>
                                <Box>
                                    <Button variant="contained" size="small">+</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box bgcolor="#FFFFFF" width="350px" borderRadius="8px" mb="20px" >
                        <Box p="10px">
                            <Typography variant="subtitle1"><b>ADICIONAIS</b></Typography>
                        </Box>
                        <Divider />

                        <Box display="flex" justifyContent="space-between" alignItems="center" p="10px">
                            <Box>
                                <Typography>Batata Frita</Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box pr="10px">
                                    <Typography>R$ 5</Typography>
                                </Box>
                                <Box>
                                    <Button variant="contained" size="small">+</Button>
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                        <Box display="flex" justifyContent="space-between" alignItems="center" p="10px">
                            <Box>
                                <Typography>Anéis de Cebola</Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box pr="10px">
                                    <Typography>R$ 5</Typography>
                                </Box>
                                <Box>
                                    <Button variant="contained" size="small">+</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box bgcolor="#FFFFFF" width="350px" borderRadius="8px" mb="20px" >
                        <Box p="10px">
                            <Typography variant="subtitle1"><b>BEBIDAS</b></Typography>
                        </Box>
                        <Divider />
                        <Box display="flex" alignItems="center" justifyContent="space-between" p="10px">
                            <Box>
                                <Typography>Refrigerante 750ml</Typography>
                            </Box>
                            <Box display="flex">
                                <Box pr="10px">
                                    <Typography>R$ 10</Typography>
                                </Box>
                                <Box>
                                    <Button variant="contained" size="small">+</Button>
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                        <Box display="flex" alignItems="center" justifyContent="space-between" p="10px">
                            <Box>
                                <Typography>Refrigerante 500ml</Typography>
                            </Box>
                            <Box display="flex">
                                <Box pr="10px">
                                    <Typography>R$ 7</Typography>
                                </Box>
                                <Box>
                                    <Button variant="contained" size="small">+</Button>
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                        <Box display="flex" alignItems="center" justifyContent="space-between" p="10px">
                            <Box>
                                <Typography>Água 750ml</Typography>
                            </Box>
                            <Box display="flex">
                                <Box pr="10px">
                                    <Typography>R$ 7</Typography>
                                </Box>
                                <Box>
                                    <Button variant="contained" size="small">+</Button>
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                        <Box display="flex" alignItems="center" justifyContent="space-between" p="10px">
                            <Box>
                                <Typography>Água 500ml</Typography>
                            </Box>
                            <Box display="flex">
                                <Box pr="10px">
                                    <Typography>R$ 5</Typography>
                                </Box>
                                <Box>
                                    <Button variant="contained" size="small">+</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>

                <Box m="20px" ml="0" bgcolor="#FFFFFF" width="350px" borderRadius="8px">
                    <Box p="10px">
                        <Typography variant="subtitle1"><b>RESUMO DO PEDIDO</b></Typography>
                    </Box>
                    <Divider />
                    <Box>
                        <Box p="10px">
                            <Typography><b>MESA:</b></Typography>
                        </Box>
                        <Box p="10px" pt="0">
                            <Typography><b>NOME:</b></Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <Box display="flex" alignItems="center" justifyContent="space-between" p="10px">
                        <Box>
                            <Box>
                                <Typography>(FRANGO)</Typography>
                            </Box>
                            <Box justifyContent="space-between" display="flex">
                                <Box>
                                    <Typography>Hamburguer simples</Typography>
                                </Box>
                                <Box pl="30px">
                                    <Typography>R$ 10</Typography>
                                </Box>
                            </Box>
                            <Box justifyContent="space-between" display="flex">
                                <Box>
                                    <Typography>+ OVO</Typography>
                                </Box>
                                <Box>
                                    <Typography>R$ 1</Typography>
                                </Box>
                            </Box>

                        </Box>
                        <Box>
                            <Box pt="10px">
                                <Button variant="contained" size="small"><b>-</b></Button>
                            </Box>
                        </Box>
                    </Box>
                    <Divider />
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box p="10px">
                            <Typography><b>TOTAL</b></Typography>
                        </Box>
                        <Box p="10px">
                            <Typography><b>R$</b></Typography>
                        </Box>
                    </Box>
                    <Box m="10px">
                        <Box pb="10px">
                            <Button variant="contained" fullWidth size="large">ENVIAR PARA PREPARO</Button>
                        </Box>
                        <Box>
                            <Button variant="contained" fullWidth size="small">
                                CANCELAR PEDIDO
                            </Button>
                        </Box>
                    </Box>
                </Box>

            </Box>

        </Box >
    );
}


export default Order;