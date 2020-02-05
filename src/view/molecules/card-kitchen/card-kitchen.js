import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';



function CardKitchen({ orders }) {
  return (
    <Box bgcolor="#F1F1F1" display="flex" color="#444444" minHeight="100vh" justifyContent="center">
      <Box p="10px">
        <Button to='/' component={Link} variant="contained">VOLTAR</Button>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">

        <Box textAlign="center" display="flex" py="40px">
          <Typography variant="h4">PEDIDOS PARA PREPARAR</Typography>
        </Box>
        {orders.map((item) => {
          return <Box key={item.id}>
            <Box bgcolor="#FFFFFF" width="500px" borderRadius="8px" justifyContent="space-around" mb="10px">
              <Box p="10px" >
                <Typography>STATUS: {item.status}</Typography>
                <Typography>NOME DO CLIENTE: {item.name}</Typography>
                <Typography>MESA: {item.table}</Typography>
                <Typography>HORÁRIO DO PEDIDO: {item.dispatchTime}</Typography>
                <Typography>ITENS DO PEDIDO: </Typography>
                {item.items.map((product) => {
                  return (
                    <Typography key={product.id}>
                      - {product.name}
                      {' '}
                      {product.options ? `Opção: ${product.options}` : ''}
                      {' '}
                      {product.extras ? `Extra: ${product.extras}` : ''}
                    </Typography>
                  )
                })}
              </Box>
            </Box>
          </Box>
        })}
      </Box>
    </Box>
  )
}

export default CardKitchen;
